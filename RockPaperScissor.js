const gameOptions = [`Rock`,`Paper`,`Scissors`]

function game(){
 playRound()
}

function playRound(){
const playerSelection = playerPlay()
const computerSelection = computerPlay()
}

function playerPlay(){
  let input=prompt(`Rock,Paper,Scissors game. type down below:`)
  while(input==null){
    input=prompt(`Rock,Paper,Scissors game. type down below:`)
  }
  input = input.toLowerCase()
  let validate = validateInput(input)
  while(validate == false){
     input = prompt(`Type Rock,Paper, or Scissors`)
     input = input.toLowerCase()
     validate = validateInput(input)
  }
}

function computerPlay(){
 return gameOptions[Math.floor(Math.random()*gameOptions.lenght)]
}

function validateInput(option){
    return gameOptions.includes(option)
}
        
    

game()