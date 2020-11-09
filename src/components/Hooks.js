import React, { useState } from 'react'

function countInital() {
    console.log('run function')
    return 4
}

function Hooks() {

    const [count, setCount] = useState(4)
    const [theme, setTheme] = useState('blue')

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
        setTheme('red')
    }

    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default Hooks
