const fs = require('fs')
const name = document.getElementById("name")
const sur = document.getElementById("sur")
const date = document.getElementById("date")
const rod = document.getElementById("rod")
const type = document.getElementById("type")
const info = document.getElementById("info")

function finish()
{
    fs.readFile('text.txt', 'utf8', (err, data) => {
        if(err){
            console.error(err);
        }
        console.log(data);
    })
}