const gameOptions = [`rock`,`paper`,`scissors`]


function game(){
 playRound()
 
}

function playRound(){
  for (let i = 0; i < 5; i++){
    playResults()
  }
}

function playerPlay(){
   let input = prompt(`Pick between Rock,Paper and Scissors and play against the Computer.`)
  while(input == null ||input == undefined ){
    input = prompt(`Pick between Rock,Paper and Scissors and play against the Computer.`)
  }
  input=input.toLowerCase()
  if(input == `rock`|| input == `paper` || input == `scissors`){
    console.log(`Player has chosen ${input}`)
  }else{
    while(input == null ||input == undefined ){
    input = prompt(`Pick between Rock,Paper and Scissors and play against the Computer.`)
  }
}
  return input
}

function computerPlay(){
    return gameOptions[Math.floor(Math.random() * gameOptions.length)]
   
}

function playResults(){
  const playerSelection = playerPlay()
  const computerSelection = computerPlay()
   
  console.log(`Computer has chosen ${computerSelection}`)
  
 

  if(playerSelection == `rock` && computerSelection == `scissors`){
    console.log(`Rock beats Scissors. Player wins\n
    
    `)
  }
  if(playerSelection == `paper` && computerSelection == `rock`){
    console.log(`Paper beats Rock. Player wins\n
    
    `)
  }
  if(playerSelection == `scissors` && computerSelection == `paper`){
    console.log(`Scissors beat Paper. Player wins\n
    
    `)
  }
  if(playerSelection == `rock` && computerSelection == `paper`){
    console.log(`Paper beats Rock. Computer wins\n
    
    `)
  }
  if(playerSelection == `scissors` && computerSelection == `rock`){
    console.log(`Rock beats Scissors. Computer wins\n`
    
    )
  }
  if(playerSelection == `paper` && computerSelection == `scissors`){
    console.log(`Scissors beat Paper. Computer wins\n
    
    `)
  }else if(playerSelection == computerSelection){
    console.log(`It is a Tie.\n
    
    `)
  }
}

