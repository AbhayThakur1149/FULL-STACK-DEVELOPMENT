function sayHello(){
    console.log("Hello, World!");
}
sayHello();
console.log(require(`module`).wrapper);

// console.log(__filename);
// console.log(__dirname);



//File System
//task1 read the context of a file
const fs =require('fs');
const data =fs.readFileSync('./input.txt');
// console.log(data); data come in hexadecimal
console.log(data.toString());

// task2 = Put data in 2nd file
fs.writeFileSync('./output.txt',data);

// task3= append in file
fs.appendFileSync('./input.txt','I am a CSE student'); 

// task4= delete a file
fs.unlinkSync('./output.txt');

// task5= asynchronous func
// fs.readFile('./input.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//   }
// })

//  read in input and write in output
// fs.readFile('./input.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
// fs.writeFile('./output.txt',data,(err)=>{
//     if(err){
//         console.log(err);
//     }
// })    }
// })

// fs.appendFileSync('./input.txt','I am a student in chitkara',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("data appended");

//     }
// })

//read dir
const files=fs.readdirSync('./')
console.log(files);

fs.readdir('./',{recursive:true,withFileTypes:true},(err,files)=>{
    if(err){
        console.log(err);
    }   
    else{

        console.log(files);
    }
})


