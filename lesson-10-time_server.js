/*
* @Author: skiming
* @Date:   2017-07-27 23:13:30
* @Last Modified by:   skiming
* @Last Modified time: 2017-07-27 23:27:46
*/

const net = require('net')
const strftime = require('strftime')

const server = net.createServer(socket => {
    socket.end(strftime('%Y-%m-%d %H:%M', new Date()) + '\n')
});
server.listen(process.argv[2])