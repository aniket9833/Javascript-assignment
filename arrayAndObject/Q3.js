const student = {name: 'Aniket'};
Object.preventExtensions(student);
const extensibleStatus = Object.isExtensible(student);


const teacher ={subject : 'math'};
Object.seal(teacher);
const sealedStatus = Object.isSealed(teacher);

console.log(extensibleStatus);
console.log(sealedStatus);