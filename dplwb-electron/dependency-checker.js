// Save this as check-dependencies.js and run with: node check-dependencies.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Checking Electron app dependencies...');

// Check if package.json exists
try {
  const packageJsonPath = path.join(__dirname, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.error('Error: package.json not found');
    process.exit(1);
  }
  
  const packageJson = require(packageJsonPath);
  console.log('Package name:', packageJson.name);
  console.log('Main file:', packageJson.main);
  
  // Check if main file exists
  const mainFilePath = path.join(__dirname, packageJson.main);
  if (!fs.existsSync(mainFilePath)) {
    console.error(`Error: Main file ${packageJson.main} not found`);
    process.exit(1);
  }
  console.log(`Main file ${packageJson.main} exists`);
  
  // Check for required dependencies
  ['electron'].forEach(dep => {
    try {
      require.resolve(dep);
      console.log(`✓ Dependency ${dep} is installed`);
    } catch (e) {
      console.error(`✗ Dependency ${dep} is NOT installed`);
    }
  });
  
  // Check if index.html exists
  const indexPath = path.join(__dirname, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('Error: index.html not found');
    process.exit(1);
  }
  console.log('index.html exists');
  
  // Check if preload.js exists
  const preloadPath = path.join(__dirname, 'preload.js');
  if (!fs.existsSync(preloadPath)) {
    console.error('Error: preload.js not found');
    process.exit(1);
  }
  console.log('preload.js exists');
  
  console.log('\nAll critical files found. If the app still won\'t start:');
  console.log('1. Try clearing node_modules: rm -rf node_modules');
  console.log('2. Reinstall dependencies: npm install');
  console.log('3. Start with debugging: DEBUG=* npm start');
  
} catch (error) {
  console.error('Error checking dependencies:', error);
}
