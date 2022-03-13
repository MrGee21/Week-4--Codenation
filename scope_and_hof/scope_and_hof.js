// Activity 1
const loopFunc = (fn)=> {
    for(let i = 0; i < 5; i++){
        fn();
    }

}

const greet = () => {
    console.log("Hello Code Nation");
}

loopFunc(greet);


// ACTIVITY 2

const myArray = [1,2,3,4,5];
const mappedArray = myArray.map(x => 
    x * 3
    );

console.log(mappedArray);


// ACTIVITY 3

const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
};
console.log(doMaths(10)(5, multiply));