/*
* @Author: chenming
* @Date:   2017-07-27 10:32:33
* @Last Modified by:   chenming
* @Last Modified time: 2017-07-27 16:11:04
*/

let fs = require('fs')
let path = process.argv[2]
let str = fs.readFileSync(path, 'utf-8')
console.log(str.split('\n').length-1)