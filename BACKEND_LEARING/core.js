let fs = require('fs')
// let data =fs.readFileSync('test.txt','utf8')

// console.log(data)

fs.readFile('test.txt','utf-8', (err,data) => {
    if(err){
        console.log(err)
    }
    console.log(data)
} )