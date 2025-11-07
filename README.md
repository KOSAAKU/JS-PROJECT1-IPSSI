# WikiCat

## Project Overview

This is a simple website for a "Cat Encyclopedia" (aka WikiCat) - a project for IPSSI. The project consists of vanilla HTML, CSS, and JavaScript files that can be opened directly in a browser.

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
```

## Architecture Notes

### Data Storage
- Cat datas are stored as a hardcoded array in `script.js:3-10`
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
CSS used to design the website, add animations, and a better look overall

## Development Notes
This code uses best practices in developpment and has been debuged to verify that it works as expected.

When adding new cat entries:
- Add objects to the `cats` array in script.js:3-10
- Each cat object requires: `photo` (URL), `race`, `origin`, `description`

## Work repartition

### Jules
- Website architecture
- Cat data structure
- Easter eggs (audio integration)
- Modal implementation for cat details (when you click on a cat card)
- Navigation bar implementation
- Form for cat submission
- A little part of the CSS (just the forms, and inspired for the popups)
- Readme documentation

### Faris
- Form validation logic
- Cute animations, design(=theme) and transitions
- CSS god icl (written by Jules)
- Age calculator
- Finding and adding the cats to the database (hardcoded array in script.js)