//primero definimos las constantes
const  display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");


//dandole funcionalidad a nuestra calculadora
buttons.forEach((item) => {
    item.onclick =()=>{
        if(item.id === "clear"){
            display.innerText = "";
            
        }else if (item.id === "backspace"){
            let string = display.innerText;
            display.innerText = string.substring(0,string.length -1); 
            
        }else if(display.innerText !== "" && item.id === "btn-equal"){
            display.innerText = eval(display.innerText);
  
        }else if (display.innerText === "" && item.id === "btn-equal"){
            display.innerText = "null";
            setTimeout(()=>{display.innerText =""},2000);
        }else {
            display.innerText += item.id;
        }
    }
}); 


const themeToggleBtn = document.querySelector(".theme-toggler");
//console.log(themeToggleBtn)
const calculator = document.querySelector(".calculator");
//console.log(calculator)

let isDark = true;

themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
}

