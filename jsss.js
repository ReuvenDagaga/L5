let arrey = [1,2.2,1,5,55,6,66,8,88]
console.log("rjgdsbgdsed");

function plus(arrey) {
    let sum = 0;
    for (let i = 0; i < arrey.length; i++) {
        sum += arrey[i] 
    }
    return console.log(sum);
     
}
plus(arrey)

function muliply(arrey) {
    let sum = 1;
    for (let i = 0; i < arrey.length; i++) {
        sum *= arrey[i]     
    }
    return console.log(sum);   
}
muliply(arrey)



function avg(arrey) {
    let sum = 1;
    for (let i = 0; i < arrey.length; i++) {
        sum += arrey[i]     
    }
    return console.log(sum / arrey.length);   
}
avg(arrey)


function muliply(arrey) {
    let sum = 1;
    for (let i = 0; i < arrey.length; i++) {
        sum *= arrey[i]     
    }
    return console.log(sum);   
}


function cangeFirstBetLast(arrey) {
    let temp;
    temp = arrey[0];
    arrey[0] = arrey[-1];
    arrey[-1] = temp;
    return console.log(arrey);   
}

cangeFirstBetLast(arrey)


function copyArrey(arrey) {
    let copyed = arrey.splice(0)

    return console.log(copyed);   
}

copyArrey(arrey)


function reverseArrey(arrey) {
    arrey = arrey.reverse();
    return console.log(arrey);   
}

reverseArrey(arrey)


