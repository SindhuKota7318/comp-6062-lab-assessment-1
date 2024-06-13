console.log('')
const myFullName = 'SindhuKota';
const myStudentNumber = '1153251';
const result = `${myFullName}-${myStudentNumber}`;
console.log(result);
let headerContent = document.querySelector('h1');
headerContent.innerHTML = result;
headerContent.classList.add('headingPrimary');