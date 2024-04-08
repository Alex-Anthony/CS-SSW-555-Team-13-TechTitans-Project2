import React from 'react'
import Papa from 'papaparse'

const GetMessage = () => {

    interface Outcome {
        data: string;
        prediction: string;
    }

    const parseFile = (csvData: string): Outcome[] => {
        const parsed = Papa.parse<Outcome>(csvData, {
            header: true,
            dynamicTyping: true
        });
        return parsed.data;
    }


    return (
        <div>

            {parseFile('MachineLearningModel/model_outcomes.csv')[0].data + " " + parseFile('MachineLearningModel/model_outcomes.csv')[0].prediction}
        </div>
    )
}

export default GetMessage
