# Project 2, with BMI Calculater 

```javaScript
document.querySelector('form')
//hold in variable form
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'please give a valid height ${height}';
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'please give a valid weight ${weight}';
    }
    else{
        (weight / ((height*height)/1000)).toFixed(2)
        //show result
        results.innerHTML = `<span>${bmi}</span>`;
    }
})

```
# Project -2 Soluction(Digital clock)

```javaScript
const clock = document.getElementById('clock')
//document.querySelector('#clock')

//let date = new date()//define the date
//console.log(date.toLocaleTimeString());//extract the time

setInterval(function(){    //jb tk mai chahu tb tk time ko chlau
    let date = new Date();

    clock.innerHTML = date.toLocalTimeString();
}, 1000) // 1000 it mins 1sec tk start

```
## Project-3 Soluction(Guess a Number)
### Try and guess a random number between 1 & 100, you have 10 attempts to guesss the right number

```javaScript
//math library use
const randomNumber = console.log(parseInt(Math.random() * 100 + 1)); 

const submit = document.querySelector('#subt';)//subt- submit
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const result = document.querySelector('.lastResult');
const loOrHi = document.querySelector('#lowAndHigh');
const startOver = document.querySelector('#startParse')

const p = document.createElement('p')

const prevGuess = []
int newGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        cont guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    }); 
}

function validateGuess(guess){
    //kya value valid hai ya nhi it mins value 1 to 100 ke bich me hai ya nhi.
 if(isNaN(guess)){
    alert('please enter a valid number')
  }
 else if(guess < 1){
     alert('please enter a number more then 1')
  }else if(guess > 100){
     alert('please enter a number less then 100')
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`GameOver. Random number was ${randomNumber}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}

function checkGuess(guess){
    //kya validate value equeal to nhi hai 'nhi to display ka use .kro.
    if(guess === randomNumber){
        displapMessage(`you gested it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`number it to low`)
    }else if(guess > randomNumber){
        displayMessage(`number it to high`)
    }
}

function displayGuess(guess){
    //ydi low hai to thik nhi to high hai to bhi  thik.
    userInput.value = '';
    guessSlot.innerHTML += `${guess} ,`
    numberGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(guess){
    //user ki value ko display kra do "DOM" manipulation work.
    loOrHi.innerHTML = `<h2>${message}</h2>`;
}

function nweGame(){
    const newGameButton = document.querySelector('#')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(math);
        prevGuess = [];
        numberGuess = 1;
        guessSlot.innerHTML = ''
        remaning.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabeld'
            startOver.removeChild(p)

            playGame = true;
    });
}

function endGame(){
    userInput.value ='';
    userInput.setAttribute('disbled', '')
    p.classList.add('button')
    p.innerHTML = <h2 id="newGame"> start new game </h2>;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
```