import './App.css';

function App() {
  var value1;
  var value2;
  var operator;
  var state = -1; //0 is value1, 1 is operator, 2 is value2
  const handleClick = (e) =>{
    let value = e.target.value;
    switch(value) {
      case "1":
        let element = document.getElementById("display");
        element.value += value;
        if(state === -1){
          value1 = element.value;
        }
        else if(state === 1){
          value2 = element.value;
        }
        console.log(element.value);
        break;
      case "+":
        if(state === -1){
          let element = document.getElementById("display");
          if(element.value == "")
            return;
          element.value = "";
          operator = "+";
          state = 1;
        }
        break;
      case "=":
        let result;
        if(operator === "+"){
          result = parseInt(value1) + parseInt(value2);
          let element = document.getElementById("display");
          element.value = result;
        }
    }
  }
  return (
    <div className="App">
      <head>
        <meta name="description" content="calculator"/>
        <meta name="keywords" content="HTML,CSS,JavaScript"/>
      </head>
      <body>
        <button className="regularButton" id="b0" value="0" onClick={handleClick}>0</button>
        <button className="regularButton" id="b1" value="1" onClick={handleClick}>1</button>
        <button className="regularButton" id="b2" value="2" onClick={handleClick}>2</button>
        <button className="regularButton" id="b3" value="3" onClick={handleClick}>3</button>
        <button className="regularButton" id="b4" value="4" onClick={handleClick}>4</button>
        <button className="regularButton" id="b5" value="5" onClick={handleClick}>5</button>
        <button className="regularButton" id="b6" value="6" onClick={handleClick}>6</button>
        <button className="regularButton" id="b7" value="7" onClick={handleClick}>7</button>
        <button className="regularButton" id="b8" value="8" onClick={handleClick}>8</button>
        <button className="regularButton" id="b9" value="9" onClick={handleClick}>9</button>
        <button className="regularButton" id="plus" value="+" onClick={handleClick}>+</button>
        <button className="regularButton" id="minus" value="-" onClick={handleClick}>-</button>
        <button className="regularButton" id="times" value="*" onClick={handleClick}>*</button>
        <button className="regularButton" id="divide" value="/" onClick={handleClick}>/</button>
        <button className="bigButton" id="equals" value="=" onClick={handleClick}>=</button>
        <input type="text" value="" id = "display"/>
      </body>
    </div>
  );
}

export default App;
