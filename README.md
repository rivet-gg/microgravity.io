# Microgravity 🚀

# ❗️ This project has been moved to [Rivet's example repo](https://github.com/rivet-gg/examples).

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

- To run the development server, run `npm run serve`.
- If you are building to deploy to production, run `npm run build:prod`.

#### TLDR

1. Run `npm run setup`.
2. Open a shell and run `npm run nodemon`. Keep this open.
3. Open another shell and run `npm run serve`. Keep this open.
4. Visit https://127.0.0.1:8080.

## Deploying

Microgravity is built to be deployed on [Rivet](https://rivet.gg). Rivet is in private beta at the moment, so we can't share the deploy process yet.

## Show Us Your Ideas!

We would love to see what creative additions you all come up with for Microgravity! We recommend you fork the project and submit pull requests if you wish to see your changes be included in the live version of the game.
