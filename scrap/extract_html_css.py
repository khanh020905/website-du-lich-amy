import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin

def extract_html_and_css(url, output_dir="extracted_ui"):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    print(f"Fetching URL: {url}")
    response = requests.get(url)
    response.raise_for_status()
    
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # 1. Save HTML
    html_path = os.path.join(output_dir, "index.html")
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(soup.prettify())
    print(f"Saved HTML to {html_path}")
    
    # 2. Extract and Save CSS
    # Find all stylesheet links
    css_links = soup.find_all('link', rel='stylesheet')
    css_dir = os.path.join(output_dir, "css")
    if not os.path.exists(css_dir):
        os.makedirs(css_dir)
        
    for index, link in enumerate(css_links):
        href = link.get('href')
        if not href:
            continue
            
        full_url = urljoin(url, href)
        try:
            css_response = requests.get(full_url)
            css_response.raise_for_status()
            
            # Simple naming: use index or filename
            filename = href.split('/')[-1].split('?')[0]
            if not filename.endswith('.css'):
                filename = f"style_{index}.css"
                
            css_path = os.path.join(css_dir, filename)
            with open(css_path, "w", encoding="utf-8") as f:
                f.write(css_response.text)
            print(f"Extracted CSS: {filename}")
        except Exception as e:
            print(f"Failed to extract CSS from {full_url}: {e}")
            
    # Also extract inline CSS
    style_tags = soup.find_all('style')
    if style_tags:
        inline_css_path = os.path.join(css_dir, "inline_styles.css")
        with open(inline_css_path, "w", encoding="utf-8") as f:
            for style in style_tags:
                f.write(style.string if style.string else "")
                f.write("\n/* --- End of style block --- */\n")
        print(f"Saved inline styles to {inline_css_path}")
        
    print("Extraction complete!")

if __name__ == "__main__":
    target_url = "https://neworienthoteldanang.com/nha-hang-bistecca/"
    extract_html_and_css(target_url)
