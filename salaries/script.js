document.getElementById('oblicz').addEventListener('click', function(){
    if(document.getElementsByClassName('list-container')[0].children.length > 0){
        document.getElementsByClassName('list-container')[0].removeChild(document.querySelector('ul'));
    }
    let employees = document.getElementsByClassName('pracownik-container');
    let salaries = [];
    for(let i = 0; i < employees.length; i++){
        if(employees[i].style.backgroundColor === 'red') employees[i].style.backgroundColor = '';
        let hours = employees[i].getElementsByClassName('czas')[0].value;
        let payRate = employees[i].getElementsByClassName('stawka')[0].value;
        let salary = 0;
        let salaryField = employees[i].getElementsByClassName('wyplata')[0];
        if(hours > 160) {
            salary = (160 * payRate) + ((hours - 160) * (payRate * 2));
        }
        else {
            salary = hours * payRate;
        }
        salaryField.innerText = salary;
        if(hours < 100) {
            employees[i].style.backgroundColor = 'red';
        }
        salaries.push(salary);
    }
    sortedSalaries = (salaries.sort((a, b) => a - b));
    let list = document.createElement('ul');
    let theBestEmployees = 1;
    while(theBestEmployees <= 3) {
        for(let i = 0; i < document.getElementsByClassName('wyplata').length; i++) {
            if(document.getElementsByClassName('wyplata')[i].innerText == sortedSalaries[sortedSalaries.length-theBestEmployees]){
                let theBestEmployee = document.createElement('li');
                theBestEmployee.innerText = document.getElementsByClassName('wyplata')[i].parentElement.getElementsByClassName('pracownik')[0].innerText;
                list.appendChild(theBestEmployee);
            }
        }
        theBestEmployees++;
    }
    document.getElementsByClassName('list-container')[0].appendChild(list);
})