const path = require("path");
const cp = require("child_process");
const fs = require("fs");

const projectRoot = path.join(__dirname, "..");
const soundsRoot = path.join(projectRoot, "resources", "sounds");
const soundsOutput = path.join(projectRoot, "public", "audio", "output");
const audioSpritesOutput = path.join(projectRoot, "src", "config", "audio-sprites.json");

console.log("Make sure you have FFMPEG setup correctly (https://github.com/tonistiigi/audiosprite#hints-for-windows-users)");
console.log();

console.log("Running audiosprite...");
cp.execSync(`npx audiosprite ${soundsRoot}/*/*.ogg ${soundsRoot}/*/*.wav ${soundsRoot}/*/*.flac ${soundsRoot}/*/*.m4a ${soundsRoot}/*/*.aiff --format howler --export "ogg,m4a,mp3" --output ${soundsOutput} --path "/audio"`, { stdio: "inherit" });

console.log("Moving output JSON file...");
fs.renameSync(`${soundsOutput}.json`, audioSpritesOutput);
