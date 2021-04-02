
var player = document.getElementById("player");
var block = document.getElementById("block");
var score = document.getElementById("score");
var counter = 0;


document.addEventListener("keydown" , key =>{
    if( key.key == "ArrowLeft"){
     moveLeft();
        // console.log("pressed left key");
    }
    if ( key.key == "ArrowRight"){
       moveRight();
        // console.log("Right key presed");
        // block.style.right = "100px";
    }
});


function moveRight(){
   
    // console.log("internal log of moveRight");
    let right = parseInt(window.getComputedStyle(player).getPropertyValue("right"));
    if (right == 0 || right == -100){
        right -=100
        player.style.right = right+'px';
    }
    
}

function moveLeft(){
    let right = parseInt(window.getComputedStyle(player).getPropertyValue("right"));
    if (right == -100 || right == -200){
        right +=100;
        player.style.right = right+'px';

    }

}

block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    if (random==0){
        block.style.right = "0px";
    }
    if (random==1){
        block.style.right = "-100px";
    }
    if (random==2){
        block.style.right = "-200px";
    }
    
    
});

function checkIfDead(){
    
        
        let bRight = window.getComputedStyle(block).getPropertyValue("right");
        let btop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
        let pRight =  window.getComputedStyle(player).getPropertyValue("right");
        if(bRight == pRight && btop >309){
            console.log('game over ho gayea');
            // block.style.animation ="none";
            var reset= confirm("GameOver Your Score: "+ counter);
            
        }
        if (reset ==1){
            window.location.reload();
            counter = 0;
            scr = 0;
        } 
        if (reset ==0){
            window.location.reload();
            counter = 0;
            scr = 0;
        } 
        else{
            counter ++;
            var scr =Math.floor( counter/250);
            score.innerHTML="Your Score: "+ scr;
        }

     
}
setInterval(checkIfDead ,1);



