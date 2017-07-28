/*
* @Author: skiming
* @Date:   2017-07-28 22:43:25
* @Last Modified by:   skiming
* @Last Modified time: 2017-07-28 23:05:41
*/

const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const path = process.argv[3]
const stream = fs.createReadStream(path)
const server = http.createServer((req, res) => {
    stream.pipe(res)
});
server.listen(port)