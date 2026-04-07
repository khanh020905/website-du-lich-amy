import asyncio
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin
import sys

# To run this script, you must install Playwright first:
# pip install playwright
# playwright install chromium

async def extract_hyatt_html_css(url, output_dir="scrap/hyatt_offers"):
    try:
        from playwright.async_api import async_playwright
    except ImportError:
        print("Please install playwright: pip install playwright && playwright install")
        sys.exit(1)

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    print(f"Fetching URL with Playwright: {url}")
    
    async with async_playwright() as p:
        # Launch browser in headful or headless mode depending on needs. WAFs often block headless.
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            viewport={'width': 1920, 'height': 1080}
        )
        page = await context.new_page()
        
        # Go to URL and wait until the network is idle to ensure dynamic content loads
        await page.goto(url, wait_until="networkidle")
        
        # Extract HTML
        html_content = await page.content()
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # 1. Save HTML
        html_path = os.path.join(output_dir, "index.html")
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(soup.prettify())
        print(f"Saved HTML to {html_path}")
        
        # 2. Extract and Save CSS
        css_links = soup.find_all('link', rel='stylesheet')
        css_dir = os.path.join(output_dir, "css")
        if not os.path.exists(css_dir):
            os.makedirs(css_dir)
            
        for index, link in enumerate(css_links):
            href = link.get('href')
            if not href:
                continue
            
            full_url = urljoin(url, href)
            # Use fetch API directly in the browser context to download CSS
            try:
                css_text = await page.evaluate(f'''async () => {{
                    const res = await fetch("{full_url}");
                    return await res.text();
                }}''')
                
                filename = href.split('/')[-1].split('?')[0]
                if not filename.endswith('.css'):
                    filename = f"style_{index}.css"
                    
                css_path = os.path.join(css_dir, filename)
                with open(css_path, "w", encoding="utf-8") as f:
                    f.write(css_text)
                print(f"Extracted CSS: {filename}")
            except Exception as e:
                print(f"Failed to fetch CSS from {full_url}: {e}")
                
        # Also extract inline CSS
        style_tags = soup.find_all('style')
        if style_tags:
            inline_css_path = os.path.join(css_dir, "inline_styles.css")
            with open(inline_css_path, "w", encoding="utf-8") as f:
                for style in style_tags:
                    f.write(style.string if style.string else "")
                    f.write("\n/* --- End of style block --- */\n")
            print(f"Saved inline styles to {inline_css_path}")

        await browser.close()
        print("Extraction complete!")

if __name__ == "__main__":
    target_url = "https://www.hyatt.com/hyatt-regency/en-US/danhr-hyatt-regency-danang-resort-and-spa/offers"
    asyncio.run(extract_hyatt_html_css(target_url))
