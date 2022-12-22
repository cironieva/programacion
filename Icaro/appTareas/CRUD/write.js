const fs = require('fs');
const read = require('./read')

const write = () => {
  fs.writeFileSync(read.read(), 'utf-8')
}

module.exports = { write };