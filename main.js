const num = 266219;

const numSplitToArray  = num.toString().split('');

let sum = 1;

for (let i = 0; i < numSplitToArray.length; i++) {
    sum *= numSplitToArray[i];
};

console.log(sum);

const  cubedResult = sum **3;

console.log( cubedResult)

console.log( cubedResult.toString().slice(0,2))