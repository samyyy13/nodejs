let fs = require('fs')

let file = 'chat.jpg'
let read = fs.createReadStream(file)

fs.stat(file, (err, stat) => {

    let total = stat.size

    let progress = 0

    let write = fs.createWriteStream('copy.jpg ')

    let read = fs.createReadStream(file)
    read.on('data', (chunk) => {

        progress += chunk.length

        console.log("j'ai lu " + (progress / total) + "%");
    })
    
    read.pipe(write)

    write.on('finish',() => {
        console.log('le fichier a bien été copié');
    })
})

