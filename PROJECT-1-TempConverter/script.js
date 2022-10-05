let celcius = document.getElementById("Celcius")
let fahrenheit = document.getElementById("Fahrenheit")

celcius.addEventListener("input",function(){
    fahrenheit.value = `${(celcius.value*9/5) + 32} f`
})

fahrenheit.addEventListener("input",function(){
    celcius.value = `${(fahrenheit.value - 32)*5/9} °`
})