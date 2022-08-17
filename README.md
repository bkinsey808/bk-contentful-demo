# Contentful Demo

This project demonstrates a possible approach combining NextJs, Contentful, and Storybook.

## TODO

- accent colors
- tokens set in tailwind config
- token control in storybook (not just theme)
- theme and dark mode toggle
- webhook to trigger deploy
- contentful images
- form builder

## Deployment

You will need to prepare for site deployment by installing vercel cli and logging in and chromatic deployment by getting a chromatic project token and setting CHROMATIC_PROJECT_TOKEN in your .env

Once set up, to deploy site to vercel and storybook to chromatic, run

```bash
yarn deploy
```

- [Demo of site](https://bk-contentful-demo.vercel.app/)
- [Demo of storybook](https://62d2a7d38e711fa97ff596f5-lhjnkljrrp.chromatic.com/)

## Features of this Project

- Perfect lighthouse score (so far...)

  ![](/lighthouse.png)

- [NextJs](https://nextjs.org/)
- Typescript
- Component demos with Storybook
- Bundle analysis with @next/bundle-analyzer and webpack-bundle-analyzer
- Code formatting with Prettier
  - usage enforced by lint rules
- Linting
  - Code linting with eslint
    - Cognitive complexity linting with SonarJs
  - Style linting with stylelint
  - Commit Message linting with commitlint
  - Relatively strict set of best practice lint rules
- Source code moved into src/ directory
- Absolute path alias
  - @/ is src/
- Circular dependency checking with madge
- Set of recommended extensions for Visual Studio Code
  - Code spell check with Code Spell Checker
  - Code complexity feedback in editor with CodeMetrics
  - Jest extension working for unit tests
- Git hooks with [Husky](https://typicode.github.io/husky)
  - pre-push hook
    - Tests pass
    - Code is linted and formatted
    - No circular dependencies detected
  - commit-msg hook
    - Commit message is linted
- Continuous Integration example with GitHub Actions

## Getting Started

```bash
git clone --depth=1 https://github.com/bkinsey808/contentful-demo.git my-project-name
cd my-project-name
yarn
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Next steps

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
