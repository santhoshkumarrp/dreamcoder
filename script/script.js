//creating objects for updating scores
let score=JSON.parse((localStorage.getItem('score')));
if(score===null){
  score={
    wins:0,
    loses:0,
    ties:0
  };
}
updateScore();
//function for calculation of computermove
function computerMove()
{
    let compmove=Math.random();
    let result='';
    if(compmove>=0 && compmove<1/3){
          result='Stone';
    }
    else if(compmove>=1/3 && compmove<2/3)
      {
          result='Paper';
      }
      else if(compmove>=2/3 && compmove<=1)
      {
        result='Scissor';
      }
      return result;
}
//function for calculation of result
function decisionMaking(playerMove,result)
{
  let status='';
  if(playerMove==='Stone')
  {
      if(result==='Stone'){
          status='Match Tie';
      }
      else if(result==='Paper'){
          status='You Lose';
      }
      else if(result==='Scissor'){
          status='You Win';
      }
  }
  else if(playerMove==='Paper')
  {
      if(result==='Stone'){
          status='You Win';
      }
      else if(result==='Paper'){
          status='Match Tie';
      }
      else if(result==='Scissor'){
          status='You Lose';
      }
  }
  else if(playerMove==='Scissor')
  {
      if(result==='Stone'){
          status='You Lose';
      }
      else if(result==='Paper'){
          status='You Win';
      }
      else if(result==='Scissor'){
          status='Match Tie';
      }
  }
  //updating the scores
  if(status==='You Win'){
    score.wins++;
  }else if(status==='You Lose'){
    score.loses++;
  }else if(status==='Match Tie'){
    score.ties++;
  }

  localStorage.setItem('score',JSON.stringify(score));
  updateScore();
  document.querySelector('.js-result').innerHTML=status;
  document.querySelector('.js-moves').innerHTML=`Your Move ${playerMove} - Computer Move ${result}`;
  function updateScore(){
    document.querySelector('.js-score').innerHTML = `Wins:${score.wins}, Loses:${score.loses}, Ties:${score.ties}`;
  }
}