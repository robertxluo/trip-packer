# Trip Packer

A React-based web application to help you pack for your trips. Create lists, manage items, and set your destination.

## Features

- **Destination Setting**: Set and update your trip destination.
- **Packing List**: Add, edit, and delete packing items.
- **State Management**: Items and destination persist using LocalStorage.
- **Interactive UI**: 
  - Hover to reveal Edit/Delete actions.
  - Check/uncheck items.
  - Auto-selecting input for quick edits.
  - Drag and drop card interface.

## Technology Stack

- **Frontend**: React (with Hooks)
- **Styling**: Tailwind CSS
- **Bundler**: Webpack
- **Server**: Express (for serving static assets)

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd trip-packer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server with hot reloading:

```bash
npm run dev
```

The application will open at `http://localhost:3000`.

### Production Build

To build the project for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```
(Note: `npm start` runs `node server.js` which serves the content from the `public` directory, so you must run `npm run build` first).

## Project Structure

- `src/components`: React components (App, Home, MainContainer, Card, etc.)
- `src/assets`: Images and Styles
- `server.js`: Express server configuration
- `webpack.config.js`: Webpack configuration
- `tailwind.config.js`: Tailwind CSS configuration
