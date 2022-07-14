import { MyArr } from "./myArray.js";

// Values 
debugger;
let test = new MyArr ('1' , 2 , '3' , 4 , 'last el ') ; 
let lenght = test.lenghtFunc() ;  
let popel =test.popFunc() ;
let pushEl = test.pushFunc('" Add Me "') ; 



// HTLM

document.getElementById("1").innerHTML = ` Elements Length  :  ${lenght}  `;

document.getElementById("2").innerHTML = ` Poped Element  is   :  "${popel}"`;

document.getElementById("3").innerHTML = ` Pushed Element  is   :  "${pushEl}"`;






