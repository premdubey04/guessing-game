function guess(){const maxNumber=prompt('please enter the max no. till which you want to guess');
console.log(maxNumber);
const theNumber=Math.floor(Math.random()*maxNumber);
console.log(theNumber);
let userGuess=prompt('enter the guess');
console.log(userGuess);
do{
if(userGuess==theNumber){
    alert('you guessed the right number');
    guess();
}
else if(userGuess<theNumber){

     userGuess=prompt('too low ','enter the guess');
}
else if(userGuess>theNumber){
    userGuess=prompt('Too high! please guess again','enter the guess');
}

}while(userGuess!==theNumber);
}

guess();
