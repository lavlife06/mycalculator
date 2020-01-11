import React from 'react';
import './App.css';

class App extends React.Component{
  // displayString= current display string
  // value= it stores current value after  arithmetic operation or it stores the value of current number
  // currentoperator will remember the arithmetic operation that has to be done i.e- 2 + 3 , here when "+" was clicked,then currentoperator remembers it which help in further arithmetic-operation  
  // waitingForOperand = false implies that "+","-" etc has never invoked and true then vice-versa, it helps in knowing  whether any arithmetic-operator is clicked or not. 
  state={
      value: null,
      displayString: '0',
      waitingForOperand: false,
      currentoperator: null
    }
  holdInput = (digit) => {
    let {displayString,waitingForOperand} = this.state;
    if(waitingForOperand){
      this.setState({
        displayString: digit,
        waitingForOperand: false
      })
    }else{
      this.setState({
       displayString: displayString === '0' ? digit : displayString === "Error" ? "Error" : displayString + digit,
    })}
  }

 handleDel = () => {
  let { displayString } = this.state;
  if(displayString!== "Error"){
    this.setState({displayString: displayString.slice(0,displayString.length-1)});
  }
 };

 handleSqroot = () => {
  let { displayString } = this.state;
  if(displayString!== "Error"){
    this.setState({displayString: Math.sqrt(displayString)});
  }
}

handleClear = () => {
  this.setState({displayString: '0'});
};

handleOperation = (operator) => {
  const { displayString, value, currentoperator, waitingForOperand} = this.state;
  if(displayString!== "Error"){
    if(waitingForOperand===true && currentoperator!=="="){
      this.setState(
        { 
          value: null,
          displayString: "Error",
          waitingForOperand: false,
          currentoperator: null
        }
      );
    }else{
      const nextValue = parseFloat(displayString)
      const operations ={
        "/": (preValue,nextValue) => preValue/nextValue,
        "X": (preValue,nextValue) => preValue*nextValue,
        "%": (preValue,nextValue) => preValue%nextValue,
        "-": (preValue,nextValue) => preValue - nextValue,
        "+": (preValue,nextValue) => preValue + nextValue,
        "=": (preValue,nextValue) => nextValue
      };
      if(value == null){
        this.setState({
          value: nextValue
        })
      }else if(operator){
        const currentValue = value || 0;
        const computedValue = operations[currentoperator](currentValue, nextValue);
        this.setState({
          value: computedValue,
          displayString: String(computedValue)
        })
      };
      this.setState({
        waitingForOperand: true,
        currentoperator: operator
      });
    }
  }
}

  render(){
    return (
      <div className="container">
          {/* <pre>{JSON.stringify(this.state,null ,2)}</pre> */}
          <div className="display">{this.state.displayString}</div>
          <button className="a" onClick={this.handleClear}>AC</button>
          <button className="b" onClick={() => this.holdInput("7")}>7</button>
          <button className="c" onClick={() => this.holdInput("8")}>8</button>
          <button className="d" onClick={() => this.holdInput("9")}>9</button>
          <button className="e" onClick={() => this.handleOperation("%")}>%</button>
          <button className="f" onClick={this.handleSqroot}>squareroot</button>
          <button className="g" onClick={this.handleDel}>DEL</button>
          <button className="h" onClick={() => this.holdInput("4")}>4</button>
          <button className="i" onClick={() => this.holdInput("5")}>5</button>
          <button className="j" onClick={() => this.holdInput("6")}>6</button>
          <button className="k" onClick={() => this.handleOperation("X")}>X</button>
          <button className="l" onClick={() => this.handleOperation("/")}>/</button>
          <button className="m">sin()</button>
          <button className="n" onClick={() => this.holdInput("1")}>1</button>
          <button className="o" onClick={() => this.holdInput("2")}>2</button>
          <button className="p" onClick={() => this.holdInput("3")}>3</button>
          <button className="q" onClick={() => this.handleOperation("-")}>-</button>
          <button className="r">cos()</button>
          <button className="s" onClick={() => this.holdInput("0")}>0</button>
          <button className="t" onClick={() => this.holdInput("00")}>00</button>
          <button className="u" onClick={() => this.holdInput(".")}>.</button>
          <button className="v" onClick={() => this.handleOperation("+")}>+</button>
          <button className="w" onClick={() => this.handleOperation("=")}>=</button>
      </div>
    );
  }
}

export default App;
