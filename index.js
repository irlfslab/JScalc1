const disp = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const chars = ["*","/","-","+",".","="]
let output = "";

const calc = (btn) => {
    if (btn === "=" && output !==  "") {
        output = eval(output);
    } else if(btn === "AC") {
        output = ""
    } else if(btn === "DEL") {
        output = output.toString().slice(0,-1);
    } else {
        if (output === "" && chars.includes(btn)) return;
        output += btn;
    }
    disp.value = output;    
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calc(e.target.dataset.value));
});

