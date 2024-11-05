MyTinerary - Carlos Torreyes
This project is a web application for travel itineraries, developed using React, Redux Toolkit, and Tailwind CSS, and configured with Vite as the build tool. The app allows users to explore and manage itineraries, including details about activities and destinations.

Table of Contents
Features
Prerequisites
Installation
Available Scripts
Dependencies
Development and Configuration
Features
Modern interface using Material Tailwind.
Global state management with Redux Toolkit.
Multi-page navigation with React Router.
Device compatibility with react-responsive-carousel.
Fast development setup with Vite.
Prerequisites
Make sure to have Node.js (>= 14.18.0) and npm (>= 6.14.15) installed to manage the project dependencies.

Installation
Clone the repository:
git clone https://github.com/yourusername/mytinerary-carlostorreyes.git
cd mytinerary-carlostorreyes

Install the dependencies:
npm install

Start the application in development mode:
npm run dev
Available Scripts
In the project, you can run the following commands:

npm run dev: Starts the development server.
npm run build: Builds the application for production.
npm run lint: Runs ESLint to check code quality.
npm run preview: Locally previews the production build.
Dependencies
Main
@material-tailwind/react: UI components and styles for React.
@reduxjs/toolkit: Tools for Redux state management.
axios: HTTP client for API requests.
react and react-dom: Core libraries for building the user interface.
react-redux: Connects React with Redux.
react-router-dom: Navigation for routing.
redux: State management library.
Development
@vitejs/plugin-react: React support for Vite.
eslint and plugins: Tools for ensuring code quality.
tailwindcss: CSS framework for responsive design.
postcss and autoprefixer: CSS processors for improved browser compatibility.
Development and Configuration
Tailwind CSS: To customize styles, modify the tailwind.config.js file.
Redux Toolkit: The app's global state is set up in the store folder. You can add more slices as needed.
Vite: This project uses Vite for a fast and efficient build process. The main configuration can be found in vite.config.js.
Contributions
Contributions are welcome. Open an issue or submit a pull request to discuss any changes you would like to make.

License
This project is licensed under the MIT License.

This README.md provides a comprehensive guide for anyone looking to install, run, or contribute to the project.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
