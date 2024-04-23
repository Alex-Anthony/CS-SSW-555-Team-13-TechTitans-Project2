import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Chat from '../components/Chat'
import { myOutcomes } from '../components/GetMessage'

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Title title="Chat v1"></Title>
            <div className="flex justify-around">
                <div className='flex w-3/6 place-items-center'>
                    <div className="card w-full h-fit bg-base-200">
                        <div className="card-body m-5 items-center">
                            <h2 className="card-title text-center font-bold text-3xl">Second Iteration</h2>
                            <p className='text-xl'>In our second rendition, delivered during sprint three,
                                we integrated the data output into a chat bot format. This version aims to
                                communicate accurately based on the given data input. It provides responses
                                corresponding to each guess option from the EEG data. The algorithm&apos;s effectiveness
                                is determined by the coherence of its responses—if the reply aligns logically
                                with the input, the algorithm is working as intended.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="relative mockup-phone z-0">
                        <div className="camera"></div>
                        <div className="display relative">
                            <div className="artboard phone-1 overflow-y-scroll bg-base-100 place-items-start">
                                <Chat getoutcomes={myOutcomes}></Chat>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
