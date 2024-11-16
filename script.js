// Task 2

const sumAndAvg=(numbers)=>{
    // Validation if the parameter type is array and if it's empty
    if(!Array.isArray(numbers) ){
        console.log("Please enter array of numbers");
        return false;
    }else if(numbers.length===0){
        console.log("Array is empty");
        return false; 
    }
    // Calculating sum of numbers in array by reduce method 
    let sum = 0;
    sum = numbers.reduce((a,c)=>{
        return a+c;
    },0)
    // Calculating average of numbers in array by dividing the sum of the array elements on the array length
    let avg = sum / numbers.length;
    return {sum , avg};

} 


// Task 3 

const removeDups = (strings)=>{
    // Validation if the parameter type is array and if it's empty
    if(!Array.isArray(strings) ){
     console.log("Please enter array of strings");
     return false;
     }else if(strings.length===0){
     console.log("Array is empty");
     return false;
    }
    // Removing duplicates from array by using Set and converting it back to array
    let set = new Set(strings);
    return Array.from(set); 

}

