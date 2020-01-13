# Nimiq App-Template

> Fork this repo to create a Nimiq-powered app in seconds. It contains all the boilerplate code needed to get you started.

This app template includes frameworks and components that Nimiq developers commonly use to create Nimiq-enabled web applications.
New to Nimiq? Check out [nimiq.com](https://nimiq.com).

Features included:

* [Vue.js framework](https://vuejs.org/)
* Development server with hot module reloads
* Linting and testing
* App skeleton with CSS
* Demo code and example components
* [Nimiq Style](https://github.com/nimiq/nimiq-style)
* [Nimiq Vue components](https://github.com/nimiq/vue-components)
* [Nimiq Identicons](https://github.com/nimiq/iqons)
* [Nimiq Hub API](https://github.com/nimiq/hub)

## How to use it

To create a new project from scratch, fork this repository on GitHub, rename it, and clone it to your filesystem:

```bash
git clone <the URL to your fork>
```

Or do a [custom setup](#custom-setup)!

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

Lint your code, i.e. make it beautiful automagically:

```bash
yarn lint
```

Run your unit tests:

```bash
yarn test:unit
```

Compile and minify the project to be ready for deployment in production:

```bash
yarn build
```

## Custom setups

Custom setups allow you to add features to an existing project,
or hand-pick the features you need. (For advanced users.)

### Super-charge an existing repo

Turn your existing repo into a Nimiq app with Vue by adding the template code:

```bash
git remote add template git@github.com:nimiq/app-template.git
git fetch template
git merge template/master
```

Or...

### Create a new repo locally

```bash
mkdir my-app
cd my-app
git init
```

... continue with the commands from the  [previous step](#super-charge-an-existing-repo).

### Handpick the features you like

To only add some of the features,
checkout [this list](https://github.com/nimiq/app-template/commits/master).
Each commit represents one feature.

Now, instead of getting all features with `git merge template/master` as used before,
copy the commit ID up to which you want to add features to your project and then merge up to that point only:

```bash
git merge <commit ID>
```

**Note:** Cherry-picking features might work in some cases
but is not recommended as some features depend on previous ones.

### Customize the Vue.js configuration

See [Vue.js’s configuration reference](https://cli.vuejs.org/config/) for details.

## Contribute

Please feel free to [get in touch](https://www.nimiq.com/community/) and send PRs!
