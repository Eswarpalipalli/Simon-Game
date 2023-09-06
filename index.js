var colours=["red","blue","green","yellow"];
var pattern=[];
var userPattern=[];
var level=1;
var st=false;

$(document).on("keypress",function(){
    if(!st)
    {
        level =1;
        // $("#level-title").text("level" +level);
        nextSequence();
    }
});

$(".btn").on("click",function(){
    var userColor=this.id;
    userPattern.push(userColor);
    playSound(userColor);
    animatePress(userColor);
    checkAnswer(userPattern.length-1);

 });

function checkAnswer(currLevel)
{
    if(userPattern[currLevel] == pattern[currLevel]){
    //console.log("True");
    if(userPattern.length == pattern.length)
    {
        setTimeout(function(){
            nextSequence();
        }, 1000);
    }
  }
  else
  {
  //console.log("false");
  var sound=new Audio('sounds/wrong.mp3');
  sound.play();
  pattern=[];
//   st=false;
  $("h1").text("GameOver!");
  $("body").addClass('game-over');
  setTimeout(function(){
    $("body").removeClass('game-over');
  },200);
  setTimeout(function(){
    $("h1").text("Press A Key to Start");
  },1000);
  }
}

function nextSequence()
{
    userPattern=[];
$("h1").text("Level "+level);
level++;
var n=Math.floor(4*(Math.random()));
var colorRandom=colours[n];
pattern.push(colorRandom);
$("#"+colorRandom).fadeOut(100).fadeIn(100);
playSound(colorRandom);
}
function playSound(key)
{
    var audio = new Audio("sounds/"+key+".mp3");
    audio.play();
}
function animatePress(key)
{
    $('.'+key).addClass('pressed');
    setTimeout(function(){
        $("."+key).removeClass('pressed');
    },100);
}
