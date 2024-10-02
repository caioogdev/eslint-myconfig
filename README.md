# eslint-caioog.dev Configuration

This repository provides pre-configured **ESLint** setups for **React**, **Node.js**, and **Tailwind CSS** projects. It includes support for both **JavaScript** and **TypeScript**, ensuring consistency across different file types (JS, JSX, TS, and TSX). Additionally, it enforces certain coding styles, such as always requiring semicolons at the end of lines.

## Available ESLint Configurations

- **React**: Configuration for React projects, supporting both JavaScript and TypeScript with React Hooks and accessibility rules.
- **Node.js**: Configuration for Node.js projects, supporting both JavaScript and TypeScript, including Node.js specific rules.
- **Tailwind CSS**: Configuration for Tailwind CSS projects, ensuring proper class usage and enforcing alphabetical ordering of class names.

## Common Features

- **Semicolon Enforcement**: All configurations require semicolons (`;`) at the end of each line.
- **Single Quotes**: All strings must use single quotes (`'`) for consistency.
- **Unused Variables**: Unused variables that begin with `_` are ignored.

## How to Use These ESLint Configurations in Your Projects

### Step 1: Clone the Repository

First, clone this repository to your local machine:

```bash
git clone git@github.com:caioogdev/eslint-myconfig.git
```

### Step 2: Install ESLint and Required Plugins

For each project (React, Node.js, Tailwind CSS), you will need to install ESLint and the relevant plugins. Here's how to do it for each setup:

#### For React Projects:

```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks --save-dev
```

#### For Node.js Projects:

```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-node --save-dev
```

#### For Tailwind CSS Projects:

```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-tailwindcss --save-dev
```

### Step 3: Link the ESLint Configuration

To use the ESLint configuration in your project, extend the configuration you want in your `.eslintrc.json` or `.eslintrc.js` file:

#### Example for React:

In your project folder, create a `.eslintrc.json` or `.eslintrc.js` file and extend the React configuration:

```json
{
  "extends": "./path-to-eslint-config/eslint-caioog.dev/react.js"
}
```

#### Example for Node.js:

```json
{
  "extends": "./path-to-eslint-config/eslint-caioog.dev/node.js"
}
```

#### Example for Tailwind CSS:

```json
{
  "extends": "./path-to-eslint-config/eslint-caioog.dev/tailwind.js"
}
```

> **Note**: Replace `./path-to-eslint-config/` with the correct relative path to the cloned repository.

### Step 4: Run ESLint

After setting up your project, you can run ESLint with the following command to check for any linting errors:

```bash
npx eslint . --ext .js,.jsx,.ts,.tsx
```

This will check all the JavaScript and TypeScript files in your project.
