# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Summary
- [0.0.1](#001---2019-03-24)

## [0.0.1] - 2019-03-24
- Initial commit.
### Added
- webpack-dev-server.
### Changed
- public/index.html ("title").
- package.json (changed all definition properties, removed "start" script, change "dev" script last from "nodemon..." to "webpack-dev-server").
- webpack.config.js (removed server side config and add "devServer" property).
### Removed
#### Files
- src/server/*.
- src/client (inner files taken out).
#### Dependencies
- express.
- moment.
- pino.
#### Dev Dependencies
- @types/express.
- @types/pino.
- pino-pretty.
- webpack-node-externals.