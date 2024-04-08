'use client'
import React from 'react'
import { useState } from 'react'

const NewDataButton = () => {
    const [counter, setCount] = useState(0)
    return (
        <div className='btn btn-primary' onClick={() => setCount(counter + 1)}>
            next {counter}
        </div>
    )
}

export default NewDataButton
