# Microgravity 🚀

*Built with [Rivet](https://rivet.gg)*

[Microgravity.io](https://microgravity.io) is a web game where the player is tasked with building a space civilization. The player must mine resources, build defenses, fabricate weapons, join alliances, and attack enemies to stay on the top of the leaderboard.

Microgravity is built to run on top of [Rivet](https://rivet.gg).

## Requirements


## Setup

### Without [Nix](https://nixos.org/) (most computers)

Install the required software:

- [NodeJS](https://nodejs.org/en/) v12+
- [FFMPEG](https://ffmpeg.org/)
  - If you are on macOS or Linux, we recommend that you install with [Homebrew](https://brew.sh/) by running `brew install ffmpeg`.
  - If you are on Windows, we recommended that you install with [Chocolatey](https://chocolatey.org/) by running `choco install ffmpeg` in PowerShell with administrative privileges.
  - If you have trouble with this installation, please file an issue.

Now run `npm run setup`. This will validate that the required software is installed correctly and generated required assets.

### With [Nix](https://nixos.org/) (recommended, not common)

If you have [Nix](https://nixos.org/) installed, simply run `nix-shell` which will automatically install all of the above.

Now run `npm run setup`. This will validate that the required software is installed correctly and generated required assets.

## Development

#### TLDR

1. Run `npm run setup`.
2. Open a shell and run `npm run nodemon`. Keep this open.
3. Open another shell and run `npm run build-watch`. Keep this open.
4. Visit https://127.0.0.1:8080.

### Server

The server can be run normally with `npm start`.

To automatically restart every time you make a change, you can run the server with `npm run nodemon`.

Visit https://127.0.0.1:8080/ to play the game

#### Client

The client can be built normally with `npm run build`.

To rebuild every time you make a change, run `npm run build-watch`.

If you are building to deploy to production, run `npm run build-prod`.

## Deploying

Microgravity is built to run on top of [Rivet](https://rivet.gg). A more detailed guide on how to run your own copy of Microgravity will be published later.

## Show Us Your Ideas!

We would love to see what creative additions you all come up with for Microgravity! We recommend you fork the project and submit pull requests if you wish to see your changes be included in the live version of the game.

