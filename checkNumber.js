const isEven=require("./isEven");

const num=10;

console.log("Checking Number:",num);

if(isEven(num)){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}
