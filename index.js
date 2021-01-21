const chalk = require('chalk');
var readlineSync = require('readline-sync');
 
console.log(chalk.bgRed.bold.underline("AKINATOR-LITE\n"));
console.log(chalk.blue("Welcome!The rules are simple .Choose any celebrity from the list given & we will guess who that is.\n"))
var userName = readlineSync.question('May I have your name? ');
console.log(chalk.bgCyan.underline("\nWelcome",userName,",Choose one among the following:"))
console.log(chalk.blue("\n1.Pankaj Tripathi\n2.Deepika Padukone\n3.Virat Kholi\n4.Hima Das\n5.Prateek Khuhad\n6.Jasleen Royal "));
readlineSync.keyInPause("Once Done");

var field=["Acting","Sports","Singer"];
var position=readlineSync.keyInSelect(field,"Which field does the celebrity you chose work in?")

if(field[position]==="Acting")
{
  if(readlineSync.keyInYN("Is the celebrity you chose a female?")===true){
            console.log(chalk.bgRed("\nYou have chosen Deepika Padukone."))
  }else{
            console.log(chalk.bgRed("\nYou have chosen Pankaj Tripathi."))

  }

}else if(field[position]==="Sports"){
  if(readlineSync.keyInYN("Is the celebrity you chose a female?")===true){
            console.log(chalk.bgRed("\nYou have chosen Hima Das."))
  }else{
            console.log(chalk.bgRed("\nYou have chosen Virat Kholi."))

  }

}else if(field[position]==="Singer"){
  if(readlineSync.keyInYN("Is the celebrity you chose a female?")===true){
            console.log(chalk.bgRed("\nYou have chosen Jasleen Royal."))
  }else{
            console.log(chalk.bgRed("\nYou have chosen Prateek Kuhad."))

  }

}else{
console.log(chalk.bgRed("\nIt was nice to have you!"))
}