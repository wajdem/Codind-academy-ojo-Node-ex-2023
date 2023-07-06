const { exec } = require('child_process');

const command = 'ls -l';

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing the command: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`Command execution returned an error: ${stderr}`);
    return;
  }

  console.log(`Command output:\n${stdout}`);
});
