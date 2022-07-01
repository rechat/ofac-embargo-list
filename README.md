# ofac-embargo-list ![license](https://img.shields.io/github/license/rechat/ofac-embargo-list) ![version](https://img.shields.io/github/package-json/v/rechat/ofac-embargo-list) ![coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)

A tool to check compliance with OFAC embargo by restricting access to certain countries, Based on MaxMind

## Getting the Code

To get a local copy of the current code, clone it using git:

    $ git clone https://github.com/rechat/ofac-embargo-list.git
    $ cd ofac-embargo-list

Next, install Node.js via the [official package](https://nodejs.org) or via
[nvm](https://github.com/creationix/nvm).

If everything worked out, install all dependencies:

    $ npm install

## Building

In order to bundle all `lib/` files into production script run:

    $ npm run build
