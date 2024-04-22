
import React from 'react'
import Papa from 'papaparse'
import fs from 'fs'
import path from 'path'


interface Outcome {
    data: string;
    prediction: string;
}

const csvFilePath = path.resolve(__dirname, '/workspaces/CS-SSW-555-Team-13-TechTitans-Project2/MachineLearningModel/model_outcomes.csv');
const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

const parseFile = (csvData = fileContent): Outcome[] => {
    const parsed = Papa.parse<Outcome>(csvData, {
        delimiter: ',',
        newline: '\r',
        skipEmptyLines: true,
        header: true,
        dynamicTyping: true,
        //complete: console.log("done")
    });
    return parsed.data;
}

const myOutcomes: Outcome[] = parseFile();

const correct: Outcome[] = myOutcomes.filter(filtercorrect);

function filtercorrect(value: Outcome, index: number, array: Outcome[]) {
    return value.prediction == value.data;
}



function getAccuracy(data: Outcome[]) {
    let count = 0;
    data.forEach(e => {
        if (e.data.trim() == e.prediction) {
            count++;
        }
    });
    return (count / data.length) * 100;
}

function getAccuracyNum(data: Outcome[], index: number) {
    let count = 0;
    for (let i = 0; i <= index; i++) {
        if (data[i].data == data[i].prediction) {
            count++
        }

    }
    return (count / (index + 1)) * 100;
}

const accuracy = getAccuracy(myOutcomes);

export { myOutcomes, accuracy }




