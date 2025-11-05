# nextjs-boilerplate-with-redux

Opinionated Next.js 13+ boilerplate (app directory) with a minimal Redux Toolkit setup and a small example Counter component.

This repository demonstrates how to integrate Redux Toolkit with the Next.js App Router and provides a simple counter UI wired to the store.

## Contents

- app/ — Next.js App Router files
  - layout.jsx — root layout (wraps the app with providers)
  - page.jsx — main page
  - globals.css — global styles (Tailwind-ready)
  - components/Counter.jsx — example counter component
- redux/ — Redux wiring
  - provider.jsx — React-Redux Provider wrapper used in app/layout.jsx
  - store.js — Redux store configuration (RTK)
  - features/counterSlice.js — example slice for the counter

## Requirements

- Node.js (LTS recommended; Node 18+)
- npm, pnpm, or yarn

## Install

Clone the repo and install dependencies:

```bash
git clone https://github.com/<owner>/<repo>.git
cd <repo>
npm install
# or
# pnpm install
# yarn install
```

## Scripts

The typical scripts are defined in package.json:

- npm run dev — Start Next.js development server
- npm run build — Create a production build
- npm run start — Start the production server
- npm run lint — Run ESLint

Start the dev server and open http://localhost:3000:

```bash
npm run dev
```

## How the Redux integration works

This boilerplate uses @reduxjs/toolkit and react-redux.

- redux/store.js configures the store and includes the counter slice.
- redux/features/counterSlice.js contains the slice (actions + reducer) for the example counter.
- redux/provider.jsx exports a small wrapper component that sets up <Provider store={store}>, which is used in app/layout.jsx to make the store available across the app.

The example app/components/Counter.jsx shows how to read and update state via useSelector and useDispatch (client component).

Notes on Next.js App Router:
- Provider must be used inside a client component or via a client wrapper. The included provider.jsx is already a client component wrapper you can import into app/layout.jsx.

## File pointers

- Root layout: app/layout.jsx — mounts the Redux Provider so the whole app can access the store.
- Example usage: app/page.jsx imports and renders components/Counter.jsx.
- Store and slice:
  - redux/store.js
  - redux/features/counterSlice.js

## Styling

globals.css under app/ is minimal and ready for Tailwind if you enable it. If you want Tailwind:

1. Install Tailwind dependencies (if not already installed).
2. Add a tailwind.config.js and postcss config as needed.
3. Add Tailwind directives to app/globals.css:

```css
@import "tailwindcss";
```

## Linting

ESLint is included. Run:

```bash
npm run lint
```

Adjust or extend the ESLint configuration to fit your preferences.

## Testing

- Add tests for reducers and components (Jest + React Testing Library recommended).
- Example commands (if added):
  - npm test
- Keep tests deterministic and reasonably fast.

## Notes & next steps

- Add tests (Jest / React Testing Library) to validate reducers and components.
- Add CI (GitHub Actions) to run install, build, and lint on push / PR.
- If you enable Tailwind, configure tailwind.config.js and ensure the app imports globals.css.

## License

This project is provided as-is. Add a LICENSE file with your preferred license if you plan to publish it.

---

If you’d like, I can:
- add a short usage example that shows how to connect another component to the store,
- add a unit test for counterSlice, or
- wire up a basic GitHub Actions workflow to run lint and build.

Tell me which follow-up you want and I’ll implement it.
