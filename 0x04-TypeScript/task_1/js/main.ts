interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;

}

const teacher1: Teacher = {
firstName: 'grace',
lastName: 'ebe',
fullTimeEmployee: false,
yearsOfExperience: 1,
location: 'lagos',
contract: false

}

console.log(teacher1)