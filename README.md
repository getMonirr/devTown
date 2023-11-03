# DevTown

## Product Catalog Web Application

## Overview

This is a responsive and interactive web application built using React.js and styled-components. It displays a list of products, each including an image, title, description, and price. Users can filter and sort the products based on their attributes (e.g., price, category). Additionally, it features a user-friendly pagination system to navigate through the product list.

## Live Demo

You can view a live demo of this application at [Demo Link](https://dev-town-new.vercel.app/).

## Features

- **Responsive Design**: The web page is designed to be visually appealing and fully responsive, ensuring a seamless experience on various devices and screen sizes.

- **Smooth Transitions**: We've added smooth transitions and animations for user interactions, enhancing the user experience.

- **Filtering and Sorting**: Users can filter and sort the product list based on various attributes, such as price and category.

- **Pagination System**: The product list is paginated to display a reasonable number of products per page, making it easier for users to navigate through a large catalog.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/getMonirr/devTown.git
   ```

2. Navigate to the project directory:

   ```bash
   cd devTown
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
