const protobuf = require('protobufjs')
const fs = require("fs")

protobuf.load('employees.proto', function(error, root) {
    let Employee = root.lookupType('Employee')
    let rawEmployee = {ide: 1, name: 'Juan', salary: 1000}
    let errMsg = Employee.verify(rawEmployee)
    if (errMsg) console.error(errMsg)
    let employeeMessage = Employee.create(rawEmployee)
    let encodedData = Employee.encode(employeeMessage).finish();
    fs.writeFileSync('jsondata2', encodedData)
})