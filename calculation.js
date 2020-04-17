var numberAux="";
var numberList=[];
var operationList=[];

function pressNumber(num){
    numberAux+=num;
    display.textContent += num;
}

function pressPlus(){
    if(display.textContent==""){
        numberAux = "";
    }else{
        operationList.push("+");
        numberList.push(numberAux);
        numberAux="";
    }
    display.textContent += "+";
}

function pressMinus(){
    if(display.textContent==""){
        numberAux = "-";
    }else{
        operationList.push("-");
        numberList.push(numberAux);
        numberAux="";
    }
    display.textContent += "-";
}

function pressMult(){
    operationList.push("x");
    numberList.push(numberAux);
    numberAux="";
    display.textContent += "x";
}

function pressDiv(){
    operationList.push("/");
    numberList.push(numberAux);
    numberAux="";
    display.textContent += "/";
}

function pressDec(){
    numberAux+=".";
    display.textContent += ".";
}

function cleanDisplay(){
    numberList=[];
    operationList=[];
    display.textContent ="";
}

function calculateResult(){
    if(validaInput()){
        numberList.push(numberAux);
        numberAux="";
        
        //First, find and calculate mult and div
        var notFinished = true;
        for(var i=0;notFinished;i++){
            if(operationList[i]=="x" ||operationList[i]=="/"){
                (operationList[i]=="x")? numberList[i] = parseFloat(numberList[i])*parseFloat(numberList[i+1]):numberList[i] = parseFloat(numberList[i])/parseFloat(numberList[i+1]);
                numberList.splice(i+1,1);
                operationList.splice(i,1);
                i--;
            }
            if(i==operationList.length-1 || operationList.length==0)
                notFinished = false;
            console.log(numberList);
            console.log(operationList);
        }

        //Then calculate plus and minus
        var operationListIsNotEmpty = operationList.length>0;
        notFinished = operationListIsNotEmpty;
        for(var i=0;notFinished;i++){
            (operationList[i]=="+")?numberList[i] = parseFloat(numberList[i])+parseFloat(numberList[i+1]):numberList[i] = parseFloat(numberList[i])-parseFloat(numberList[i+1]);
            numberList.splice(i+1,1);
            operationList.splice(i,1);
            i--;

            if(operationList.length==0){
                notFinished = false;
            }
            console.log(numberList);
            console.log(operationList);
        }
        display.textContent = numberList[0];
    }else{
        display.textContent = "ERROR!";
    }

}

function isOperation(char){
    return (char=="+" || char=="-" || char=="x" || char=="/")? true:false;
}

function isDecimal(char){
    return char == "." ? true:false;
}

function isNumber(char){
    return (isOperation(char) || isDecimal(char))? false:true;
}

function validaInput(){
    var valido = true;
    var inputTxt = display.textContent;

    //It must initiate either with +, -, . or number
    if(inputTxt[0]=="x" || inputTxt[0]=="/")
        valido = false;
    
    //Character limit
    if(inputTxt.length>20)
        valido = false;

    for(var i=0;i<inputTxt.length-1;i++){
        //It must not have two operation consecutive
        if(isOperation(inputTxt[i]) && isOperation(inputTxt[i+1]))
            valido = false;
        
        //It must not have two decimal separator consecutive
        if(inputTxt[i]=="." && inputTxt[i+1]==".")
            valido = false;
    }

    //It must not finish with operation
    if(isOperation(inputTxt[inputTxt.length-1])){
        valido = false;
    }

    return valido;
}

for(var i=0;i<=9;i++){
    var button = document.querySelector("#button"+i+"Id");
    button.setAttribute("onClick","pressNumber("+i+")");
}

var char=2;
buttonPlus.setAttribute("onClick","pressPlus()");
buttonMinus.setAttribute("onClick","pressMinus()");
buttonMult.setAttribute("onClick","pressMult()");
buttonDiv.setAttribute("onClick","pressDiv()");
buttonDec.setAttribute("onClick","pressDec()");

buttonClean.setAttribute("onClick","cleanDisplay()");
buttonResult.setAttribute("onClick","calculateResult()");