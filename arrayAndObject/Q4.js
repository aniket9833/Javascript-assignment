let students = [
    {id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A'},
    {id: 2, firstName: 'Jane', lastName: 'Smith', age: 19, grade: 'B' },
    {id: 3, firstName: 'Bob', lastName: 'Johnson', age: 22, grade: 'C'}
];

// a. Add a Student
function addStudent(student) {
    students.push(student);
}

// b. Update Student Information
function updateStudent(id, updatedInfo) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...updatedInfo };
    }
}

// c. Delete a Student
function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
}

// d. List All Students
function listAllStudents() {
    return students;
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}

// f. Calculate Average Age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

// Example usage:
addStudent({ id: 4, firstName: "Michael", lastName: "Brown", age: 17, grade: 11 });
console.log("All Students:", listAllStudents());

updateStudent(2, { firstName: "Jane", lastName: "Doe" });
console.log("Updated Student:", listAllStudents());

deleteStudent(3);
console.log("Students after deletion:", listAllStudents());

console.log("Students in Grade 11:", findStudentsByGrade(11));

console.log("Average Age of Students:", calculateAverageAge());
