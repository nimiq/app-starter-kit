# Nimiq App Starter Kit

> Use this app starter kit to create a Nimiq-powered app in seconds. It contains all the boilerplate code needed to get
you started. Check out the [demo](https://nimiq.github.io/app-starter-kit/).

This app starter kit includes frameworks and components that Nimiq developers commonly use to create Nimiq-enabled web
applications.

Have a look at the [demo](https://nimiq.github.io/app-starter-kit/) for an overview of the included features. Also check
out a simple demo wallet built with the app starter kit in 6 easy to follow steps in the
[demo-wallet branch](https://github.com/nimiq/app-starter-kit/commits/demo-wallet).

New to Nimiq? Check out [nimiq.com](https://nimiq.com).

## How to use it

### Basic Setup

Add the app starter kit to your project:
```bash
git remote add starter-kit git@github.com:nimiq/app-starter-kit.git
git fetch starter-kit
```

Then merge the master branch into your code base:
```bash
git merge --allow-unrelated-histories starter-kit/master
```

The separate features the app starter kit provides are contained in feature branches. Pick the ones you want and merge
them into your code base one at a time, for example:
```bash
git merge starter-kit/nimiq-hub
```

Some features depend on others so make sure to merge them in the right order. To see which features depend on which,
have a look at the [documentation in the demo page](https://nimiq.github.io/app-starter-kit/).

To add or update a feature at a later time, just (re)merge the branch.

Alternatively, instead of merging the master branch and picking separate feature branches, you can also merge the
complete app starter kit with all features:
```bash
git merge --allow-unrelated-histories starter-kit/complete
```

Choosing to use the complete app starter kit might result in including features you don't need and a less optimized
setup, therefore it's recommended to merge features separately.

## Build and run

To get started, setup everything and get all dependencies with yarn:

```bash
yarn
```

or if you prefer npm:

```bash
npm install
```

Run a development server that watches the project files,
compiles them on demand and hot-reloads the changes to keep your browser in sync:

```bash
yarn serve
```

Lint your code:

```bash
yarn lint
```

To automatically fix lint errors:

```bash
yarn lint --fix
```

Run your unit tests:

```bash
yarn test:unit
```

Compile and minify the project to be ready for deployment in production:

```bash
yarn build
```

Npm users can run these commands by replacing `yarn` with `npm run`, for example:
```bash
npm run serve
```

## Contribute

Please feel free to [get in touch](https://www.nimiq.com/community/) and send PRs!

Please understand that PRs might be squashed into a single commit on merge to keep the commit history as simple as
possible. PR authors will however be attributed authorship / co-authorship of that commit.
