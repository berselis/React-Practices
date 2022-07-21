import React from 'react';
import imgLogic from '../assets/Media/logic/exerciselogic1.png';

const Morallogic = () => {
    return (
        <div className='col-md-8 col-sm-6 col-xs-12'>
            <div className="card">
            <img src={imgLogic} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <a className="btn btn-secondary btn-lg"> Expected result {FindSumOfMultiplo()}</a>
                    
                </div>
                
            </div>
        </div>
    )
}

function FindSumOfMultiplo(number = 1000, a = 3, b = 5){
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % a == 0 || i % b == 0) sum += i;
      }
    return sum;
}

export default Morallogic

// btn btn-success