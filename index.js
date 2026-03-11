#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const repoInput = process.argv[2];

if (!repoInput) {
  console.error('Usage: node index.js <repo-url-or-user/repo>');
  console.error('Examples:');
  console.error('  node index.js https://github.com/user/repo');
  console.error('  node index.js user/repo');
  process.exit(1);
}

// Parse the repo input
let repoUrl;
if (repoInput.startsWith('http')) {
  repoUrl = repoInput;
} else if (repoInput.includes('/')) {
  repoUrl = `https://github.com/${repoInput}`;
} else {
  console.error('Invalid repo format. Use full URL or user/repo');
  process.exit(1);
}

// Extract repo name from URL
const repoName = repoUrl.split('/').pop().replace('.git', '');
const targetPath = path.join(__dirname, repoName);

// Check if directory already exists
if (fs.existsSync(targetPath)) {
  console.error(`Error: Directory "${repoName}" already exists`);
  process.exit(1);
}

try {
  console.log(`Cloning ${repoUrl} into ${repoName}...`);
  execSync(`git clone ${repoUrl} ${targetPath}`, { stdio: 'inherit' });
  console.log(`✓ Successfully cloned into ${repoName}`);
} catch (error) {
  console.error(`✗ Failed to clone repository`);
  process.exit(1);
}
