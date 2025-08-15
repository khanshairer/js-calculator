var display = document.getElementById("display");
var buttons = document.querySelectorAll(".num");
var result = document.getElementById("result");


buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (display.value == "0") {
            display.value = "";
        }
        display.value += button.value;
    });
});

document.getElementById("equals").addEventListener("click", function() {
    try {
        display.value = eval(display.value);
        
    } catch (error) {
        result.value = "Error";
    }
});

document.getElementById("clear").addEventListener("click", function() {
    display.value = "0";
});


