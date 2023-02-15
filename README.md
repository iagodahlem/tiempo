# tiempo

[![Build Status](https://travis-ci.org/iagodahlem/tiempo.svg?branch=master)](https://travis-ci.org/iagodahlem/tiempo)
[![Coverage Status](https://codecov.io/gh/iagodahlem/tiempo/branch/master/graph/badge.svg)](https://codecov.io/gh/iagodahlem/tiempo)
[![Cypress.io Tests](https://img.shields.io/badge/cypress.io-tests-green.svg)](https://cypress.io)

Pomodoro app for the modern web. Click [here to access it live](https://tiempo.iagodahlem.com/).
Clock takes you through a full pomodoro cycle of three 25 minute work sessions with 5 minute breaks in between and a 15 minute long break at the end. 


## Requirements

- Node v11.6.0
- Yarn v1.12.3

## Install

Installing **Yarn**
If npm package manager is already installed, you can use
```
npm install --global yarn
```
to install and update Yarn.

<br/>

Otherwise, if homebrew is installed, you can use
```
brew install yarn
```
and
```
brew update yarn
```
to update your current version.

<br/>

Other installation instructions specific to your machine for yarn can be found [here](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).

<br/>

You can then use
```
yarn --version
```
to ensure it is installed and check which version you have.

<br/>

To download the latest version of **Node**, click [here](https://nodejs.org/en/download/).

<br/>

## Running

You can run this command 
```
git clone https://github.com/iagodahlem/tiempo.git
```
to clone the repository on your local machine and run the start command to spin up the development server.

<br />

To start the development server, you can run the command

```
yarn start
```
<br/>

To run all the test suite.

```sh
yarn test
```

<br/>

## Understanding the codebase
Under the [src/pomodoro/app](src/pomodoro/app) folder exists the different functionalities of the timer including play, pause, skip, and stop.

Under the [src/pomodoro/containers](src/pomodoro/containers) folder exists the controls for keyboard and mouse input as well as the header, footer, and other sections of the app.

The [cypress folder](cypress) contains tests and supporting documents for tests. 

This code is written using the Redux library and documentation and support can be found [on the official Redux support page](https://redux.js.org).


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://iagodahlem.mit-license.org/) © Iago Dahlem

