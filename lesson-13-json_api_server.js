/*
* @Author: skiming
* @Date:   2017-07-28 23:34:29
* @Last Modified by:   skiming
* @Last Modified time: 2017-07-29 00:08:32
*/

const http = require('http')
const url = require('url')

const putTime = (req, res, obj) => {
    const iso = url.parse(req.url, true).query.iso
    const date = new Date(iso)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(obj))
}

const server = http.createServer((req, res) => {

    const date = new Date(url.parse(req.url, true).query.iso)

    req.url.includes('parsetime') ? putTime(req, res, {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }) : putTime(req, res, {
        unixtime: date.getTime()
    })
})
server.listen(process.argv[2])