/*
* @Author: skiming
* @Date:   2017-07-27 22:38:08
* @Last Modified by:   skiming
* @Last Modified time: 2017-07-27 22:45:42
*/

const http = require('http')
http.get(process.argv[2], (response) => {
    response.setEncoding('utf-8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)