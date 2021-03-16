const path = require("path");
const fs   = require("fs");
let files  = [];

function throughDirectory(dir) {
    fs.readdirSync(dir).forEach(file => {
        const absolute = path.join(dir, file);
        if (fs.statSync(absolute).isDirectory()) return throughDirectory(absolute);
        else return files.push(absolute);
    });
}
console.log('HELLO WORLD');
console.log(process.env);

console.log(throughDirectory( process.env.GITHUB_WORKSPACE ));
