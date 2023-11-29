import React from 'react'

const buttonStyle = { width: 25, height: 25, borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }

interface ICounter {
    callbackDecriment?: () => void,
    callbackIncrement?: () => void,
    count: number
}

const Counter = ({ callbackDecriment, callbackIncrement, count }: ICounter) => {
    return (
        <div style={{ display: 'flex', gap: '10px', padding: '0 5px' }}>
            <button onClick={() => callbackDecriment && callbackDecriment()} style={buttonStyle}>-</button>
            <p>{count}</p>
            <button onClick={() => callbackIncrement && callbackIncrement()} style={buttonStyle}>+</button>
        </div>
    )
}

export default Counter