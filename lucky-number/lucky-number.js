const CORRECT_NUMBER = parseInt(Math.random() * 10)



let userGuess = parseInt(prompt('enter a number(0-10'))

  if (userGuess == CORRECT_NUMBER){
    alert('Yeeee! You WON!')
  }else{
    alert('Try again!')
  }