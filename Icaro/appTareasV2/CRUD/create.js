const fs = require('fs');
const read = require('./read');

const create = (title, description) => {
  let array = read.read();
  array.push({title:String(title), desc:String(description)});
  fs.writeFileSync('../editData.json', array)
  return console.log(array);
}

create("paja", "pajearse")