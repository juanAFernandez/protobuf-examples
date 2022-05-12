const fs = require("fs")

const employees = []

employees.push({
    'name': 'Carl',
    'salary': 1000,
    'id': 1452
})
const jhon = {
    'name': 'Jhon',
    'salary': 2400,
    'id': 1455
}
employees.push(jhon);

employees.push({
    'name': 'Rick',
    'salary': 5000,
    'id': 1457
})

console.log(employees)
console.log(JSON.stringify(employees))

fs.writeFileSync('jsondata.json', JSON.stringify(ahmed))
const {size} = fs.statSync('jsondata.json');
console.log('Just the size for 3 employees is:', size, 'Bytes. Probably a quite large.')
