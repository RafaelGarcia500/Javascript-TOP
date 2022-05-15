const gameOptions = [`rock`,`paper`,`scissors`]

function game(){
 playRound()
}

function playRound(){
const playerSelection = playerPlay()
const computerSelection = computerPlay()
const winner = checkWinner(playerSelection, computerSelection)
console.log(winner)
}

function playerPlay(){
 let input = prompt(`Type Rock,Paper or Scissors`)
 while(input==null){
  input = prompt(`Type Rock,Paper or Scissors`)
 }
 input = input.toLowerCase()
 let validate = validateInput(input)
 while(validate == false){
   input = prompt(`Type Rock,Paper or Scissors`)
   while(input==null){
    input = prompt(`Type Rock,Paper or Scissors`)
   }
   input= input.toLowerCase()
   validate = validateInput(input)
 }
 return input
}

function computerPlay(){
  return gameOptions[Math.floor(Math.random() * gameOptions.length)]
 }

 function validateInput(option){
   if(gameOptions.includes(option)){
     return true
   }else{
     return false
   }
 }

 function checkWinner(player, computer){
  if(player === computer){
    return `tie`
  }else if(
    (player === `rock` && computer ===`scissors`)||
    (player === `scissors` && computer ===`paper`)|| 
    (player === `paper` && computer ===`rock`)
    ){
    return ` Player wins.`
  }else{
    return `Computer wins.`
  }
 }
 
 game()

 //lacks polishment