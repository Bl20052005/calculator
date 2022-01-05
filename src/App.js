import './App.css';

function App() {
  var value1 = "";
  var value2 = "";
  var operator = "";
  var state = -1; //0 is value1, 1 is operator, 2 is value2
  var displayCalculation;
  const handleClick = (e) =>{
    let value = e.target.value;
    switch(value) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        handleNumbers(value);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        handleOperator(value);
        break;
      case "=":
        handleEquals(value);
        break;
      case "clr":
        let element = document.getElementById("display");
        element.value = "";
        state = -1;
        value1 = "";
        value2 = "";
        operator = "";
        break;
      case "dot":
        handleDot(value);
        break;
      case "+/-":
        handleNegative(value);
        break;
    }
    let element = document.getElementById("smallerDisplay");
    displayCalculation = value1 + operator + value2;
    element.value = displayCalculation;
  }
  const handleNumbers = (value) =>{
    let element = document.getElementById("display");
    element.value += value;
    if(state === -1){
      value1 = element.value;
    }
    else if(state === 1){
      value2 = element.value;
    }
    console.log(element.value);
  }
  const handleOperator = (value) =>{
    if(state === -1){
      let element = document.getElementById("display");
      if(element.value == "")
        return;
      element.value = "";
      operator = value;
      state = 1;
    }
    else if(state === 1){
      value1 = handleEquals(value);
      value2 = "";
      operator = value;
      state = 1;
      let element = document.getElementById("display");
      element.value = "";
    }
  }
  const handleEquals = (value) =>{
    let result;
    if(operator === "+"){
      result = parseFloat(value1) + parseFloat(value2);
      result = result.toFixed(6);
      result = removeZeros(result);
      let element = document.getElementById("display");
      element.value = result;
      return result;
    }
    if(operator === "-"){
      result = parseFloat(value1) - parseFloat(value2);
      result = result.toFixed(6);
      result = removeZeros(result);
      let element = document.getElementById("display");
      element.value = result;
      return result;
    }
    if(operator === "*"){
      result = parseFloat(value1) * parseFloat(value2);
      result = result.toFixed(6);
      result = removeZeros(result);
      let element = document.getElementById("display");
      element.value = result;
      return result;
    }
    if(operator === "/"){
      result = parseFloat(value1) / parseFloat(value2);
      result = result.toFixed(6);
      result = removeZeros(result);
      let element = document.getElementById("display");
      element.value = result;
      return result;
    }
  }
  const handleDot = (value) =>{
    let element = document.getElementById("display");
    if(state === -1){
      if(value1 === ""){
        value1 = "0.";
        element.value = "0.";
      }
      else{
        let index = value1.indexOf(".");
        if(index != -1)
          return;
        element.value += ".";
        value1 += ".";
      }
    }
    if(state === 1){
      if(value2 === ""){
        value2 = "0.";
        element.value = "0.";
      }
      else{
        let index = value2.indexOf(".");
        if(index != -1)
          return;
        element.value += ".";
        value2 += ".";
      }
    }
  }
  const handleNegative = (value) =>{
    let element = document.getElementById("display");
    console.log(value);
    if(state === -1){
      let index = value1.indexOf("-");
      if(index !== -1){
        value1 = value1.slice(1);
      }
      else{
        value1 = "-" + value1;
      }
      element.value = value1;
    }
    else if(state == 1){
      let index = value2.indexOf("-");
      if(index !== -1){
        value2 = value2.slice(1);
      }
      else{
        value2 = "-" + value2;
      }
      element.value = value2;
    }
  }
  const removeZeros = (value) =>{
    let resultString = value + "";
    let index = resultString.indexOf(".");
    let last = resultString.length-1;
    if(index === -1)
      return value;
    while(resultString[last] === "0"){
      resultString = resultString.substring(0,last);
      last--;
    }
    if(resultString[last] === "."){
      resultString = resultString.substring(0,last);
    }
    return parseFloat(resultString);
  }
  return (
    <div className="App">
      <head>
        <meta name="description" content="calculator"/>
        <meta name="keywords" content="HTML,CSS,JavaScript"/>
      </head>
      <body>
        <input type="text" value="" id = "display" disabled="disabled"/>
        <input type="text" value="" id = "smallerDisplay" disabled="disabled"/>
        <div id = "buttonPannel">
          <button className="regularButton" id="b0" value="0" onClick={handleClick}>0</button>
          <button className="regularButton" id="b1" value="1" onClick={handleClick}>1</button>
          <button className="regularButton" id="b2" value="2" onClick={handleClick}>2</button>
          <button className="regularButton" id="plus" value="+" onClick={handleClick}>+</button>
          <button className="regularButton" id="b3" value="3" onClick={handleClick}>3</button>
          <button className="regularButton" id="b4" value="4" onClick={handleClick}>4</button>
          <button className="regularButton" id="b5" value="5" onClick={handleClick}>5</button>
          <button className="regularButton" id="minus" value="-" onClick={handleClick}>-</button>
          <button className="regularButton" id="b6" value="6" onClick={handleClick}>6</button>
          <button className="regularButton" id="b7" value="7" onClick={handleClick}>7</button>
          <button className="regularButton" id="b8" value="8" onClick={handleClick}>8</button>
          <button className="regularButton" id="times" value="*" onClick={handleClick}>*</button>
          <button className="regularButton" id="b9" value="9" onClick={handleClick}>9</button>
          <button className="regularButton" id="dot" value="dot" onClick={handleClick}>.</button>
          <button className="regularButton" id="negative" value="+/-" onClick={handleClick}>+/-</button>
          <button className="regularButton" id="divide" value="/" onClick={handleClick}>/</button>
          <button className="bigButton" id="equals" value="=" onClick={handleClick}>=</button>
          <button className="regularButton" id="clear" value="clr" onClick={handleClick}>clr</button>
        </div>
      </body>
    </div>
  );
}

export default App;
