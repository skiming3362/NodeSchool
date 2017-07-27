/*
* @Author: skiming
* @Date:   2017-07-27 22:46:55
* @Last Modified by:   skiming
* @Last Modified time: 2017-07-27 22:55:02
*/

const http =require('http')
const bl = require('bl')
http.get(process.argv[2], (response) => {
    response.pipe(bl((err, data) => {
        if (err) return console.log(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
}).on('error', console.error)