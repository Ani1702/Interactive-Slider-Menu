// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");

// div.addEventListener("click",()=>{
//     console.log("Div was clicked")
// })

// ul.addEventListener("click",function(event){
//     event.stopPropagation(); //Div was clicked ko print nhi karwayega...
//     console.log("ul was clicked")
// })

// for(li of lis){
// li.addEventListener("click",(event)=>{
//     console.log("li was clicked")
// })}


//INTERNAL ACTIVITY: (TODO WEBPAGE):
let task=document.querySelector("#task");
let btn=document.querySelector("#btn");
let list=document.querySelector("ul");
let del=document.querySelector(".del");

btn.addEventListener("click",function(){
    console.log(task.value);
    let li=document.createElement("li");
    let newTask=document.querySelector("ul").append(li)
    li.innerText=task.value;
    task.value=""; // *****IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT*****

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete")

})

list.addEventListener("click",function(event){
    let listItem=event.target.parentElement;
    listItem.remove();
    console.log("deleted");

})


