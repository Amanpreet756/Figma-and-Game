// let aman = prompt("enter ur name");

// aman= "@" + aman + aman.length;
// console.log(aman);
// to find ------------------ average
// let aman=[85,97,44,37, 76,60];
// let sum=0;
// for(let ele of aman){
// sum= sum + ele;
// }
// let average;
// average = sum / aman.length;
// console.log(average, "is average");

// applying 10% offer-----------
// let aman = [250,645,300,900,50];
// for(let ele of aman){
//     let i=0;
//     aman[i]= ele - (10/100) * ele;
//     console.log(aman[i]);
//     i++;
// }
// console.log(aman);

//arrays methods task-------------------------------------------
// aman=["blomm","micro","uber","goo","ibm","netflix"];
// console.log(aman);
// aman.shift();
// console.log(aman);
// aman.splice(2,1,"ola");
// console.log(aman);
// aman.push("amazon");
// console.log(aman);
//functions====================---------------------------------------
// function strfun(abc){
//     return  abc.length;
// }


//  let as=strfun("amankaur");
// console.log(as);
//  const arro = (abc)=>{
// return abc.length;
//  }  
//  let as = arro("javascripthe");
//  console.log(as); 
// arr=[3,4,2,1];
// arr.forEach((val)=> {
//     console.log(val*val*val);
// });
// arr =[44,670,95,44,55];
// let newArray = arr.filter((val)=>{
//     if(val>=90){  //return val>90;it will return only true values;  
//         return val;
//     }
// });
// console.log(newArray);
// let aman = document.querySelector("h2");
// console.log(aman.innerText);
//  aman.innerText= aman.innerText + " i need javaScirpt";
// let aman= document.querySelectorAll(".box");
// console.dir(aman);
// console.log("after implementation and using loop");
// idx=0;
// for(let i of aman){
// i.innerText = `this is the unique text ${idx}` ;
// idx++; 
//  }             
//   if() 
//  let newBtn = document.createElement("button");
//  newBtn.innerText = "Click Me";
// //  newBtn.style.backgroundColor="red";
// //  newBtn.style.color="white";
// newBtn.style.cssText = 'background-color: red; color: white;';
//  document.body.prepend(newBtn);
// let para= document.querySelector("p");
// para.setAttribute('class','para_style');  

// class user {
//    constructor(name,email){
// this.name=name;
// this.email=email; 
//    } 

//     viewdata() {  // Use regular method syntax
//         console.log("this is data");
//     }
// }
// class admin extends user{
// editData(string){
// this.name=name;
// this.
// }
// }

//

// let std1 = new user("dha", "amn@email");
// let std2 = new user("ch","achn@email");

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);

}
getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
}); 


