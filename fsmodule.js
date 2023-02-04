//no need of installation aldready included in express but we have to import it
const fs = require('fs');
//remove Sync and it will become asynchronous


// create
fs.writeFileSync('./path/filename.extension', data);

//read
fs.readFileSync('./path/filename.extension', 'utf8');//utf8 is recommanded for decodng the data

//delete
fs.unlinkSync('./path/filename.extension');