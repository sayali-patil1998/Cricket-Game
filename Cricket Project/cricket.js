
function generateCompChoice(){
  let random_number=Math.random() *3;
  
  if(random_number>0 && random_number<=1){
    return 'Bat';
  }
  else if(random_number>1 && random_number<=2){
    return 'Ball';
  }
  else{
    return 'Stump';
  }
}

let Scorestr= localStorage.getItem('Score');
let Score;
if (Scorestr !== undefined){
  Score = JSON.parse(Scorestr);
} else{
Score={
  win : 0,
  lost : 0,
  Tie : 0,
};
}

Score.displayScore= function(){
  return `no of matches won is: ${this.win},no of matches lost is: ${this.lost}, no of matches tie is: ${this.Tie}`
}


function resultmsg(usermove,compmove){
  if(usermove==='Bat'){
    if(compmove==='Ball'){
      Score.win++;
      return 'User Won';
    }
    else if(compmove ==='Bat'){
      Score.Tie++;
      return 'Its Tie';
    }
    else if(compmove ==='Stump'){
      Score.lost++;
      return 'Computer won';
    }
  }
  else if(usermove==='Ball'){
    if(compmove==='Ball'){
      Score.Tie++;
    return'Its Tie';
    }
    else if(compmove ==='Bat'){
      Score.lost++;
      return 'Computer won';
    }
    else if(compmove ==='Stump'){
      Score.win++;
      return 'User Won';
    }

  }
  else if(usermove==='Stump'){
    if(compmove==='Ball'){
      Score.lost++;
      return 'Computer won';
    }
    else if(compmove ==='Bat'){
      Score.win++;
      return 'User Won';
    }
    else if(compmove ==='Stump'){
      Score.Tie++;
      return 'Its Tie';
    }

  }
}

function showResult(usermove,compmove,result){
  alert(`You have choosen ${usermove} and Computer choose ${compmove} and ${result}
  
  ${Score.displayScore()}`);
}