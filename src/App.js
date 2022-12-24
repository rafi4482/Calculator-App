import { useState } from 'react';
import './App.css';

function App() {


const [result,setResult]=useState("")

const clickHandler =(event)=>{
  setResult(result.concat(event.target.value))
}

const clearDisplay =()=>{
  setResult("")
}


const calculate =()=>{
  setResult(eval(result).toString())
}



  return (
  
  <div class="container">
        <div class="calculator dark">
           
            <div class="display-screen">
            <input type="text" placeholder="0" id="answer" value={result}/>
            </div>
            <div class="buttons">
                <table>
                    <tr>
                        <td><button class="btn-operator" id="clear" onClick={clearDisplay}>AC</button></td>
                        <td><button class="btn-operator" value="%" id="backspace" onClick={clickHandler}>%</button></td>

                        <td><button class="btn-operator" value="/" onClick={clickHandler}>/</button></td>
                        <td><button class="btn-operator" value="*" onClick={clickHandler}>X</button></td>
                    </tr>
                    <tr>
                    <td><button class="btn-number" value="7" onClick={clickHandler}>7</button></td>
                        <td><button class="btn-number" value="8" id="8" onClick={clickHandler}>8</button></td>
                        <td><button class="btn-number" value="9" id="9" onClick={clickHandler}>9</button></td>
                        <td><button class="btn-operator" value="-" onClick={clickHandler}>-</button></td>
                    </tr>
                    <tr>
                        <td><button class="btn-number" value="4" onClick={clickHandler}>4</button></td>
                        <td><button class="btn-number" value="5" onClick={clickHandler}>5</button></td>
                        <td><button class="btn-number" value="6" onClick={clickHandler}>6</button></td>
                        <td><button class="btn-operator" value="+" onClick={clickHandler}>+</button></td>
                    </tr>
                    <tr>
                        <td><button class="btn-number" value="1" onClick={clickHandler}>1</button></td>
                        <td><button class="btn-number" value="2" onClick={clickHandler}>2</button></td>
                        <td><button class="btn-number" value="3" onClick={clickHandler}>3</button></td>
                        <td rowspan="2"><button class="btn-equal" id="equal" onClick={calculate}>=</button></td>
                    </tr>
                    <tr>
                    <td><button class="btn-number" id=""></button></td>
                    <td><button class="btn-number" value="0" onClick={clickHandler}>0</button></td>

                        <td><button class="btn-operator" id="." value="." onClick={clickHandler}>.</button></td>
            
                    </tr>
                </table>
            </div>
        </div>
        </div>
  );
}

export default App;
