// Import des fonctions
// ./ = répertoire courant
const { calc } = require("./calc")
const readline = require('readline-sync')
const chalk = require('chalk')


console.log("Bienvenue dans Calc.js")
let isRunning = true
while (isRunning) {

  let operateur = readline.question('\nChoisissez un opérateur parmi "%, +, -, * ou /" (X pour stopper) : ')
  operateur === 'X' ? isRunning = false : isRunning = true
  if (operateur !== 'X') {
    let nb1 = readline.question('Nombre 1 = ')
    let nb2 = readline.question('Nombre 2 = ')

    console.log(chalk.bold(`\nVoici le résultat : ${calc(operateur, nb1, nb2)}\n`))
  } else {
    console.log(chalk.bold.red('\nA la prochaine !\n'))
  }
}