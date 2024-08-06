# Project Related to DOM

## Project RElated Link
[click Hear](https://obscure-space-tribble-pjrx54vxvq5qf7x5.github.dev/)

# Soluction Code

## Project 1

```javaScript
console.log("ANkit Kumar Pal")
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'whitey'){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'yello'){
            body.style.background = e.target.id;
        }
    })
})
```