var myInp = document.getElementById("num");

var guess = document.getElementById("guess");

var numDisp = document.getElementById("display");

var answer = Math.round(Math.random()*100);

var score = 100;


guess.addEventListener("click",function(){
//    console.log("HELLO");
    
    console.log(parseInt("10")+1);
    var realNum = parseInt(myInp.value);
    
    if(realNum == answer){
    numDisp.innerText = "Winner Winner Chicken Dinner SCORE: "+score;}
    
    else {
//        displayId.innerText = "What a Loser";
        if(realNum > answer){
            numDisp.innerText = "Too Big";
        }
        
        else if (realNum < answer){
            numDisp.innerText = "Too Small";
        }
        score -= 1;
    }
});



