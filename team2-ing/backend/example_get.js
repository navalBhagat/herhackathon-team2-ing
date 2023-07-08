const axios = require('axios');

const scriptPath = 'calculator_backend.py';
const arguments = ['arg1', 'arg2'];

axios.get('http://localhost:2000/run-script', {
  params: {
    scriptPath,
    arguments: JSON.stringify(arguments),
  },
})
  .then(response => {
    console.log('Output:', response.data.output);
  })
  .catch(error => {
    console.error('Error:', error);
  });
