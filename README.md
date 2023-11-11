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

## Installation

First, ensure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.

Clone the repository and move into the project directory:

```bash
git clone https://github.com/eygcxh/news-ts-app.git
cd ts-project
```

Then install all dependencies using Yarn:

```bash
yarn install
```

## Running the project

For local development, run the following command:

```bash
yarn dev
```

This will start the Vite development server on `localhost:5000`.

## Running ESLint

To lint the entire project, you can use the following command:

```bash
yarn lint
```

## Building for production

To build your project for production, you can run:

```bash
yarn build
```

This will first run `tsc` (TypeScript Compiler) to check for type errors and then run `vite build` to create an optimized version of your application.

## Preview built project

To preview the production build, run:

```bash
yarn preview
```

Enjoy coding!
