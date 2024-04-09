import React from 'react'
import Papa from 'papaparse'
import { Truculenta } from 'next/font/google';
//import outcomes from '@/model_outcomes.csv'


const GetMessage = () => {

    interface Outcome {
        data: string;
        prediction: string;
    }

    const parseFile = (csvData = 'model_outcomes.csv'): Outcome[] => {
        const parsed = Papa.parse<Outcome>(csvData, {
            header: true,
            dynamicTyping: true
        });
        return parsed.data;
    }

    const myOutcomes: Outcome[] = parseFile();


    return (

        <div className='text'>
            your prediction: {'model_outcomes.csv'.toString()}
        </div>
    )
}

export default GetMessage
