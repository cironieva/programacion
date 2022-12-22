const fs = require('fs');

const read = () => { 
  JSON.parse(fs.readFileSync('./tasksData.json'));
}

module.exports = { read };