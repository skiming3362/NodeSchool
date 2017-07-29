/*
* @Author: skiming
* @Date:   2017-07-28 23:07:43
* @Last Modified by:   skiming
* @Last Modified time: 2017-07-28 23:33:28
*/

const http = require('http')
const map = require('through2-map')
const arr = []
const server = http.createServer((req, res) => {
    // req.on('data', (chunk) => {
    //     arr.push(chunk.toString())
    // })
    // req.on('end', () => {
    //     arr.forEach(x => {
    //         res.write(x.toUpperCase())
    //     })
    //     res.end()
    // })
    req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res)
});
server.listen(process.argv[2])