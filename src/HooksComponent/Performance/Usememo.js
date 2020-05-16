import React, { useState, useMemo } from 'react'

function Usememo() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        console.log('Rendering odd or even')
        return counterOne % 2 === 0
    }, [counterOne])





    return (
        <div>
            <button onClick={incrementOne}>Count one - {counterOne}</button>
            <span>{isEven ? 'Even' : 'odd'}</span>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
    )
}

export default Usememo
