//Input DOM Sections
let Temperature = document.getElementById("Input_temperature");
let Tem_symbol = document.getElementById("temSymbol");
let BTN = document.getElementById("BTN_Calculate");

// Temperature Conditional Section

BTN.addEventListener("click", function () {
    console.log(Temperature.value);
    if (Tem_symbol.value == "C") {
        function Faranhit(val) {
            return (val * 9 / 5) + 32;
        }
        document.getElementById("Tem_display").innerHTML = Faranhit(Temperature.value);

    }
    else if (Tem_symbol.value == "F") {
        function Centigrate(value) {
            return (value - 32) * 5 / 9;
        }
        document.getElementById("Tem_display").innerHTML = Centigrate(Temperature.value);
    }

});


console.log()
