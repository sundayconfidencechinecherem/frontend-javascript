interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;

}

const teacher3: Teacher = {
firstName: 'grace',
fullTimeEmployee: false,
lastName: 'ebe',
location: 'lagos',
contract: false

}

console.log(teacher3)