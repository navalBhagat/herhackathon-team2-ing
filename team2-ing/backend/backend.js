const express = require('express')
//const spawn = require('child_process').spawn;

const app = express();

app.get('http://localhost:5000/', (req, res) => {

    const { exec } = require('child_process');

    function runPythonScript(scriptPath, args, callback) {
    // Execute the Python script
    const command = `python ${scriptPath} ${args.join(' ')}`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
        console.error(`Error executing the Python script: ${error}`);
        return;
        }
        callback(stdout);
    });
    }
    const pythonScriptPath = 'calculator_backend.py';
    const arguments = ['user_ID', '120'];

    runPythonScript(pythonScriptPath, arguments, (output) => {
    console.log('Script ran successfully!');
    });
});

app.listen(5000);