/*
* @Author: chenming
* @Date:   2017-07-27 16:43:28
* @Last Modified by:   chenming
* @Last Modified time: 2017-07-27 16:56:15
*/

const fs = require('fs')
const path = require('path')
module.exports = (dir, ext, callback) => {
    ext = '.' + ext
    fs.readdir(dir, (err, list) => {
        if (err) return callback(err)
        callback(null, list.filter(x => path.extname(x) == ext))
    })
}