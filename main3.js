const protobuf = require('protobufjs')
const fs = require("fs")

let alpha = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
let employeesNumber = 100;
const employees = []
const jsonFileName = 'employeesJsonFile.json';
const binaryFileName = 'employeesBinaryFile';


function getRandomName() {
    return alpha.charAt(Math.floor(Math.random() * alpha.length));
}

for (let i=0; i<employeesNumber; i++) {
    employees.push({
        'name': getRandomName(),
        'salary': Math.random(),
        'id': i
    })
}

// A. Store in a json plain file
fs.writeFileSync(jsonFileName, JSON.stringify(employees))
let {size} = fs.statSync(jsonFileName);
console.log('jsonsize:', size, 'Bytes')


// A. Store in a binary using protobuf
protobuf.load('employees.proto', function(error, root) {
    let Employees = root.lookupType('Employees')
    let errMsg = Employees.verify({employees: employees})
    if (errMsg) console.error(errMsg)
    let employeesMessage = Employees.create({employees: employees})
    let encodedData = Employees.encode(employeesMessage).finish();
    fs.writeFileSync(binaryFileName, encodedData)
    let {size} = fs.statSync(binaryFileName);
    console.log('binarysize:', size, 'Bytes')
})
