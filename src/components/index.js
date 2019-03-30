import React, {useState} from 'react'
import CalcButton from './CalcPannel/CalcButton'
import CalcInput from './CalcPannel/CalcInput'
import EqualButton from './CalcPannel/EqualButton'
const CalcPanel = () => {
    const symbolList = [1,2,3,'C',4,5,6,'+',7,8,9,'-','*','/']
    const [calculatorText, setCalculatorText] = useState('')
    const onButtonClicked = (buttonSymbol) => {
        setCalculatorText(calculatorText + String(buttonSymbol))
    }

    const devolverResultado = () =>  {
        setCalculatorText(String(eval(calculatorText)))    
    }

    return (
        <div className="container">
            <CalcInput calculatorText = {calculatorText}/>
            <div className="grid">
                {symbolList.map(symbol => (
                    <CalcButton key = {symbol} symbol={symbol} onClick={onButtonClicked}/>
                ))}
                <EqualButton onClick={devolverResultado}/>
            </div>
        </div>
    );
}

export default CalcPanel