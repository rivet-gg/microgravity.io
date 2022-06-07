# Microgravity 🚀

[Microgravity.io](https://microgravity.io) is a web game where the player is tasked with building a space civilization. The player must mine resources, build defenses, fabricate weapons, join alliances, and attack enemies to stay on the top of the leaderboard.

While the development of Microgravity has been minimal recently, there has been interest from the community to crowdsource the development of new features.

This open-source copy of Microgravity is not built to be distributed, since the live version of the game depends on matchmaking and deployment code which cannot be made open-source at the moment. If you need help running Microgravity on your own server, please file an issue.

## Requirements

- [NodeJS](https://nodejs.org/en/) v12+
- [FFMPEG](https://ffmpeg.org/)
  - If you are on macOS or Linux, we recommend that you install with [Homebrew](https://brew.sh/) by running `brew install ffmpeg`.
  - If you are on Windows, we recommended that you install with [Chocolatey](https://chocolatey.org/) by running `choco install ffmpeg` in PowerShell with administrative privileges.
  - If you have trouble with this installation, please file an issue.

## Setup

- Make sure that the above software is installed correctly.
- Open a shell in the root directory of the project and run `npm run setup`.
  - This will install necessary dependencies, compile required assets, and build the client.
- If you have [Nix](https://nixos.org/) installed, simply run `nix-shell` to install all of the above.

## Development

### Server

- The server can be run normally with `npm start`.
- If you wish to have the server automatically restart every time you make a change, you can run the server with `npm run nodemon`.
- Visit https://127.0.0.1:8080/ to play the game

#### Client

- The client can be built normally with `npm run build`.
- If you wish to have the client rebuild every time you make a change, run `npm run build-watch`.
- If you are building to deploy to production, run `npm run build-prod`.

#### TLDR

1. Run `npm run setup`.
2. Open a shell and run `npm run nodemon`. Keep this open.
3. Open another shell and run `npm run build-watch`. Keep this open.
4. Visit https://127.0.0.1:8080.

## Deploying

This version of Microgravity is not built to be deployed to a server at the moment. If you wish to run this on your server, you will need to modify where `client.js` calls `game.connectSocket` to pass in the appropriate host and port and configure `server.js` to use the correct SSL certificates.

Please note that Microgravity is licensed under [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/), meaning you may legally run your own copy and make money off it, but you must make the complete source code available for any modified version of the game. If you have any questions, please refer to the license or contact us directly. We look forward to seeing what you create!

## Microgravity 2.0

There is an unreleased version of Microgravity which fixes many of the issues that exist in the current version of the game, including better alliances, building upgrade trees, planet building slots, weapon specialization, and more.

This version was rewritten from the ground up using TypeScript and Pixi.js, but is still very rough. If there is continued interest in this project, we will take the time to polish, publish, and open-source that version too. However, open-sourcing a project takes a considerable amount of work. To do so, we have to write documentation, clean up the setup/build system, add support for developing on other platforms, and provide help to people interested in contributing to the project.

## Show Us Your Ideas!

We would love to see what creative additions you all come up with for Microgravity! We recommend you fork the project and submit pull requests if you wish to see your changes be included in the live version of the game.
