/*
* @Author: chenming
* @Date:   2017-07-27 16:18:19
* @Last Modified by:   chenming
* @Last Modified time: 2017-07-27 16:25:05
*/

const fs = require('fs') 
fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data.split('\n').length-1)
    }
})