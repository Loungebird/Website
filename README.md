![Site](.readme/site.png)

# Loungebird Website

Landing page for Loungebird - real-time lounge occupancy insights for London Heathrow Terminal 5.

## Tech Stack

- React 18 + TypeScript
- Vite
- Framer Motion (animations)
- React Router (SPA routing)
- CSS Modules

## Development

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Deployment

### GitHub Pages

The site automatically deploys to GitHub Pages on push to the `main` branch via GitHub Actions.

1. Enable GitHub Pages in your repository settings
2. Set the source to "GitHub Actions"
3. Push to `main` branch

### Docker

Build and run with Docker:

```bash
# Build the image
docker build -t loungebird-website .

# Run the container
docker run -p 8080:80 loungebird-website
```

Or use Docker Compose:

```bash
docker compose up
```
