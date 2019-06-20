//score of player1
var score1=document.getElementById("score1");
//score of player2
var score2=document.getElementById("score2");
//maximum score, input
var scoremax=document.getElementById("scoremax");
//scorelabel
var scorelabel=document.querySelector("label span");
//button for player1 that changes score1
var player1=document.getElementById("player1");
//button for player2 that changes score2
var player2=document.getElementById("player2");
//button that reset score
var reset=document.getElementById("reset");

//update scoremax when input is entered
//click event listener when you click, input for user input
scoremax.addEventListener("input",function(){
    //scoremax.value get value of input
    scorelabel.textContent=String(this.value);
})

//lost one hour on this: counter has to be initialized outside the function
//if you initialize inside the function it gives always 1 as value
var counter1=0;
var counter2=0;
//update score1 when player1 is pressed
//this time event for button isn't input but click
player1.addEventListener("click",function(){
    if(counter1+counter2<Number(scorelabel.textContent)){
    counter1++;
    score1.textContent=counter1;} else {
        score1.classList.add("score-achieved");
    }
})

player2.addEventListener("click",function(){
    if(counter1+counter2<Number(scorelabel.textContent)){
    counter2++;
    score2.textContent=counter2;} else {
        score2.classList.add("score-achieved");
    }
})

reset.addEventListener("click",function(){
    counter1=0;
    counter2=0;
    score1.textContent=0;
    score2.textContent=0;
    score1.classList.remove("score-achieved");
    score2.classList.remove("score-achieved");
    //the following doesn't work, innerHTML
    //document.getElementsByTagName("h1")[0].innerHTML='<span id="score1">0</span> to <span id="score2">0</span>';
})


