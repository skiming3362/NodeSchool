/*
* @Author: chenming
* @Date:   2017-07-27 10:32:33
* @Last Modified by:   chenming
* @Last Modified time: 2017-07-27 17:07:56
*/

const fs = require('fs')
const path = process.argv[2]
let str = fs.readFileSync(path, 'utf-8')
console.log(str.split('\n').length-1)