// let arrey = [1,2.2,1,5,55,6,66,8,88]
// console.log("rjgdsbgdsed");

// function plus(arrey) {
//   let sum = 0;
//   for (let i = 0; i < arrey.length; i++) {
//     sum += arrey[i];
//   }
//   return sum;
// }

// function muliply(arrey) {
//   let sum = 1;
//   for (let i = 0; i < arrey.length; i++) {
//     sum *= arrey[i];
//   }
//   return sum;
// }

// function avg(arrey) {
//   let sum = 1;
//   for (let i = 0; i < arrey.length; i++) {
//     sum += arrey[i];
//   }
//   return sum / arrey.length;
// }

// function muliply(arrey) {
//     let sum = 1;
//     for (let i = 0; i < arrey.length; i++) {
//         sum *= arrey[i]
//     }
//     return console.log(sum);
// }
// function cangeFirstBetLast(arrey) {
//     let temp;
//     temp = arrey[0];
//     arrey[0] = arrey[-1];
//     arrey[-1] = temp;
//     return console.log(arrey);
// }

// cangeFirstBetLast(arrey)
// function copyArrey(arrey) {
//     let copyed = arrey.splice(0)

//     return console.log(copyed);
// }

// copyArrey(arrey)
// function reverseArrey(arrey) {
//     arrey = arrey.reverse();
//     return console.log(arrey);
// }

// reverseArrey(arrey)

//1
// function createHez(num, bool) {
//     let hez = ""
//     for (let i = 0; i < num; i++) {
//         hez += "-"
//     }
//     if (bool === true) {
//         hez += ">"
//     }
//     else {
//         tempHez = hez
//         hez = "<" + tempHez
//     }
//     return console.log(hez);
// }
// createHez(5)

//2
// function stopWhenZero(num) {
//     let numbers = [];
// }

// 3
// function createTriangular(num) {
//     let triangular = "*";
//     for (let i = 0; i < num; i++) {
//         console.log(triangular.repeat(i));
//     }
// }
// createTriangular(5)

//4
// function createReversTriangular(num) {
//     let triangular = "*";
//     for (let i = num; i > 0; i--) {
//             console.log(triangular.repeat(i));
//     }
// }
// createReversTriangular(5)

//5
// function multiplicationTable(num) {
// let result = 'x ';
// for (let i = 0; i < num + 1; i++) {
//     for (let j = 0; j < num + 1; j++) {
//         if(i == 0 && j > 0){
//           result += '[' + j + ']';
//         } 
//         else if(j == 0 && i>0){
//           result += '[' + i + '] ';
//         } 
//         else if(i>0 && j>0){
//         result += (i*j) + ' ';
//         }
//     }
//     result += '\n'
// }
// console.log(result);
// }
// multiplicationTable(55)


// 6
// function printReverseNumber(num) {
//     let result = num.toString().split('').reverse().join('');
//     console.log(result);
// }
// printReverseNumber(123456789)


// 7
// function returnFixText(txt) {
//     if (!txt) {
//         return console.log(txt);
//     }
//     let x = true;
//     for (let i = 0; i < txt.length; i++) {
//         if (txt[i] == " ") {
//             x = true
//         }
//         else {
//             x = false;
//             i = txt.length;
//         }
//     }
//     if (x) {
//         return console.log(" ");
//     }
//     else {
//         console.log(txt.trim());
//     }
// }
// returnFixText("bskfdmbldsmbsab d jd d jndakj a j kjdkjdfikdfdsf      ")


//8
// const list1 = [1,2,3,4]
// const list2 = [5,6,7,8]
// function multiplyList(list1, list2){
//     let sum1 = 0;
//     let sum2 = 0;
//     let toPrint = [];
//     for (let i = 0; i < list1.length; i++) {
    //         sum1 += list1[i];
    //         sum2 += list2[i];
    //     }
    //     for (let i = 0; i < list1.length; i++) {
        //         sum1 -= list1[i];
        //         toPrint.push(sum1 * sum2) 
        //     }
        //     console.log(toPrint);
        // }
        // multiplyList(list1, list2)




let container = document.querySelector("#container")
        
//1
let quastion1 = document.querySelector("#quastion-1");

quastion1.addEventListener("mouseover", changeTxtIn);

function changeTxtIn() {
    document.getElementById("quastion-1").innerHTML = "Mouse in";
}

quastion1.addEventListener("mouseout", changeTxtOut);

function changeTxtOut() {
    document.getElementById("quastion-1").innerHTML = "Mouse Out";
}

quastion1.addEventListener("click", changeColor);

function changeColor() {
    document.getElementById("quastion-1").style.color = "red";
}

quastion1.addEventListener("click", changeBackColor);

function changeBackColor() {
    document.getElementById("quastion-1").style.background = "green";
}

quastion1.addEventListener("click", addUnderScore);

function addUnderScore() {
    document.getElementById("quastion-1").style.textDecoration = "underline overline";
}

quastion1.addEventListener("dblclick", changeColorToBlack);

function changeColorToBlack() {
    document.getElementById("quastion-1").style.color = "black";
}


//2
let myDiv = document.createElement("div");
myDiv.innerHTML = "This is a new div element";
myDiv.style.height = '50px'
myDiv.style.width = '500px'
myDiv.style.background = "red"
container.appendChild(myDiv)


let select = document.querySelector("#selectColor");
const colors = ["red", "green", "blue"]; 
function seedOption() {
    for (let i = 0; i < colors.length; i++) {
        
        let option = document.createElement("option");
        option.value = colors[i];
        option.text = colors[i]; 
        option.id = "optionColorChoise";
        select.add(option, colors.length - 1);
    }
}
seedOption()



function ColorChoise() {
    let select = document.querySelector("#selectColor");
            myDiv.style.background = select.value    
    }


let button1 = document.createElement("button");


button1.addEventListener("click", HideOrShowDiv)
button1.innerHTML = "Hidden Div"
container.appendChild(button1)
function HideOrShowDiv() {
    if (myDiv.style.visibility === 'visible') {
        myDiv.style.visibility = 'hidden'
        button1.innerHTML = "Show"
    }
    else {
        myDiv.style.visibility = 'visible'
        button1.innerHTML = "Hidden Div"
    }
}

let inputColor = document.createElement("input");
inputColor.type = 'text';
inputColor.placeholder = "Put color here, exm: Red"

let inputSubmit = document.createElement("input");
inputSubmit.innerHTML = "Submit"
inputSubmit.type = 'submit';

container.appendChild(inputColor)
container.appendChild(inputSubmit)

inputSubmit.addEventListener("click", addColorToSelect);

function addColorToSelect() {
    colors.push(inputColor.value)
    createOption(inputColor)
    inputColor.value = "";
}

function createOption(inputColor) {
    let option = document.createElement("option");
    option.value = inputColor.value;
    option.innerText = inputColor.value; 
    option.id = "optionColorChoise";
    console.log(inputColor.value);
    select.add(option, colors.length - 1);
}





let textDiv = document.createElement("div");
textDiv.style.background = "green"
textDiv.style.height ='200px'
textDiv.style.width ='200px'
textDiv.style.display = 'flex'



let txt = document.createElement("h3");
txt.innerHTML = "Striken";
txt.style.margin = 0;

let btnMove = document.createElement("button");
btnMove.innerHTML = "<|>"

btnMove.addEventListener("click", moveTheStriken);

let x;
let y;
const cssList = ['flex-start', 'center', 'flex-end'];

function moveTheStriken() {
    textDiv.style.alignItems = cssList[x];
    textDiv.style.justifyContent = cssList[y];
    x = Math.floor(Math.random() * cssList.length);
    y = Math.floor(Math.random() * cssList.length);

}

container.appendChild(textDiv)
textDiv.appendChild(txt)
container.appendChild(btnMove)







 
