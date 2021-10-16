# NextJS Starter Kit

![version](https://img.shields.io/github/package-json/v/sex-request/nextjs-starter-kit)
![License MIT](https://img.shields.io/github/license/sex-request/nextjs-starter-kit?style=plat)

![PnP Yarn2](https://img.shields.io/badge/Yarn2-PnP-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![Next.JS](https://img.shields.io/badge/next.js-TypeScript-007ACC?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Github Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

---

![Repo Size](https://img.shields.io/github/repo-size/sex-request/nextjs-starter-kit)
![Stars](https://img.shields.io/github/stars/sex-request/nextjs-starter-kit?style=social)

[![Coverage](https://github.com/sex-request/nextjs-starter-kit/actions/workflows/coverage.yaml/badge.svg)](https://github.com/sex-request/nextjs-starter-kit/actions/workflows/coverage.yaml)
[![E2E](https://github.com/sex-request/nextjs-starter-kit/actions/workflows/e2e.yaml/badge.svg)](https://github.com/sex-request/nextjs-starter-kit/actions/workflows/e2e.yaml)
[![Deploy NextJS](https://github.com/sex-request/nextjs-starter-kit/actions/workflows/deploy-nextjs.yaml/badge.svg)](https://github.com/sex-request/nextjs-starter-kit/actions/workflows/deploy-nextjs.yaml)
[![Deploy Storybook](https://github.com/sex-request/nextjs-starter-kit/actions/workflows/deploy-storybook.yaml/badge.svg)](https://github.com/sex-request/nextjs-starter-kit/actions/workflows/deploy-storybook.yaml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/3cb923e2-1e5a-40d8-8438-1e09da0d1efe/deploy-status)](https://nextjs-starter-kit-storybook.netlify.app/?path=/docs/example-introduction--page)

This setting used by [This Repository](https://github.com/sex-request/frontend)

## Default Settings

- [Yarn2 with PnP](https://yarnpkg.com/)
- [NextJS](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- Enable [MDX](https://mdxjs.com/)
- [Storybook on Webpack5](https://storybook.js.org/blog/storybook-for-webpack-5/) with [Sass](https://sass-lang.com/) (Using [@storybook/preset-scss](https://github.com/storybookjs/presets/tree/master/packages/preset-scss))
- [Jest](https://jestjs.io/) (coverage 100%)
- [Cypress](https://www.cypress.io/)
- [ESLint](https://eslint.org/) with [airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) rules
- [Github Actions](https://github.com/features/actions) (Coverage, E2E, Deploy gh-pages and storybook)
- Using [Husky](https://typicode.github.io/husky/#/)
  - Auto update patch version before commit
  - Check Lint, Coverage, E2E before push

## [ IMPORTANT ] Must Change Here

- `package.json` line 2 - project name
- `next.config.js` line 4 - production url
- `/public/favicon.ico` and `/public/icon-*.png`
- `/public/manifest.json` line 5~9 - application information
- `/pages/_document.tsx` line 10 - lang
- `/pages/_app.tsx` line 17, 20 - description, title

## Usage

### Install

```bash
yarn && yarn postinstall
```

### Running Dev Server

```bash
yarn dev
```

### Lint

```bash
yarn lint
```

### Unit Test

```bash
yarn test
yarn test:watch
yarn test:coverage
```

### E2E Test

```bash
yarn cypress
yarn cypress:headless
yarn e2e
yarn e2e:headless
```

### Storybook

```bash
yarn storybook
yarn build-storybook
```

### Build and Export

```bash
yarn build
yarn start
yarn export
```
