console.log("gamee");
var turn="X";
var n=1;
var xwin=0;
var owin=0;
let f=false;
let ting=new Audio("ting.mp3");
let music=new Audio("music.mp3");
// music.play();
const changeturn= ()=>{
    return turn==="X"?"O":"X";
}
const checkWin=()=>{
    let boxtextt=document.getElementsByClassName("boxtext");
    let wins=[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach(e=>{
        if((boxtextt[e[0]].innerText===boxtextt[e[1]].innerText) && (boxtextt[e[2]].innerText===boxtextt[e[1]].innerText) && boxtextt[e[0]].innerText!==''){
            document.querySelector('.info').innerText=boxtextt[e[0]].innerText+" "+"Won"+" "+"Game Over";
            f=true;
            if(boxtextt[e[0]]==="O"){
                owin=owin+1;
            }
            else{
                xwin=xwin+1;
            }
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            // break;
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "70%";

        }
    })
}

const tie=()=>{
    let boxtextt1=document.getElementsByClassName("boxtext");
    let wins=[0,1,2,3,4,5,6,7,8];
    let data=0;
    wins.forEach(e=>{
        if(boxtextt1[e].innerText===""){
            data=1;
        }
    })
    if(data==1){
        return false;
    }
    return true;
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===""){
            // n=n+1;
            console.log("text");
            boxtext.innerText=turn;
            ting.play();
            turn=changeturn();
            checkWin();
            d=tie();
            if(d==true){
                document.getElementsByClassName("info")[0].innerText="Game is Tie!"+" ";
            }
            if(f===false && d==false){
                document.getElementsByClassName("info")[0].innerText="Turn for"+" "+turn+" ";
            }

        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    n=n+1;
    f = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})

score.addEventListener('click',()=>{
    document.getElementsByClassName("scoreshow")[0].innerText+="\n";
    document.getElementsByClassName("scoreshow")[0].innerText+="Number of games"+" : "+n+"  ";
    document.getElementsByClassName("scoreshow")[0].innerText+="\n";
    
    document.getElementsByClassName("scoreshow")[0].innerText+="X won"+" : "+xwin+"  ";
    document.getElementsByClassName("scoreshow")[0].innerText+="\n";

    document.getElementsByClassName("scoreshow")[0].innerText+="O won"+" : "+owin+"   ";
    document.getElementsByClassName("scoreshow")[0].innerText+="\n";

    

})