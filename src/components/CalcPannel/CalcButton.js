import React from 'react'
const CalcButton = props => {
    return <button onClick={() => {props.onClick(props.symbol)}}>{props.symbol}</button>;
}

export default CalcButton