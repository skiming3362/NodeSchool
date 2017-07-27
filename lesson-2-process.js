/*
* @Author: chenming
* @Date:   2017-07-27 10:00:16
* @Last Modified by:   chenming
* @Last Modified time: 2017-07-27 10:11:57
*/

let sum = 0
process.argv.forEach((x, i) => {
    if (i >= 2) {
        sum += Number(x)
    }
})
console.log(sum)