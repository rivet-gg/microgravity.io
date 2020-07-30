const path = require("path");
const cp = require("child_process");

const projectDir = path.join(__dirname, "..");

// Check node version
console.log("=== PRE-CHECKS ===");
console.log("Make sure your Node version is up to date:");
cp.execSync("node --version", { stdio: "inherit" });
console.log();
console.log("Make sure FFMPEG is installed (see https://github.com/tonistiigi/audiosprite#hints-for-windows-users):");
cp.execSync("ffmpeg -version", { stdio: "inherit" });
console.log();

// Install modules
console.log("=== INSTALLING MODULES ===");
cp.execSync("npm install", { cwd: projectDir, stdio: "inherit" });
console.log();

// Generate sounds
console.log("=== GENERATING SOUNDS ===");
require("./generate-sounds");
console.log();

// Build JS
console.log("=== BUILDING JS ===");
cp.execSync("npm run build", { cwd: projectDir, stdio: "inherit" });
console.log();

// Misc nodes
console.log("=== FINISHED ===")
console.log("Make sure there are no errors above.");
console.log("If everything is ok, run 'npm start' and visit 'http://127.0.0.1:8080'");
