const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
};

function displayStudentInfo(studentObject) {
    for (const property in studentObject) {
            console.log(`Property: ${property}, Value: ${studentObject[property]}`);
        }
    }

// Call the function with the student object
displayStudentInfo(student);
