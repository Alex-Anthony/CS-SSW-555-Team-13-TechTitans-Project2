import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Chat2 from '../components/Chat2'
import { myOutcomes } from '../components/GetMessage'

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Title title="Chat v2"></Title>
            <div className="flex justify-around">
                <div className='flex w-3/6 place-items-center'>
                    <div className="card w-full h-fit bg-base-200">
                        <div className="card-body m-5 items-center">
                            <h2 className="card-title text-center font-bold text-3xl">Third Iteration</h2>
                            <p className='text-xl'>Our final rendition introduces enhancements to both the
                                response system and UI for improved readability. The chat system now delivers
                                messages, indicating the model&apos;s guess. A red bubble signifies an incorrect
                                guess, accompanied by an incoherent reply. If the model&apos;s guess is correct,
                                it responds with meaningful replies that correspond to the input provided.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative mockup-phone z-0">
                        <div className="camera"></div>
                        <div className="display relative">
                            <div className="artboard phone-1 overflow-y-scroll bg-base-100 place-items-start">
                                <Chat2 getoutcomes={myOutcomes}></Chat2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
