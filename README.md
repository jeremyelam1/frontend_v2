# Jeremy Elam - Professional Portfolio

A modern, responsive TypeScript React portfolio website showcasing Jeremy Elam's professional experience, skills, and achievements.

## Features

-   🎨 Modern, dark-themed design with smooth animations
-   📱 Fully responsive layout for all devices
-   ⚡ Built with TypeScript and React
-   🎭 Smooth animations using Framer Motion
-   🎨 Styled with Tailwind CSS
-   📊 Interactive timeline for work experience
-   🏷️ Skill categorization with visual tags
-   📧 Direct contact integration

## Tech Stack

-   **Frontend**: React 18, TypeScript
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion
-   **Icons**: Lucide React
-   **Build Tool**: Create React App

## Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd frontend_v2
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

-   `npm start` - Runs the app in development mode
-   `npm build` - Builds the app for production
-   `npm test` - Launches the test runner
-   `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience timeline
│   ├── Skills.tsx      # Technical skills grid
│   ├── Education.tsx   # Education section
│   └── Footer.tsx      # Footer with contact info
├── data/
│   └── resume.ts       # Resume data
├── types/
│   └── index.ts        # TypeScript type definitions
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## Customization

To customize the portfolio with your own information:

1. Update the data in `src/data/resume.ts`
2. Modify the styling in `src/index.css` and component files
3. Update the color scheme in `tailwind.config.js`
4. Replace the favicon and other assets in the `public/` folder

## Deployment

The app can be deployed to any static hosting service:

1. Build the production version:

```bash
npm run build
```

2. Deploy the `build/` folder to your preferred hosting service (Netlify, Vercel, GitHub Pages, etc.)

## License

This project is open source and available under the [MIT License](LICENSE).
