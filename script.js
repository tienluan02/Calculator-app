function Calculator () {
  const [calc, setCal] = React.useState({
  current: "0",
  total: "",
  isInitial: true,
  preOp: ""
  });
  
  function handleNumber(value) {
    let newValue = value;
    if (!calc.isInitial){
    newValue = calc.current + value;
    }
    
    setCal({current: newValue, total: calc.total, isInitial: false, preOp: calc.preOp}); 
}

function handleOperator(value) {
  const total = doCalculation();
  
  setCal({current: total.toString(), total: total.toString(), isInitial: true, preOp: value});
}
  
function doCalculation() {
  let total = parseInt(calc.total);
  
  switch(calc.preOp) {
    case "+":
      total += parseInt(calc.current);
      break;
    case "-":
      total -= parseInt(calc.current);
      break;
    case "x":
      total *= parseInt(calc.current);
      break;
    case "/":
      total /= parseInt(calc.current);
      break;
    default:
      total = parseInt(calc.current);
  }
  return total;
}
  
  function handleClear() {
    setCal({
  current: "0",
  total: "",
  isInitial: true,
  preOp: ""
  });
  }
  
  function renderDisplay() {
  return calc.current;
}

  return ( 
   <div className="calculator">
    <div className="display">{renderDisplay()}</div>
    <CalButton value="7" onClick={handleNumber}/>
    <CalButton value="8" onClick={handleNumber}/>
    <CalButton value="9" onClick={handleNumber}/>
    <CalButton className="operator" value="x" onClick={handleOperator}/>
      
    <CalButton value="4" onClick={handleNumber}/>
    <CalButton value="5" onClick={handleNumber}/>
    <CalButton value="6" onClick={handleNumber}/>
    <CalButton className="operator" value="-" onClick={handleOperator}/>
      
    <CalButton value="1" onClick={handleNumber}/>
    <CalButton value="2" onClick={handleNumber}/>
    <CalButton value="3" onClick={handleNumber}/>
    <CalButton className="operator" value="+" onClick={handleOperator}/>
      
    <CalButton value="C" onClick={handleClear}/>
    <CalButton value="0" onClick={handleNumber}/>
    <CalButton value="=" onClick={handleOperator}/>
    <CalButton className="operator" value="/" onClick={handleOperator}/>
   </div>
    )
}



function CalButton (props) {
  return (
    <button className={props.className} onClick={() =>props.onClick(props.value)}>{props.value}</button>
  )
}
ReactDOM.render(<div className="app-container"><Calculator/></div>, document.getElementById("root"));