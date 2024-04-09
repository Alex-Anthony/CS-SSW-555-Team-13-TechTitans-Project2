'use client'
import React from 'react'
import Avatar from './Avatar'
import { useState } from 'react';


interface Outcome {
    data: string;
    prediction: string;
}

interface Props {
    getoutcomes: Outcome[]

}

const NewAvatar = ({ getoutcomes }: Props) => {
    const [counter, setCount] = useState(0)

    return (
        <div>
            <div className="flex flex-cols-2 p-5 justify-items-stretch">
                <div className="flex basis-1/2 justify-center items-stretch">
                    <Avatar title="Initial Data">
                        {getoutcomes[counter].data}
                    </Avatar>
                </div>
                <div className="flex basis-1/2 justify-center">
                    <Avatar title='Model Prediction' side="end">
                        {getoutcomes[counter].prediction}
                    </Avatar>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='btn btn-primary' onClick={() => setCount(counter + 1)}>
                    data item number {counter + 1}
                </div>
            </div>
        </div>
    )
}

export default NewAvatar
