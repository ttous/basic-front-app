# basic-front-app

[![NPM Version](https://img.shields.io/npm/v/basic-front-app.svg)](https://www.npmjs.org/package/basic-front-app) [![License](https://img.shields.io/npm/l/basic-front-app.svg)](https://www.npmjs.org/package/basic-front-app) [![Build Status](http://img.shields.io/travis/ttous/basic-front-app/master.svg)](https://travis-ci.org/ttous/basic-front-app) [![Dependencies Status](https://img.shields.io/david/ttous/basic-front-app.svg)](https://david-dm.org/ttous/basic-front-app) [![devDependencies Status](https://david-dm.org/ttous/basic-front-app/dev-status.svg)](https://david-dm.org/ttous/basic-front-app?type=dev) [![Known Vulnerabilities](https://snyk.io/test/github/ttous/basic-front-app/badge.svg)](https://snyk.io/test/github/ttous/basic-front-app) [![Coverage Status](https://coveralls.io/repos/github/ttous/basic-front-app/badge.svg)](https://coveralls.io/github/ttous/basic-front-app)

_basic-front-app_ is a ~~basic~~ front app code to start a project using React.js, Sass, Jest, TSLint and Webpack.

## Summary
- [Installation](#installation)
- [Quick start](#quick-start)
- [Features](#features)
- [FAQ](#faq)
- [Contributing](#contributing)
- [Special thanks](#special-thanks)

## Installation
#### Fork it
To start your project, fork this one from the [github page](https://github.com/ttous/basic-front-app).
You can also mirror it to another repository if you would like to keep being updated by the original one. Check [this Github documentation](https://help.github.com/en/articles/duplicating-a-repository) on repository duplication and mirroring for more information.

#### Change it
Now that you have your own copy of the code, you should customize it by editing the following files:
- `README.md`: The edition depends on you.
- `CHANGELOG.md`: It should be empty.
- `.gitignore`: Remove the _ttous.md_ line.
- `package.json`: You can change the `name`, `version`, `description`, `author`, `homepage`, `repository` and `bugs` properties.

#### Yarn it
After the app was put in your Github repository, you can install it locally as follow:
```bash
git clone https://github.com/<your_username>/basic-front-app
cd basic-front-app
yarn             # or 'npm i'
```

#### That's it!
You can finally start developing! No further configuration is needed: _basic-front-app_ is intended to allow you to start coding as soon as it is installed.

## Quick start
#### Development
##### Test
```bash
yarn dev_test    # or 'npm test'
```
##### Start
```bash
yarn dev_build   # or 'npm run dev_build' (necessary only for the first run)
yarn dev         # or 'npm run dev'
```

#### Production
##### Test
To launch the tests, run:
```bash
yarn test        # or 'npm test'
```

Happy coding!

## Features
_basic-front-app_ implements a lot of features already put together for you to skip the ~~boring~~ configuration and go directly to the fun part!
- [React.js](https://github.com/facebook/react) for the frontend.
- [Sass](https://github.com/sass/node-sass) for the style.
- [TSLint](https://github.com/palantir/tslint) for the code.
- [Jest](https://github.com/facebook/jest) for the tests.
- [Webpack](https://github.com/webpack/webpack) for the unity.

## Contributing
Contributions are very welcome! Please check out the [Code of Conduct](https://github.com/ttous/basic-front-app/blob/master/CODE_OF_CONDUCT.md) before making your pull requests.

## Special thanks
- Thanks to [crsandeep](https://github.com/crsandeep) and his repository ([simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack)) on which this one is based on.
