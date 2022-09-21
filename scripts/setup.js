const path = require('path');
const cp = require('child_process');

const projectDir = path.join(__dirname, '..');

// Check node version
console.log('=== PRE-CHECKS ===');
console.log('Make sure your Node version is up to date:');
cp.execSync('node --version', { stdio: 'inherit' });
console.log();
console.log('Make sure FFMPEG is installed:');
console.log(
	"  If you are on macOS or Linux, install Homebrew (https://brew.sh/) and run 'brew install ffmpg'."
);
console.log(
	"  If you are on Windows, install Chocolatey (https://chocolatey.org/install#individual) and run 'choco install ffmpg' in PowerShell as administrator."
);
console.log('  See notes from Audiosprite (https://chocolatey.org/install#individual)');
cp.execSync('ffmpeg -version', { stdio: 'inherit' });
console.log();

// Install modules
console.log('=== INSTALLING MODULES ===');
cp.execSync('yarn install', { cwd: projectDir, stdio: 'inherit' });
console.log();

// Generate sounds
console.log('=== GENERATING SOUNDS ===');
require('./generate-sounds');
console.log();

// Build JS
console.log('=== BUILDING JS ===');
cp.execSync('npm run build', { cwd: projectDir, stdio: 'inherit' });
console.log();

// Misc nodes
console.log('=== FINISHED ===');
console.log('Make sure there are no errors above.');
console.log("If everything is ok, run 'npm start' and visit 'http://127.0.0.1:8080'");
