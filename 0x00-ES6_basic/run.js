import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Get the current directory of the module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Please provide a JavaScript file to run.');
  process.exit(1);
}

const file = args[0];
const filePath = resolve(__dirname, file);

exec(`node ${filePath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing file: ${error}`);
    process.exit(1);
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  console.log(`stdout: ${stdout}`);
});

