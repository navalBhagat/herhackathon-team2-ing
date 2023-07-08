const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 2000;

// Handle GET request to '/run-script'
app.get('/run-script', (req, res) => {
  const { scriptPath, arguments } = req.query;

  // Execute the Python script
  const command = `python ${scriptPath} ${arguments}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing the Python script: ${error}`);
      res.status(500).json({ error: 'Error executing the Python script' });
      return;
    }
    res.json({ data:{output: 'Successful'} });
  });
});

// Start the server on port 2000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
