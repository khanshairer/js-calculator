var display = document.getElementById("display");
var buttons = document.querySelectorAll(".num");
var result = document.getElementById("result");
var ans = document.getElementById("ans");

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
    ans.value = display.value;
    display.value = "0";
});

document.getElementById("ans").addEventListener("click", function() {
    if (display.value == "0") {
        display.value = "";
    }
    display.value += ans.value;
});
