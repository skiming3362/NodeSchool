/*
* @Author: chenming
* @Date:   2017-07-27 16:43:39
* @Last Modified by:   chenming
* @Last Modified time: 2017-07-27 16:53:28
*/

const mymodule = require('./lesson-6-module.js')
const dir = process.argv[2]
const ext = process.argv[3]
mymodule(dir, ext, (err, list) => {
    if (err) return console.log(err)
    list.forEach(x => {
        console.log(x)
    })
})