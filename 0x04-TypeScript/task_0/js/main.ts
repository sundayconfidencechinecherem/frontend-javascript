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
const headerRow = table.insertRow();
const header1 = headerRow.insertCell();
const header2 = headerRow.insertCell();

header1.textContent = 'First Name';
header2.textContent = 'Location';

studentList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location
})

document.body.appendChild(table);