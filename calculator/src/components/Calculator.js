import React, { useState } from 'react';
import './style.css';

function Calculator() {

    const [current, setCurrent] = useState("");
    const [prev, setPrev] = useState("");
    const [operations, setOperations] = useState("");

    const valueHandler = (el)=>{
        const value = el.target.getAttribute('data');
        if (value === "." && current.includes(".")) return;
        setCurrent(current + value);
    };

    const operationHandler = (el) => {
        if (current === "") return;
        if (prev !== "") {
          let value = compute();
          setPrev(value);
        }
         else {
          setPrev(current);
        }

        setCurrent("");
        setOperations(el.target.getAttribute("data"));
      };
    
      const resultShow = () => {
        let value = compute();
        setCurrent(value);
        setPrev("");
        setOperations("");
      };

      const compute = () => {
        let result;
        let currentNumber = parseFloat(current);
        let prevNumber = parseFloat(prev);

        switch (operations) {
          case "/":
            result = prevNumber / currentNumber;
            break;
          case "*":
            result = prevNumber * currentNumber;
            break;
          case "+":
            result = prevNumber + currentNumber;
            break;
          case "-":
            result = prevNumber - currentNumber;
            break;
          case "%":
            result = prevNumber / 100 * currentNumber ;
            break;
            default:

          return;
        }
        return result;
      };

    const clearAll = ()=>{
        setCurrent("");
        setPrev("");
        setOperations("");
    };

    return (
        <>
        <div className="container">
            <div className="center">
                <div className="inputField">
                    <div className='voiceIcon'><i className="fal fa-microphone iconStyle"></i></div>
                    <div className='resultDiv'>
                        {/* <input type="text" className='outputShow' value={current} placeholder='0' readOnly/>
                        <input type="text" className='resultShow' readOnly  /> */}
                        <div className='outputShow' >{prev} {operations} {current}</div>
                        {/* <div className='resultShow'></div> */}
                    </div>
                </div>
                <div className="btns">
                    <button className='clearBtn' onClick={clearAll} >C</button>
                    <button className='clearBtn'>+/-</button>
                    <button className='clearBtn' onClick={operationHandler} data = {'%'}>%</button>
                    <button className='otherBtn' onClick={operationHandler} data = {'/'}>/</button>

                    <button className='countBtn' onClick={valueHandler} data = {7}>7</button>
                    <button className='countBtn' onClick={valueHandler} data = {8}>8</button>
                    <button className='countBtn' onClick={valueHandler} data = {9}>9</button>

                    <button className='otherBtn' onClick={operationHandler} data = {'*'}>x</button>

                    <button className='countBtn' onClick={valueHandler} data = {4}>4</button>
                    <button className='countBtn' onClick={valueHandler} data = {5}>5</button>
                    <button className='countBtn' onClick={valueHandler} data = {6}>6</button>

                    <button className='otherBtn' onClick={operationHandler} data = {'-'}>&#8722;</button>

                    <button className='countBtn' onClick={valueHandler} data = {1}>1</button>
                    <button className='countBtn' onClick={valueHandler} data = {2}>2</button>
                    <button className='countBtn' onClick={valueHandler} data = {3}>3</button>

                    <button className='otherBtn' onClick={operationHandler} data = {'+'}>+</button>

                    <button className='zeroBtn' onClick={valueHandler} data = {0}>0</button>
                    <button className='countBtn'onClick={valueHandler} data = {"."}>.</button>

                    <button className='otherBtn' onClick={resultShow}>=</button>
                </div>
            </div>
        </div>   
        </>
    )
}

export default Calculator
