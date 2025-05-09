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

    if(element.name !== "result" && element.name !== "delete" && element.name !== "clean"){
    newFunction.addEventListener("click", ()=>{
        const sign = document.getElementById("operation");
        sign.textContent = element.symbol;
    });
        } else if(element.name === "result"){
            newFunction.addEventListener("click", ()=>{
                try{
              const number1 = parseInt(document.getElementById("number1").value);
              const number2 = parseInt(document.getElementById("number2").value);

              const operation = document.getElementById("operation").textContent;
              let realOperator;
              let resultChanged;

              if(operation === "%")
              
              if(!isNaN(number1) && !isNaN(number2)){
                resultChanged = eval(number1.toString() + operation + number2.toString());
                console.log(`resultado: ${resultChanged}`);
                document.getElementById("resultField").innerText = `${resultChanged}`;
              }
            }catch(err){
                console.log("Debe ser un número", err);
            }
            });
        }
});



