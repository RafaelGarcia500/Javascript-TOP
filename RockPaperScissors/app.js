const userChoiceDisplay = document.getElementById(`userChoice`)
const computerChoiceDisplay = document.getElementById(`computerChoice`)
const resultDisplay = document.getElementById(`result`)
const choices = document.querySelectorAll(`button`)
let userChoice


function computerChoice(){

}

choices.forEach(choice => choice.addEventListener(`click`,(e) =>{
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
}))