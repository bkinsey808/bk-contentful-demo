# Contentful Demo

This project demonstrates a possible approach combining NextJs, Contentful, and Storybook. The solution achieves SSG (static site generation) with the served site, and Component-Level fetching with Storybook. This means Contentful content authors can see what their content looks like on Storybook, although with a delay as the data ("content") is fetched from contentful. (I haven't figured out how to mimic the SSG experience with storybook yet, but it might be possible).

With this solution, both designers and content authors can use the same Storybook for their design system, bringing together and significantly empowering potentially non-coding users. NextJs becomes a relatively thin layer primarily responsible for implementing each component with code.

The solution involves defining components on the Contentful level by requiring two additional fields per content model:

- component type
- component name (e.g. id/slug/unique instance identifier)

Currently, sub-components can be defined on one or more multiple entry reference fields. (Code does not currently support a single sub-component reference field, but it should be possible if some convention were established.) There is no naming convention needed for the Contentful multiple entry reference field(s) name(s).

These contentful components may nest child components and those child components may nest child components to an arbitrary depth component tree.

## How It Works

On the contentful side, a component type is implemented as a Content Model, and an instance of a component is implemented as an Entry. Not all models need to be component types. Component models must have at least two fields:

1. componentName (unique instance identifier)
2. componentType (default value set to the component type in camel case, and made hidden and readonly so content authors don't have to think about it)

On the client side, each Contentful-driven component is implemented in with three files:

1. The [ComponentType].graphql file. If the component has sub-components, only the componentType and componentName need to be fetched. I recommend starting with this file first, and then running `yarn codegen` to get the generated types set up for the next file.
2. The functional react component itself: [ComponentType].tsx . Each Contentful-driven component must take at least two props: the componentName, and the state. These are passed to the useComponent hook to automatically fetch the component content if necessary. The state prop is only necessary to support SSG, since SSG pages cannot rely on runtime JavaScript.
3. The [ComponentType].stories.tsx file (optional). Currently, each contentful instance of the component must be manually added to have a story for it, although maybe codegen could automate this in the future. It would be awesome if a contentful author could add a new instance of a component and it would show up in Storybook automatically. Maybe it could be possible with a webhook and codegen. Also, in the future it'd be 🔥 if we could pre-generate the content (similar to SSR) instead of requiring a runtime fetch.

The magic that makes SSG work for the site is that on the page level we recursively fetch the component tree content directly from Contentful. (We don't need to worry about rendering the react site to determine what fetches are necessary like in some other component-level fetching solutions that batch on the page-level). In practice, the build seems plenty fast, but of course it will slow down as the number of component instances increase, especially with very deeply nested trees of components.

In the future it may be necessary to monitor Contentful responses in case the queries are rate limited. I've found that components need to be relatively simple and few in number for any given parent component in order to not trigger Contentful's rate limiting on the free community tier. If Contentful's rate limiting code is triggered, code could be written to limit the results per query and run multiple limited queries instead of a single unlimited one.

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
