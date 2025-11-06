interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student  = {
    firstName:'Grace',
    lastName: 'Amadi',
    age: 19,
    location: 'Nairobi'
}
const student2: Student = {
    firstName:'Nyla',
    lastName: 'Williams',
    age: 21,
    location: 'Tokyo'
}

const studentList: Student[] = [student1, student2];

const table = document.createElement('table')
const thead = table.createTHead();
const headerRow = thead.insertRow();
const header1 = document.createElement('th')
header1.textContent = 'First Name';
const header2 = document.createElement('th');
header2.textContent = 'Location';


headerRow.appendChild(header1)
headerRow.appendChild(header2)

const tbody = table.createTBody();

studentList.forEach((student) => {
    const row = tbody.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location
})

document.body.appendChild(table);