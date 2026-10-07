let img=document.getElementById("img");
let change=document.getElementById("change");
let play=document.getElementById("play");

let n=1;

let sound1=new Audio("sound/yee.mp3");
let sound2=new Audio("sound/spiky.mp3");
let sound3=new Audio("sound/light.mp3");

change.addEventListener("click",function(){
    n++; if(n>3)n=1;
    if(n==1)img.src="image/img1.jpeg";
    if(n==2)img.src="image/img2.webp";
    if(n==3)img.src="image/img3.webp";
});

play.addEventListener("click",function(){
    if(n==1)sound1.play();
    if(n==2)sound2.play();
    if(n==3)sound3.play();
});
