// ------------------------es5-variables----------------------

// var a="muneeb";
// a="muneeb amdani";
// console.log(a);

// let firstName="muneeb amdani";
// firstName="muneeb";
// console.log(firstName);

// const myName="muneeb";
// myName="amdani";
// console.log(myName)

// const PI=3.149;
// lastName="amdani";
// console.log(lastName);

// function printMyName(){
//     var name="muneeb";
//     console.log(name);
// }
// printMyName()

// function printMyName(){
//     var name="muneeb";
//     if(true){
//         console.log(name);
//     }
//     console.log(name);
// }
// printMyName()

// function printMyName(){
//     if(true){
//         var name="muneeb";
//         console.log(name);
//     }
//     console.log(name);
// }
// printMyName()


// function printMyName(){
//     let name="muneeb";
//     console.log(name);
// }
// printMyName()

// function printMyName(){
// if(true){
//     let name="muneeb";
//     console.log(name);
// }
// console.log(name);
// }
// printMyName()

// function printMyName(){
//     if(true){
//         const name="muneeb";
//         console.log(name);
//     }
//     console.log(name);
//     }
//     printMyName()

// function printMyName(){
//     if(true){
//     var name="muneeb";
//     var name="amdani"

//         console.log(name);
//     }
//     }
//     printMyName()

// function printMyName(){
//     if(true){
//     let name="muneeb";
//     let name="amdani"

//         console.log(name);
//     }
//     }
//     printMyName()

// ---------------------------template-literal--------------------------

// let firstName="muneeb";
// let lastName="amdani";
// age=22;

// console.log("I am" + " " + firstName + " "+ lastName);

// console.log("I am" + " " + firstName + " "+ lastName + "\n" + "I am " + age + " years old");

// console.log(`I am ${firstName} ${lastName} I am ${age} years old`);


// ---------------------------arrow-function--------------------------

// let sum=function(a,b){
// console.log(a+b)
// }
// sum(20,10)


// let sum=function(a,b){
//     let value1=+prompt("enter value1")
//     let value2=+prompt("enter value2")
//     return value1+value2
//     }
//     console.log(sum())

// let value1=+prompt("enter value1")
// let value2=+prompt("enter value2")
// let sum=function(a,b){
//     return value1+value2
//     }
//     console.log(sum(value1,value2))

// -----------------arrow-function----------------------

// let value1=+prompt("enter value1")
// let value2=+prompt("enter value2")
// let sum=function(a,b){
//     return a+b
//     }
//     // console.log(sum(value1,value2))

//     const sumWithArrowFunction=(a,b) => a+b;
//     console.log(sumWithArrowFunction(value1,value2))

// let value1=+prompt("enter value1")
// let value2=+prompt("enter value2")
// let sum=function(a,b){
//     return a+b
//     }
//     const sumWithArrowFunction=((a,b) => {
//       let c=a+b;
//       return c/2;
//     });
//     console.log(sumWithArrowFunction(value1,value2));

// let myFavouriteProgrammingLanguage=["javascript","python","C++","Java","Typescript"];

// -------------------------array-destructive--------------------------

// let top1=myFavouriteProgrammingLanguage[0];
// let top2=myFavouriteProgrammingLanguage[4];
// let top3=myFavouriteProgrammingLanguage[1];
// console.log(`My first favourite programming language is ${top1} and second is ${top2}`)

// let myFavouriteProgrammingLanguage=["javascript","python","C++","Java","Typescript"];

// let [top1,top2,top3,top4,top5]=myFavouriteProgrammingLanguage;
// console.log(`My first favourite programming language is ${top1} and second is ${top5} and third is ${top2}`)

// let myData={
//     name:"muneeb",
//     age:16,
//     lastQualification:"matric",
//     hobby:{
//         first:"reading",
//         second:"programming"
//     }
// }
// console.log(`My name is ${myData.name} and my age is ${myData.age} and my qualification is ${myData.lastQualification} and my first hobby is ${myData.hobby.first}`)

// ---------------------object-destructure----------------------------

// let myData={
//     name:"muneeb",
//     age:16,
//     lastQualification:"matric",
//     hobby:{
//         first:"reading",
//         second:"programming"
//     }
// }
// let {name,age,lastQualification,hobby}=myData;
// console.log(`My name is ${name} and my age is ${age} and my qualification is ${lastQualification} and my first hobby is ${hobby.first}`)


// ---------------------spread-operator----------------------------

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let mergeArr=arr1.concat(arr2)
// console.log(mergeArr)

// let arr1=[1,2,3];
// let arr2=[6,7,8];

// let mergeArr=[...arr1,4,5,...arr2]

// console.log(mergeArr)

// let arr1=[1,2,3];
// let arr2=[6,7,8];

// let mergeArr=[...arr1,4,5,...arr2]

// console.log(mergeArr)

// let myData={
//     name:"muneeb",
//     age:16,
//     lastQA:"matric"
// }
// let myHobby={
//     first:"reading",
//     second:"programming"
// }
// let compData={...myData,
//     hobby:{...myHobby}
// }
// console.log(compData)

// -------------------rest-parameter----------------

// function sum(a,b,c){
//     let sum=a+b+c;
//     console.log(sum)
// }
// sum(5,5,10,10);

// function sum(a,b,...c){
//     // let sum=a+b+c;
//     let sum=0;
//     for(let i=0;i<c.length;i++){
// sum+=c[i]
//     }
//     console.log(sum)
// }
// sum(5,5,10,10,20,40);

// function sum(a,b,...c){
//     // let sum=a+b+c;
//     let sum=a+b;
//     for(let i=0;i<c.length;i++){
// sum+=c[i]
//     }
//     console.log(sum)
// }
// sum(5,5,10,10,20,40);

// ---------------promises----------------------

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let rollNo=undefined;
//         if(rollNo===undefined){
//             reject("error with communicating with database")
//         }
//     },2000)
// })
// console.log(promise1)
// promise1.then((item) => {
    
// }).catch((message)=>{
//     console.log(message)
// })

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let money=prompt("Enter your answer");
//         if(money==="yes"){
//             resolve("money received")
//         }
//         else{
//             reject("money not received")
//         }
//     },4000)
// })
// console.log(promise1)

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let money=prompt("Enter your answer");
//         if(money==="yes"){
//             resolve("money received")
//         }
//         else{
//             reject("money not received")
//         }
//     },4000)
// })
// console.log(promise1)
// promise1.then((message)=>{
// console.log(message)
// })
// .catch((error)=>{
// console.log(error)
// })

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let money=prompt("Enter your answer");
//         if(money==="yes"){
//             resolve("money received")
//         }
//         else{
//             reject("money not received")
//         }
//     },1000)
// })
// console.log(promise1)
// promise1.then((message)=>{
//     alert(message)
// console.log(message)
// })
// .catch((error)=>{
//     alert(error)
// console.log(error)
// })

// -----------------------sync---------------------------------

// console.log("hello one")
// for (let i=0;i<1000000;i++){
// console.log("A");
// }
// console.log("hello two");

// async function fetchGithubUsers() {
//     console.log("inside async function");
//     const response= await fetch("https://api.github.com/users");
//     console.log(response.json())
// }
// fetchGithubUsers()

// -----------------------Async and await---------------------------------

// console.log("Before the function")
// async function fetchGithubUsers() {
//     console.log("inside async function");
//     const response= await fetch("https://api.github.com/users");
//     console.log("reponse",response)
//     const users=await response.json()
//     console.log("users",users)
// }
// fetchGithubUsers()
// console.log("Outside the function")


// console.log("Before the function")
// async function fetchGithubUsers() {
//     console.log("inside async function");
//     const response= await fetch("https://jsonplaceholder.typicode.com/albums");
//     console.log("reponse",response)
//     const users=await response.json()
//     console.log("users",users)
// }
// fetchGithubUsers()
// console.log("Outside the function")


// console.log("Before the function")
// async function fetchGithubUsers() {
//     console.log("inside async function");
//     const response= await fetch("https://jsonplaceholder.typicode.com/albums");
//     console.log("reponse",response)
//     const users=false;
//     if(users){
//     return users
//     }else{
//         throw Error("Users not found")
//     }
// }
// fetchGithubUsers()
// console.log("Outside the function")
// let usersData=fetchGithubUsers()
// usersData.then((data)=>{
//     alert(data[0].title)
// console.log(data)
// })
// .catch((error)=>{
// console.log(error)
// })

// console.log("Before the function")
// async function fetchGithubUsers() {
//     console.log("inside async function");
//     const response= await fetch("https://jsonplaceholder.typicode.com/albums");
//     console.log("reponse",response)
//     const users=await response.json();
//     if(users){
//     return users
//     }
// }
// fetchGithubUsers()
// console.log("Outside the function")
// let usersData=fetchGithubUsers()
// usersData.then((data)=>{
//     alert(data[0].title)
// console.log(data)
// })
// .catch((error)=>{
// console.log(error)
// })


// async function fetchGithubUsers() {
//     const response= await fetch("https://jsonplaceholder.typicode.com/albums");
//     const users=await response.json();
//     if(users){
//     return users
//     }
// }
// fetchGithubUsers()
// let usersData=fetchGithubUsers()
// usersData.then((data)=>{
//     alert(data[0].title)
// })
// .catch((error)=>{
// console.log(error)
// })

// async function fetchGithubUsers() {
//     const response= await fetch("https://jsonplaceholder.typicode.com/users");
//     const users=await response.json();
//     console.log(response);
//     console.log(users)
//     if(users){
//     return users
//     }
// }
// fetchGithubUsers()
// let usersData=fetchGithubUsers()
// usersData.then((data)=>{
//     alert(data[0].title)
// })
// .catch((error)=>{
// console.log(error)
// })


// ----------------jsonData------------------------

// let jsonData='{"name":"John", "age":30, "city":"New York"}';
// let objData=JSON.parse(jsonData);
// console.log(jsonData);
// console.log(objData)
// console.log(objData.name,objData.age,objData.city);

// let jsonData='{"name":"John", "age":30, "city":"New York"}';
// let objData=JSON.parse(jsonData);
// console.log(jsonData);
// console.log(objData)
// console.log(objData.name);


// let jsonData='{"name":"John", "age":30, "city":"New York"}';
// let objData=JSON.parse(jsonData);
// console.log(jsonData);
// console.log(objData)
// console.log(objData.name);

// let myInfo={
//     name:"muneeb",
//     age:16,
//     city:"karachi"
// }
// let jsonDataToSend=JSON.stringify(myInfo);
// console.log(jsonDataToSend);



async function fetchGithubUsers() {
    const response= await fetch('https://dummyjson.com/user/login',{
method:"POST",
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
  
  username: 'emilys',
  password: 'emilyspass',
  expiresInMins: 30, // optional, defaults to 60
}),
// credentials:'include'
    });
    const users=await response.json();
    console.log(response);
    console.log(users)
    if(users){
    return users
    }
}
fetchGithubUsers()
let usersData=fetchGithubUsers()
usersData.then((data)=>{
    console.log('data',data);
    if(data){
        localStorage.setItem('token',data.accessToken)
    let token=localStorage.getItem('token');
    if(token){
        location.href='./dashboard.html'
    }
    console.log(token)    
    }
})
.catch((error)=>{
console.log(error)
})
