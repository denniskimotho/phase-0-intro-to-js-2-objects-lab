// Write your solution in this file!
const employee = {
    name: "Jack",
    streetAddress:"Colombia Rd"
}

function updateEmployeeWithKeyAndValue(employee, key, value){

    const updatedEmployee = { ...employee }

    updatedEmployee[key] = value
  
    return updatedEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value

    return employee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];  
    
    return employee
}

function deleteFromEmployeeByKey(employee, key){

    const newEmployee = { ...employee };

    delete newEmployee[key];
  
    return newEmployee;
}