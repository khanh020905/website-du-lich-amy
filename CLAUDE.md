# Website Du Lịch Amy - Developer Guide & AI Context

## About the Project
This is a modern, premium web application built for the **Tân Phương Nam Hotel**. The platform provides luxurious cinematic presentation of hotel rooms, culinary offers, wellness accommodations, and booking assistance designed to appeal to high-end customers and tourists.

## Tech Stack
- **Core:** React 18, Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Vanilla CSS utilities)
- **Animations:** Framer Motion (Heavy reliance on cinematic entrances, parallax, and glassmorphism)
- **Internationalization:** `react-i18next` (Supports Vietnamese `vi`, English `en`, Korean `ko`, Chinese `zh`)
- **Icons:** `lucide-react`
- **Routing:** `react-router-dom`

## Design & UI Philosophy (CRITICAL)
- **Premium Aesthetics:** We use upscale visuals—sleek dark modes, frosted glassmorphism (`backdrop-blur`), elegant structural framing, and gold accents (`var(--color-gold)`, `#D4AF37`) over plain colors.
- **Dynamic Interfaces:** The site utilizes parallax scrolling (`useScroll`, `useTransform` from framer-motion) and micro-interactions on hover (e.g. `hover:scale-105` on images).
- **Hardware Acceleration:** When using heavy CSS effects like `backdrop-filter: blur()`, isolate the layer and force hardware acceleration (e.g., `transform: 'translateZ(0)'`, `backfaceVisibility: 'hidden'`) to prevent browser rendering anomalies (popping) when combined with framer-motion transforms.

## Internationalization (i18n) Rules
- **DO NOT** hardcode descriptive strings directly into React components.
- All user-facing text strings **MUST** be dynamically generated via the `t()` function from `react-i18next`.
- Apply updates to `src/i18n.ts` consistently across all 4 supported language dictionaries (`vi`, `en`, `ko`, `zh`). Even if a translation is missing, provide an English fallback rather than omitting the key.

## Key Project Architecture 
- `src/i18n.ts`: Central nervous system for all translated strings and application copy.
- `src/App.tsx`: Central router dictating dynamic `/:locale` routing architecture.
- `src/components/Offers.tsx`: High-conversion cinematic offers using parallax logic and frosted glassmorphism overlays synchronized to viewport thresholds.
- `src/components/Accommodations.tsx`: Displays luxurious services (reception, spa) focusing on responsive frosted-glass overlay layouts hugging the bottom of parent elements.
- `src/components/RoomDetail.tsx`: Manages individual room viewing, robust grid displays, and responsive image-zoom Lightboxes.

## Development Workflows
- **Install Dependencies:** `npm install`
- **Start Local Server:** `npm run dev`
- **Production Build:** `npm run build` (Runs `tsc -b && vite build` - keep an eye on build size chunks).

## Mobile Responsiveness Principles
Always code for mobile dimensions as meticulously as desktop. When implementing massive dynamic layouts on desktop, guarantee you compact paddings, margins, gaps, and line heights explicitly on mobile (default Tailwind prefix) whilst guarding the desktop styles using `md:` or `lg:`. Use tools like `line-clamp-2` to restrict text overflow on small viewports so the visual imagery isn't entirely blocked by informational cards.
