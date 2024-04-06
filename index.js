let msg1=document.getElementById('msg1');
let msg2=document.getElementById('msg2');
let msg3=document.getElementById('msg3');

var result=Math.floor(Math.random()*10);
    console.log(result);
var no_of_guess=0;
var guessed_num=[];

function play()
{
  
     let guess=document.getElementById('guess').value;
     console.log(guess);

   if(guess <1 || guess >10)
    {
        alert('please enter number from 0 to 10')
    }
    else{
        no_of_guess=no_of_guess+1;
        guessed_num.push(guess);

    }
    if(guess > result)
    {
        msg1.textContent="Your Guess is low";
        msg2.textContent="No of gamer guesses:"+no_of_guess;
        msg3.textContent="Guessed Number are:"+guessed_num;

    }
    else if( guess < result)
    {
        msg1.textContent="Your Guess is high";
        msg2.textContent="No of gamer guesses:"+no_of_guess;
        msg3.textContent="Guessed Number are:"+guessed_num;
    }
    else if (guess == result)
     {
        msg1.textContent="congrats you win";
        msg2.textContent="The lucky no is:"+result;
        msg3.textContent="you are find:"+no_of_guess+ "guess";
     }
}

