const container = document.getElementById("buttons");

const functions = [
    {name: "clean", symbol: "C"},
    {name : "delete", symbol: "D"},
    {name: "module", symbol: "%"},
    {name: "suma", symbol: "+"}, 
    {name: "multiplication", symbol: "x"},
    {name: "root", symbol: "√"}, 
    {name: "resta", symbol: "-"},
    {name : "division", symbol: "÷"},
    {name: "exponential", symbol: "^"}, 
    {name: "result", symbol: "="}
];

functions.map((element)=>{
    const newFunction = document.createElement("button");
    newFunction.id = element.name;
    newFunction.classList.add("button");
    newFunction.textContent = element.symbol;
    container.appendChild(newFunction);

    document.getElementById("resultField").textContent = "Resultado";

    const htmlNumber1 = document.getElementById("number1");
    const htmlNumber2 = document.getElementById("number2");

    if(element.name !== "result" && element.name !== "delete" && element.name !== "clean"){
    newFunction.addEventListener("click", ()=>{
        const sign = document.getElementById("operation");
        sign.textContent = element.symbol;

    });
        } else if(element.name === "result"){
            newFunction.addEventListener("click", ()=>{
              const number1 = parseInt(htmlNumber1.value);
              const number2 = parseInt(htmlNumber2.value);
    
              const operation = document.getElementById("operation").textContent;
              const result = document.getElementById("resultField");
              
              if(!isNaN(number1) && !isNaN(number2)){
                
                switch(operation){

                    case "+":
                     result.textContent = number1 + number2;
                    break;

                    case "-":
                        result.textContent = number1 - number2;
                        break;

                    case "x":
                        result.textContent = number1 * number2;
                        break;

                    case "√": 
                        if(number1 === 2 || number1 === 3){
                        result.textContent = parseInt((number2 ** (1/number1)).toFixed(5));
                    }
                        else{
                            console.log("error")
                            result.textContent = "Solo raíces de 2 y 3"
                        }
                        break;

                    case "^":
                        result.textContent = parseInt((number1 ** number2).toFixed(5));
                        break;
                    
                    case "÷":
                        if(number2 !== 0){
                        result.textContent = number1 / number2;
                    }else{
                        console.log("error")
                        result.textContent = "error";
                    }                        
                        break;

                    case "%":
                        result.textContent = number1 % number2;
                        break;

                        default: 
                        console.log("La operación no puede ser ejecutada");
                        result.textContent = "error"

                }
              }
                
            
            });
        } else if(element.name === "clean"){
            newFunction.addEventListener("click", ()=>{
                document.getElementById("resultField").textContent = "Resultado";
                htmlNumber1.value = "";
                htmlNumber2.value = "";
            });

    } else if(element.name === "delete"){
        newFunction.addEventListener("click", ()=>{
            htmlNumber1.value = "";
            htmlNumber2.value = "";
        })
    }
});


