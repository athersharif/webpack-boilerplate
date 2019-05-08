This is a (very basic) boilerplate for developing standalone JS solutions using [Webpack 4](https://webpack.js.org/) + [ES6](http://es6-features.org/#Constants) + [Prettier](https://prettier.io/) + [ESlint](https://eslint.org/).

# Installation

`npm i` to install the dev dependencies.

# Running in Watch Mode

`make dev` or `npm start` will run the webpack dev server. Configurations can be found in `webpack.dev.js`. By default the port is `7000` but in case you're using this port, it can be changed in `webpack.dev.js`.

# Building a Production-ready Bundle

`make build` will generate the `bundle.js` file in the `dist` directory. You may rename `dist` to `build` or any other name you like. The files needed to be updated would be `Makefile`, `webpack.common.js` and `index.html`. Note that this only generates the JS bundle. If you'd like it enabled for CSS and HTML then [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) and [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) may be of interest.

# Pre-commit Hook

`npm run lint-staged` (to run manually)

`Prettier` is run as a pre-commit hook so you won't have to prettify code manually. Before the commit happens, the files will be prettified and automatically updated in your git commit. More information on `prettier` is below.

# Prettier

`make prettier`

`Prettier` is an opinionated code formatter. Two files to note are in the root directory: `.prettierignore` and `.prettierrc`. If you don't want prettier to touch files such as your minified javascripts and/or css, or your large json data files, you can add them to `.prettierignore`. To edit which rules to run prettier against, take a look at the [prettier docs](https://prettier.io/docs/en/install.html) and adjust the rules as you deem fit in `.prettierrc`.

# ESLint

`make lint`

`ESLint` is a JS linter. To edit which rules to run eslint against, take a look at the [eslint docs](https://eslint.org/docs/rules/) and adjust the rules as you deem fit in `.eslintrc`.

**Note that you can run both prettier and eslint together by doing `make ready`.**

**If you're running a Windows machine and do not have `make` installed, you can install it from [here](http://gnuwin32.sourceforge.net/packages/make.htm).**

Of course, this is just _one_ way of setting up your dev environment. Suggestions and feedback are always welcome. If you run into any issues, please file an issue. If you'd like to contribute, please create a pull request.
