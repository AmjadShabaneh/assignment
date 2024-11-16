// how to turn Typescript files in to js and run them 
// 1- Install typescript globally by typing in terminal (npm install -g typescript).
// 2- Create typescript file for example filename.ts and write your code in it. 
// 3- Run the following command in your terminal tsc filename.ts and make sure that you are in the same directory of the typescript file 
// that will create a javascript file using the same name but it will end with .js as filename.js.
// 4- Call the new javascript file in your HTML file.    

// task 4 
    //Define Product interface
    interface Product {
        name: string;
        price: number;
    }
/* 
  create function to calculate the total price of products by the TS variable type feature 
  Skips:
  1. Parameter type check
  2. Empty array check
  3. Validity of array objects matching the Product interface
*/
    const productsTotalPrice = (products:Product[])=>{
        // using reduce method to calculate total price because its make the code cleaner 
       return products.reduce((total,pro)=> total + pro.price,0);
    }


//task 5 

 
// create function that take a string parameter and checks if its a valid email or not
const emailChecker = (email:string)=>{
   /* create regular expressions that checks if the string is a valid email 
    1- [a-zA-Z0-9._+]+@ means that before the @ symbol you can use all english letter capital and small ones, numbers , (.,_,+) symbols where and as you like
    there must be a @ symbol 
    2- [a-zA-Z0-9.-]+\. means before the . you can write a domain name that contains small and capital letters and numbers and (.,-) symbols
    3-[a-zA-Z]{2,} that means after the . you can write the end of the doamin that only contains small and capital letters 
    */
    const emailReg = /^[a-zA-Z0-9._+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailReg.test(email)){
        return "This is a valid email";
        }
        else{
        return "this is not a valid email";
        }

}
