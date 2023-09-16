let gameSeq=[];
let usrSeq=[];

let started=false;
let level=0;

let levelHead=document.querySelector("h3");

let btns=["box1","box2","box3","box4"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
    }

    levelUp();
})

function levelUp(){
    usrSeq=[];
    level++;
    levelHead.innerText=`Level ${level}`;

    let ranIdx=Math.floor(Math.random()*3);
    let randColor=btns[ranIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randColor);
    // console.log(randBtn);
    btnFlash(randBtn);
};

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    },250);
}

function checkAns(idx){
    // let idx=level-1;
    if(usrSeq[idx]==gameSeq[idx]){
        if(usrSeq.length==gameSeq.length){
            setTimeout(levelUp(),1000);
        }
        console.log("Correct Seq");
    } else{
        levelHead.innerHTML=`Game Over! Your score was <u>${gameSeq.length}</u> <br> Press any key to start!`;
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    usrSeq.push(userColor);
    console.log(usrSeq);
    checkAns(usrSeq.length-1);
}

let allBtns=document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    level=0;
    gameSeq=[];
    usrSeq=[];
    let body= document.querySelector("body");
    body.classList.add(".red");

}