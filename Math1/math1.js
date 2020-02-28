
let finalResult;

let evenOddResult;

// Add your code here

let a=3;
let b=3;
let c=4;
let d=4;
var e=a+b;
var f=c+d;
finalResult=e*f;
evenOddCheck=(finalResult)%(finalResult); 
evenOddResult=evenOddCheck;

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
let para2 = document.createElement('p');
let evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.'
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);
