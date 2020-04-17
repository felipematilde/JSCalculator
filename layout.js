var calculadoraBox = document.createElement("div");
calculadoraBox.className = "box";
calculadoraBox.style.width = "560";
calculadoraBox.style.height = "680";
calculadoraBox.style.backgroundColor = "#87CEFA";
calculadoraBox.style.position = "absolute";
calculadoraBox.style.top = 0;
calculadoraBox.style.left = 0;
document.body.appendChild(calculadoraBox);

var display = document.createElement("div");
display.className = "box";
display.style.width = "340";
display.style.height = "100";
display.style.backgroundColor = "#FFFFFF";
display.style.left = 50;
display.style.top = 50;
display.id = "displayId";
var labelDisplay = document.createTextNode("");
display.appendChild(labelDisplay);
display.style.fontSize = "200%";
display.style.position = "absolute";
calculadoraBox.appendChild(display);

//Number buttons
var col, lin;
for(var i=9;i>=0;i--){
    if(i==9 || i==8 || i==7){
        lin = 0;
    }else if(i==6 || i==5 || i==4){
        lin = 1;
    }else if(i==3 || i==2 || i==1){
        lin = 2;
    }else if(i==0){
        lin = 3;
    }

    if(i==1 || i==4 || i==7){
        col = 0;
    }else if(i==2 || i==5 || i==8 || i==0){
        col = 1
    }else if(i==3 || i==6 || i==9){
        col = 2;
    }

    var button = document.createElement("div");
    button.className = "box";
    button.style.width = 100;
    button.style.height = 100;
    button.style.backgroundColor = "#708090";
    button.style.position = "absolute";
    button.style.left = 50+col*120;
    button.style.top = 170+lin*120;
    button.id = "button"+i+"Id";
    var labelNumber = document.createTextNode(i);
    button.appendChild(labelNumber);
    button.style.fontSize = "600%";
    calculadoraBox.appendChild(button);
}

//Operations buttons
col = 3;
lin = 0;
var buttonPlus = document.createElement("div");
buttonPlus.className = "box";
buttonPlus.style.width = 100;
buttonPlus.style.height = 100;
buttonPlus.style.backgroundColor = "#4682B4";
buttonPlus.style.position = "absolute";
buttonPlus.style.left = 50+col*120;
buttonPlus.style.top = 170+lin*120;
buttonPlus.id = "buttonPlusId";
var labelPlus = document.createTextNode("+");
buttonPlus.appendChild(labelPlus);
buttonPlus.style.fontSize = "600%";
calculadoraBox.appendChild(buttonPlus);

col = 3;
lin = 1;
var buttonMinus = document.createElement("div");
buttonMinus.className = "box";
buttonMinus.style.width = 100;
buttonMinus.style.height = 100;
buttonMinus.style.backgroundColor = "#4682B4";
buttonMinus.style.position = "absolute";
buttonMinus.style.left = 50+col*120;
buttonMinus.style.top = 170+lin*120;
buttonMinus.id = "buttonMinusId";
var labelMinus = document.createTextNode("-");
buttonMinus.appendChild(labelMinus);
buttonMinus.style.fontSize = "600%";
calculadoraBox.appendChild(buttonMinus);

col = 3;
lin = 2;
var buttonMult = document.createElement("div");
buttonMult.className = "box";
buttonMult.style.width = 100;
buttonMult.style.height = 100;
buttonMult.style.backgroundColor = "#4682B4";
buttonMult.style.position = "absolute";
buttonMult.style.left = 50+col*120;
buttonMult.style.top = 170+lin*120;
buttonMult.id = "buttonMultId";
var labelMult = document.createTextNode("x");
buttonMult.appendChild(labelMult);
buttonMult.style.fontSize = "600%";
calculadoraBox.appendChild(buttonMult);

col = 3;
lin = 3;
var buttonDiv = document.createElement("div");
buttonDiv.className = "box";
buttonDiv.style.width = 100;
buttonDiv.style.height = 100;
buttonDiv.style.backgroundColor = "#4682B4";
buttonDiv.style.position = "absolute";
buttonDiv.style.left = 50+col*120;
buttonDiv.style.top = 170+lin*120;
buttonDiv.id = "buttonDivId";
var labelDiv = document.createTextNode("/");
buttonDiv.appendChild(labelDiv);
buttonDiv.style.fontSize = "600%";
calculadoraBox.appendChild(buttonDiv);

//Decimal button
col = 0;
lin = 3;
var buttonDec = document.createElement("div");
buttonDec.className = "box";
buttonDec.style.width = 100;
buttonDec.style.height = 100;
buttonDec.style.backgroundColor = "#4682B4";
buttonDec.style.position = "absolute";
buttonDec.style.left = 50+col*120;
buttonDec.style.top = 170+lin*120;
buttonDec.id = "buttonDecId";
var labelDec = document.createTextNode(".");
buttonDec.appendChild(labelDec);
buttonDec.style.fontSize = "600%";
calculadoraBox.appendChild(buttonDec);

//Result button
col = 2;
lin = 3;
var buttonResult = document.createElement("div");
buttonResult.className = "box";
buttonResult.style.width = 100;
buttonResult.style.height = 100;
buttonResult.style.backgroundColor = "#4169E1";
buttonResult.style.position = "absolute";
buttonResult.style.left = 50+col*120;
buttonResult.style.top = 170+lin*120;
buttonResult.id = "buttonResultId";
var labelResult = document.createTextNode("=");
buttonResult.appendChild(labelResult);
buttonResult.style.fontSize = "600%";
calculadoraBox.appendChild(buttonResult);

//Clean button
col = 3;
lin = -1;
var buttonClean = document.createElement("div");
buttonClean.className = "box";
buttonClean.style.width = 100;
buttonClean.style.height = 100;
buttonClean.style.backgroundColor = "#FF0000";
buttonClean.style.position = "absolute";
buttonClean.style.left = 50+col*120;
buttonClean.style.top = 170+lin*120;
buttonClean.id = "buttonCleanId";
var labelClean = document.createTextNode("cln");
buttonClean.appendChild(labelClean);
buttonClean.style.fontSize = "400%";
calculadoraBox.appendChild(buttonClean);
