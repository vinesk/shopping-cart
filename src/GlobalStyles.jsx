import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #333;
    --color-secondary: #666;
    --color-tertiary: #eee;
    --white: #fff;
    --black: #000;

    --font-family-heading: 'Noto Serif', serif;
    --font-family-body: 'Roboto', sans-serif;

    --font-size-h1: 2rem;
    --font-size-h2: 1.5rem;
    --font-size-h3: 1.25rem;
    --font-size-body: 1rem;

    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;

    --border-radius: 0.25rem;

    --shadow: 0 2px 4px rgba(0, 0, 0, .1);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-family-body);
    font-size: var(--font-size-body);
    color: var(--black);
    background-color: var(--white);
  }

  h1 {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-h1);
  }

  h2 {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-h2);
  }

  h3 {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-h3);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  a:hover {
    color: var(--color-secondary);
  }

  button {
    font-family: var(--font-family-body);
    font-size: var(--font-size-body);
    cursor: pointer;
    padding: var(--spacing-sm) var(--spacing-md);
    background-color: var(--color-primary);
    color: var(--white);
    border: 1px solid var(--white);
    border-radius: var(--border-radius);
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: var(--color-secondary);
    border-color: var(--color-secondary);
  }

  input {
    font-family: var(--font-family-body);
    font-size: var(--font-size-body);
    padding: var(--spacing-sm) var(--spacing-md);
  }
`;
