import React from 'react';
import imgLogic from '../assets/Media/logic/excerciselogic2.png';

let array = [1, 2], current = 0, sumEven = 2, evenValues = [2];

const GetFibonacciSum = (number) => {
    while (current < number) {
        current = array.at(-1) + array.at(-2);
        array.push(current);
        if (current % 2 === 0) {
            evenValues.push(current);
            sumEven += current;
        }
    }
    return sumEven;
}

const FibonacciEvenValue = () => {
    return (
        <div className='col-md-12 col-sm-12 col-xs-12'>
            <hr className="border border-secondary border-2 opacity-50"></hr>
            <h3><strong>Fibonacci Sum Even Values</strong> <small>Expected result: 4.613.732</small></h3>

            <div className='row'>
                <div className='col-md-7'>
                    <img src={imgLogic} className='img-fluid rounded img-thumbnail' />
                </div>
                <div className='col-md-5'>
                    <div className='bd-callout bd-callout-info'>
                        <p className='text-break'>
                            <strong>Fibonacci sequence</strong><br />
                            {array.toString()}
                        </p>
                        <p className='text-break'>
                            <strong>Even values</strong><br />
                            {evenValues.toString()}
                        </p>
                        <h3><strong>Result</strong></h3>
                        <h4>{GetFibonacciSum(4000000).toString()}</h4>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default FibonacciEvenValue