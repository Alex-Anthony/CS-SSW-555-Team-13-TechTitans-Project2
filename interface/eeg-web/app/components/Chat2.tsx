'use client'
import React from 'react'
import { useState } from 'react'
import aiavatar from '@/public/image.png'



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

function messageGenerator(message: string) {
    if (message == 'hello') {
        return "hi there";
    }
    if (message == 'stop') {
        return "i don't want to stop";
    }
    if (message == 'help me') {
        return "ok i'll help";
    }
    if (message == 'thank you') {
        return "your most welcome";
    }
    if (message == 'yes') {
        return "no";
    }
    return 'error';

}



const newChat = (self = true, message = "hello", color = "") => {
    let side = 'chat-start';
    let image;
    if (self) {
        side = 'chat-end'
        image = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
    }
    else {
        side = 'chat-start';
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
        setCounter(counter + 1);
        return (

            <div className='flex w-full flex-col'>
                {bubble}

                {newChat(true, getoutcomes[counter].prediction, "chat-bubble-secondary")}

                {(getoutcomes[counter].prediction != getoutcomes[counter].data.trim()) ? newChat(false, '?$#^@$%', 'chat-bubble-error') : newChat(false, messageGenerator(getoutcomes[counter].prediction))}



            </div>

        )
    }

    return (
        <div>
            <div className='absolute flex top-0 rounded-t-3xl h-16 z-10 inset-x-0 bg-neutral items-center'>
                <div className='pt-6 w-full px-3 text-center text-neutral-content font-bold'>Current accuracy is: {getAccuracyNum(getoutcomes, (counter - 1)).toFixed(2)} %</div>
            </div>
            <div className='flex top-0 z-0 mx-1.5 mt-20 mb-24 flex-col'>
                {newChat(false, "hello there let's have a chat try sending me a message")}
                {bubble}
                <div className='absolute py-2 rounded-b-3xl inset-x-0 bottom-0 bg-base-100'>
                    <div className=' flex m-3 px-3 py-1 rounded-3xl border-2 border-base-content place-items-center justify-between'>
                        <div className='p-2 px-3 font-bold'>Send message {counter + 1}</div>
                        <button className=" btn btn-accent btn-circle btn-sm" onClick={() => setBubble(addBubble)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Chat
