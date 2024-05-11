const num = 266219;

const numArray  = num.toString().split('');

let sum = 1;

for (i = 0; i < numArray.length; i++) {
    sum *= numArray[i];
};

console.log(sum);

const sumdouble = sum **3;

console.log(sumdouble)

console.log(sumdouble.toString().slice(0,2))