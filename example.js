var arrc = require('./index.js')

var arr = [0,1,2,3]
var arroo = [{a:1,b:2},{a:2,b:3},{a:4,b:5}]

console.log(arrc.arraytojson(arr))
console.log(arrc.arraytojson(arroo))

var options = {pretty: true}
console.log(arrc.arraytojson(arr, options))
console.log(arrc.arraytojson(arroo, options))

var options = {pretty: true, indent: 10}
console.log(arrc.arraytojson(arr, options))
console.log(arrc.arraytojson(arroo, options))