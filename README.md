# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple static web application called "Cat Encyclopedia" - a learning project for IPSSI Lyon. It's a client-side only application with no build tools, dependencies, or backend. The project consists of vanilla HTML, CSS, and JavaScript files that can be opened directly in a browser.

## Project Structure

```
projet/
├── index.html          # Main encyclopedia page with cat carousel
├── form.html           # Form page for users to submit their cats
├── calculate.html      # (Referenced but missing) Age calculator page
├── script.js           # Main page logic - renders cat cards from data array
├── form.js             # Form validation and submission logic
├── style.css           # Global styles with CSS variables and responsive design
└── assets/
    ├── purr.wav        # Audio played on index.html load
    └── meow.mp3        # Audio played on form.html keypress
```

## Running the Application

This is a static website with no build process. To run:

```bash
# Option 1: Open directly in browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux

# Option 2: Use a simple HTTP server (recommended for testing)
python -m http.server 8000
# Then visit http://localhost:8000
```

## Architecture Notes

### Data Storage
- Cat data is stored as a hardcoded array in `script.js:3-10`
- No backend or persistent storage exists
- Form submissions (form.html) validate but don't persist data anywhere

### Audio Integration
- `index.html` autoplays `purr.wav` on page load (script.js:17)
- `form.html` plays `meow.mp3` on any keydown event (form.js:1-5)

### Form Validation
Form validation in `form.js:7-51` includes:
- Name: 2-30 characters, letters/spaces/hyphens only (regex: `/^[a-zA-ZA\s-]+$/`)
- Image: JPEG/PNG/GIF, max 5MB, uses FileReader API
- Description: 10-500 characters
- Note: form.js validates fields with different IDs than form.html uses (e.g., `catName` vs `name`)

### Styling System
CSS uses custom properties defined in `:root` (style.css:1-14):
- Color scheme: Pink/purple gradient theme (`--primary`, `--accent`, `--bg-1`, `--bg-2`)
- Border radius: `--radius-lg` (28px), `--radius-md` (18px)
- Consistent shadow: `--shadow`
- Responsive breakpoints: 900px, 600px

### Known Issues
- `calculate.html` is linked in navigation but doesn't exist
- Form field ID mismatch: form.js expects `catName`, `catRace`, `catOrigin`, `catDescription`, `catPhoto` but form.html uses `name`, `race`, `origin`, `description`, `image`
- Form submission doesn't actually save data anywhere
- Audio autoplay may be blocked by browser policies

## Development Notes

When adding new cat entries:
- Add objects to the `cats` array in script.js:3-10
- Each cat object requires: `photo` (URL), `race`, `origin`, `description`

When modifying styles:
- Use CSS custom properties from `:root` for consistency
- Follow the existing glassmorphism/backdrop-filter aesthetic
- Maintain responsive behavior at 900px and 600px breakpoints
