//Input DOM Sections
let Temperature =
document.getElementById("Input_temperature");
let Tem_symbol=
document.getElementById("temSymbol");
let click=
document.getElementById("BTN_Calculate");

// Temperature Conditional Section
let Celsius=0;
// let Celsius1= (Farenhit-32)*5/9;
let Farenhit=32;
// let Farenhit1=(Farenhit)*5/9;
click.addEventListener("click",function(){
    if(Temperature.value=="C"){
        return (Celsius)*5/9;
        // return Celsius1;
        document.getElementById("Bottom").innerHTML=Temperature;
    }
    else if (Temperature=="F"){
        return (Farenhit-32)*5/9;
        // return Farenhit1;
        document.getElementById("Bottom").innerHTML=Temperature;
    }
})
console.log()
