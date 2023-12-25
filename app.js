let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "yellow", "green"];

let started = false;
let level = 0;
let highScore =0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("key pressed");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

};
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);

};

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIndex = Math.floor(Math.random() * 3);
    let randColor = btns[randIndex];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    console.log(gameSeq);
    gameFlash(randbtn);
   

}

function btnPress() {
    console.log(this);
    let btn = this;

    userFlash(btn);
    let useColor = btn.getAttribute("id");
    console.log(useColor);
    userSeq.push(useColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function checkAns(index) {
  
    if (userSeq[index] === gameSeq[index]) {
       if(userSeq.length== gameSeq.length){
        setTimeout(levelUp,1000);
        if(level>highScore){
            highScore=level+1;
        }
       }
    }
    else {
       
       
        h2.innerHTML = `Game Over! Your score is <b>${level}</b> <br>
        Highest score =${highScore}
        <br>
        Press any key to start <br> ` ;

        document.querySelector("body").style.backgroundColor="red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;
}