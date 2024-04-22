import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Chat2 from '../components/Chat2'
import { myOutcomes } from '../components/GetMessage'

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Title title="New chat"></Title>
            <div className="p-5">
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
