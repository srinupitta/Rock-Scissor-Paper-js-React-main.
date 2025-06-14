let score=JSON.parse(localStorage.getItem('score'))||{
    Wins:0,
    Losses:0,
    Ties:0
};

updateScoreElement();

document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
        playGame('rock');
    } else if(event.key === 'p'){
        playGame('paper');
    }else if(event.key === 's'){
        playGame('scissors');
    }
});

function playGame(playerMove){

    const computerMove= pickComputermove();

    let result='';
if(playerMove === 'scissors'){
    if(computerMove === 'scissors'){
        result ='Tie.';
    }
    else if (computerMove === 'rock')
    {
        result='You Lose.';
    }
    else if( computerMove === 'paper')
    {
        result='You Win.';
    }      

}
else if(playerMove === 'paper'){


    if(computerMove === 'paper'){
        result ='Tie.';
    }
    else if (computerMove === 'scissors')
    {
        result='You Lose.';
    }
    else if( computerMove === 'rock')
    {
        result='You Win.';
    }

    }
else if(playerMove === 'rock'){
    if(computerMove === 'rock'){
        result ='Tie.';
    }
    else if (computerMove === 'paper')
    {
        result='You Lose.';
    }
    else if( computerMove === 'scissors')
    {
        result='You Win.';
    }
   
    }  

   
    if (result === 'You Win.'){
        score.Wins +=1;
    }else if (result === 'You Lose.'){
        score.Losses +=1;
    }else if(result === 'Tie.'){
        score.Ties +=1;
    }
   
    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML =` You <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

    function updateScoreElement(){
    document.querySelector('.js-score')
      .innerHTML=` Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`;

    }


function pickComputermove(){
const randomNumber=Math.random();
let computerMove='';

if(randomNumber >=0 && randomNumber<1/3 )
    {    
        computerMove='rock';
    }
else if( randomNumber >=1/3 && randomNumber<2/3)
    {
        computerMove='paper';
    }
else if( randomNumber >=2/3 && randomNumber<1)
    {
        computerMove='scissors';
    }  
   
return computerMove;

    }


