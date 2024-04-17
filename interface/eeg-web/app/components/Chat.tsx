'use client'
import { Html } from 'next/document'
import React from 'react'
import { useState } from 'react'


interface Outcome {
    data: string;
    prediction: string;
}

interface Props {
    getoutcomes: Outcome[]

}

const newChat = (side = "start", message = "hello", color = "") => {
    return (
        <div className={"chat chat-" + side}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className={"chat-bubble chat-bubble-" + color}>{message}</div>
        </div>
    )
}

const Chat = ({ getoutcomes }: Props) => {

    const [bubble, setBubble] = useState(<></>);
    const [counter, setCounter] = useState(0);


    const addBubble = () => {
        setCounter(counter + 1);
        return (

            <div className='flex w-full flex-col'>
                {bubble}

                {newChat("end", getoutcomes[counter].prediction, "secondary")}

                {(getoutcomes[counter].prediction != getoutcomes[counter].data.trim()) ? newChat('start', '?') : newChat('start', "that's noice")}

                {newChat('start', getoutcomes[counter + 1].data)}

            </div>

        )
    }

    return (
        <div className='flex top-0 mx-1.5 mt-20 mb-10 flex-col'>


            {newChat('start', getoutcomes[0].data)}

            {bubble}

            <button className="absolute btn btn-accent w-full py-5 inset-x-0 bottom-0" onClick={() => setBubble(addBubble)}>Send prediction {counter + 1}</button>

        </div>

    )
}

export default Chat
