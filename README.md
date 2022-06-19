# Contentful Demo

This project demonstrates a possible approach combining NextJs, Contentful, and Storybook. The solution achieves SSG (static site generation) with the served site, and Component-Level fetching with Storybook. This means Contentful content authors can see what their content looks like on Storybook. Designers can use the same Storybook for their design system, bringing together and significantly empowering potentially non-coding users. NextJs becomes a relatively thin layer primarily responsible for implementing each component with code.

The solution involves defining components on the Contentful level by requiring two additional fields per content model:

- component type
- component name (e.g. id/slug/unique instance identifier)

These contentful components may nest child components and those child components may nest child components to an arbitrary depth component tree. There is no necessary naming convention for the Contentful Reference field(s) name(s).

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
