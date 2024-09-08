// let arrey = [1,2.2,1,5,55,6,66,8,88]
// console.log("rjgdsbgdsed");

function plus(arrey) {
  let sum = 0;
  for (let i = 0; i < arrey.length; i++) {
    sum += arrey[i];
  }
  return sum;
}

function muliply(arrey) {
  let sum = 1;
  for (let i = 0; i < arrey.length; i++) {
    sum *= arrey[i];
  }
  return sum;
}

function avg(arrey) {
  let sum = 1;
  for (let i = 0; i < arrey.length; i++) {
    sum += arrey[i];
  }
  return sum / arrey.length;
}

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


//6
// function printReverseNumber(num) {
//     let result = num.toString().split('').reverse().join('');
//     console.log(result);
// }
// printReverseNumber(123456789)


//7
function returnFixText(txt) {
    if (!txt) {
        return console.log(txt);
    }
    let x = true;
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] == " ") {
            x = true
        }
        else {
            x = false;
        }
    }
    if (x) {
        return console.log(" ");
    }
    else {
        console.log(txt.trim());
    }
}
returnFixText("bskfdmbldsmbsab d jd d jndakj a j kjdkjdfikdfdsf")