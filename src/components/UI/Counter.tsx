import React, { useState } from 'react'

const buttonStyle = { width: 25, height: 25, borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }

interface ICounter {
    callback?: () => void
}

const Counter = ({ callback }: ICounter) => {
    const [count, setCount] = useState(1)
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 5px' }}>
            <button onClick={() => setCount(count => count - 1)} style={buttonStyle}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count => count + 1)} style={buttonStyle}>+</button>
        </div>
    )
}

export default Counter