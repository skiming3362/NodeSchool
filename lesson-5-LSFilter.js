/*
* @Author: chenming
* @Date:   2017-07-27 16:26:09
* @Last Modified by:   chenming
* @Last Modified time: 2017-07-27 16:39:05
*/

const fs = require('fs')
const path = require('path')
const filePath  = process.argv[2]
const filterType = process.argv[3]
fs.readdir(filePath, (err, list) => {
    if (err) {
        console.log(err)
    } else {
        list.forEach(x => {
            if (path.extname(x).slice(1) == filterType) {
                console.log(x)
            }
        })
    }
})