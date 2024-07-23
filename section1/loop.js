// for (let i = 1; i <= 10; i++) {
   
//     num = 19
//     console.log(`${num} X ${i} = ${num*i}`);
// }




// for (let i = 50; i <= 100; i++) {
//     if(i%7 ==0 && i%5==0){
//         console.log(i);
//     } 
// }


// let a = 10
// while(a<20){
// console.log(a);
// a++
// }


// prime number 

// let prime = true;
// const n1 = 18
// for(let i = 2; i<n1; i++){
// if (n1%i ===0) {
//     console.log('not prime');
//     prime = false
//     break
// }
// }
// if (prime) {
//     console.log('prime');
// }


// reverse number 

// let n2 = 235654
// reverse = 0
// while(n2>0){
//     let d = n2%10;
//     reverse = reverse*10 + d
//     n2 = parseInt(n2/10)
// console.log(n2);
// }


// console.log(reverse);



// fibonaccci series 

// let [a,b] = [0,1]
// console.log(a);
// console.log(b);

// for (let i = 0; i < 8; i++) {
//     let c = a + b;
//     console.log(c);
//     [a,b] = [b,c]
// }



//+++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++ function 

function addNum(a,b){
    return a+b
}
// console.log('the sum of a and b is',addNum(12,13));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let getFullname = function(first, last){
    return first + " "+ last
}

// console.log(getFullname('hassan',"ashraf"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Arrow function 


let add1 = (x,y) => x+y

let square = (x) => x*x

let multiple = (x) => {
    console.log(`the value of x is ${x}`);
    return x*10
}

// console.log(add1(12,13));
// console.log(square(12));
// console.log(multiple(12));

let    sum = 0
function sumall(a,b){

    for (let i = a; i <= b; i++) {
       sum +=i   
    }
return sum

}

console.log(sumall(1,5));