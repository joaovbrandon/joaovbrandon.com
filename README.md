# joaovbrandon.com

My personal website :)

See here [joaovbrandon.com](https://joaovbrandon.com)

## Stack

- TypeScript
- Next.js
- next-export-i18n
- Styled-Components
- react-icons
- nprogress

### I also used some dev tools, to help improve code pattern:

- commitlint & commitizen
- ESLint
- Prettier
- Husky
- lint-staged
- GitHub Actions

## Development

You need [Node.js 16.x.x](https://nodejs.org/) and [Yarn](https://yarnpkg.com/en/) (or use [NPM](https://www.npmjs.com/)) to run it.

- Run `yarn` or `npm install`
- Run `yarn dev` or `npm run dev`
- Access http://localhost:3000 in your browser

## Deploy

- Change the version in the `package.json`
- Commit to the `develop` branch: `chore: bump version to x.x.x`
- Create a tag of the version `git tag -a x.x.x -m 'vx.x.x'`
- Checkout to the `main` branch
- Reset to the created tag `git reset --hard x.x.x`
- Push to the `main` branch
- The deploy pipeline will run and deploy the new version to [joaovbrandon.com](https://joaovbrandon.com)

### Deploy Pipeline

The deploy pipeline build the app and use `next export` to export static files, then deploy the exported files to GitHub pages.
