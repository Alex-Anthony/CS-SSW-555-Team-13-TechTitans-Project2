'use client'
import React from 'react'
import { useState } from 'react'



interface Outcome {
    data: string;
    prediction: string;
}

interface Props {
    getoutcomes: Outcome[]

}
function getAccuracyNum(data: Outcome[], index: number) {
    let count = 0;
    if (index >= 0) {
        for (let i = 0; i <= index; i++) {
            if (data[i].data.trim() == data[i].prediction) {
                count++
            }

        }
        return (count / (index + 1)) * 100;
    }
    return 0;

}


const newChat = (side = "chat-start", message = "hello", color = "") => {
    let image;
    if (side == 'chat-end') {

        image = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
    }
    else {
        image = "https://images.ctfassets.net/76f8cs5bg9si/517YGXjHeHWm0Qw32qB5Y8/0ea0f60b3dbd87e7bb70eceb1dd42fd9/89.png?w=822&h=580&q=90&fm=webp";
    }
    return (
        <div className={"chat " + side}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={image} />
                </div>
            </div>
            <div className={"chat-bubble " + color}>{message}</div>
        </div>
    )
}

const Chat = ({ getoutcomes }: Props) => {

    const [bubble, setBubble] = useState(<></>);
    const [counter, setCounter] = useState(0);


    const addBubble = () => {
        setCounter((counter<getoutcomes.length)? counter + 1: 0);
        return (

            <div className='flex w-full flex-col'>
                {bubble}

                {newChat("chat-end", getoutcomes[counter].prediction, "chat-bubble-secondary")}

                {(getoutcomes[counter].prediction != getoutcomes[counter].data.trim()) ? newChat('chat-start', '?') : newChat('chat-start', "that's correct")}

                {newChat('chat-start', getoutcomes[counter + 1].data)}

            </div>

        )
    }

    return (
        <div>
            <div className='absolute flex top-0 w-full h-16 z-10 inset-x-0 bg-neutral items-center'>
                <div className='pt-6 w-full px-3 text-center test-neutral-content font-bold'>Current accuracy is: {getAccuracyNum(getoutcomes, counter - 1).toFixed(2)} %</div>
            </div>
            <div className='flex top-0 z-0 mx-1.5 mt-20 mb-10 flex-col'>


                {newChat('chat-start', getoutcomes[0].data)}

                {bubble}
                <button className="absolute btn btn-accent w-full py-5 inset-x-0 bottom-0" onClick={() => setBubble(addBubble)}>Send prediction {counter + 1}</button>

            </div>
        </div>

    )
}

export default Chat
