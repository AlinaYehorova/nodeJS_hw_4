const moment = require('moment')

// variant1
// const formattedDate1 = moment().format(`DD-MM-YYYY`)
// const formattedDate2 = moment().format(`MMM Do YY`)
// const formattedDate3 = moment().format(`dddd`)
// console.log(formattedDate1)
// console.log(formattedDate2)
// console.log(formattedDate3)

// variant2
const now = moment()
const formattedDate1 = now.format(`DD-MM-YYYY`)
const formattedDate2 = now.format(`MMM Do YY`)
const formattedDate3 = now.format(`dddd`)
console.log(formattedDate1)
console.log(formattedDate2)
console.log(formattedDate3)