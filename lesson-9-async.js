/*
* @Author: skiming
* @Date:   2017-07-27 22:55:40
* @Last Modified by:   skiming
* @Last Modified time: 2017-07-27 23:11:10
*/

const http = require('http')
const bl = require('bl')

let arr = []
let counts = 0
process.argv.forEach((x, idx) => {
    if (idx >= 2) {
        http.get(x, (response) => {
            response.pipe(bl((err, data) => {
                if (err) return console.log(err)
                data = data.toString()
                arr[idx-2] = data
                counts++
                if (counts == 3) {
                    arr.forEach(x => console.log(x))
                }
            }))
        }).on('error', console.error)
    }
})
