# Nimiq App Starter Kit

> Use this app starter kit to create a Nimiq-powered app in seconds. It contains all the boilerplate code needed to get
you started. Check out the [demo](https://nimiq.github.io/app-starter-kit/).

This app starter kit includes frameworks and components that Nimiq developers commonly use to create Nimiq-enabled web
applications.

Have a look at the [demo](https://nimiq.github.io/app-starter-kit/) for an overview of the included features. Also check out a simple demo wallet built with the app starter kit in 6 easy to follow steps in the [demo-wallet branch](https://github.com/nimiq/app-starter-kit/commits/demo-wallet).

New to Nimiq? Check out [nimiq.com](https://nimiq.com).

## How to use it

### Basic Setup

Add the app starter kit to your project:
```bash
git remote add starter-kit git@github.com:nimiq/app-starter-kit.git
git fetch starter-kit
```

Then merge it into your code base:
```bash
git merge --allow-unrelated-histories starter-kit/master
```

### Advanced Setup

Each commit of the starter kit [commit history](https://github.com/nimiq/app-starter-kit/commits/master) represents one
feature. If you don't need all features of the app starter kit, you can use
[`git revert`](https://git-scm.com/docs/git-revert) to remove specific commits. Alternatively, you can also
[`cherry-pick`](https://git-scm.com/docs/git-cherry-pick) just the specific commits that you need instead of merging.
When reverting or cherry-picking commits, keep in mind that there is a dependency between some of the commits. See the
demo page for more details.

## Build and run

To get started, setup everything and get all dependencies with yarn:

```bash
yarn install
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

## Contribute

Please feel free to [get in touch](https://www.nimiq.com/community/) and send PRs!

Please understand that PRs might be squashed into a single commit on merge to keep the commit history as simple as
possible. PR authors will however be attributed authorship / co-authorship of that commit.
