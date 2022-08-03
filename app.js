let displayValue = 0;

//The display shows whichever number is being pressed

let display = () => {

    let display = document.getElementsByClassName("display");

}



let operate = (num1, num2) => {
    
    num1 + num2;
    num1 - num2;
    num1 * num2;
    num1 / num2;

}

let buttons = document.querySelectorAll(".number")

buttons.forEach(buttons =>{
    buttons.onclick = () => {
        document.querySelector("p").innerText = buttons.value;
    }
})

