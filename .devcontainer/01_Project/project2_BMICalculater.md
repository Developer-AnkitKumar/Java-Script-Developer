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