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
        result.innerHTML = 'please give a valid weight ${height}';
    }
    else{
        (weight / ((height*height)/1000)).toFixed(2)
        //show result
        results.innerHTML = `<span>${bmi}</span>`;
    }


})
```