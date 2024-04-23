import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCounter] = useState(0)
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [symbol, setSymbol] = useState('+')

  const getFirstNum = (event) => {
    setFirstNum(event.target.textContent)
  }

  const getSecondNum = (event) => {
    setSecondNum(event.target.textContent)
  }

  const updateSymbol = (event) => {
    setSymbol(event.target.textContent)
  }

  const clearFirstNum = () => {
    setFirstNum(0)
    setCounter(0)
  }
  const clearSecondNum = () => {
    setSecondNum(0)
    setCounter(0)
  }

  const calculateTotal = () => {
    if(symbol === '+') {
      setCounter(Number(firstNum) + Number(secondNum))
    }
    else if(symbol === '-') {
      setCounter(firstNum - secondNum)
    }
    else if(symbol === '*') {
      setCounter(firstNum * secondNum)
    }
    else if(symbol === '÷') {
      setCounter(firstNum / secondNum)
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p> {firstNum} </p>
        <div className="numbers">
          <button onClick={getFirstNum}>1</button>
          <button onClick={getFirstNum}>2</button>
          <button onClick={getFirstNum}>3</button>
          <button onClick={getFirstNum}>4</button>
          <button onClick={getFirstNum}>5</button>
          <button onClick={getFirstNum}>6</button>
          <button onClick={getFirstNum}>7</button>
          <button onClick={getFirstNum}>8</button>
          <button onClick={getFirstNum}>9</button>
          <button onClick={getFirstNum}>0</button>
          <button onClick={clearFirstNum}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p> {symbol} </p>
        <div className="numbers">
          <button onClick={updateSymbol}>+</button>
          <button onClick={updateSymbol}>-</button>
          <button onClick={updateSymbol}>*</button>
          <button onClick={updateSymbol}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p> {secondNum} </p>
        <div className="numbers">
          <button onClick={getSecondNum}>1</button>
          <button onClick={getSecondNum}>2</button>
          <button onClick={getSecondNum}>3</button>
          <button onClick={getSecondNum}>4</button>
          <button onClick={getSecondNum}>5</button>
          <button onClick={getSecondNum}>6</button>
          <button onClick={getSecondNum}>7</button>
          <button onClick={getSecondNum}>8</button>
          <button onClick={getSecondNum}>9</button>
          <button onClick={getSecondNum}>0</button>
          <button onClick={clearSecondNum}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p> {count} </p>
        <div>
          <button onClick={calculateTotal}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
