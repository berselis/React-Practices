import React from 'react'
import { useState } from 'react';

const PracticeOne = () => {

    let [count, setCount] = useState(0);

    const handleMinus = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    const handlePlus = () => {
        setCount(count + 1);
    }
    return (
        <div className='col-md-4 col-sm-6 col-xs-12'>
            <div className="card">
                <h1 className={`counter-practice-one ${GetColorCounter()}`}>{count}</h1>
                <div className="card-body">
                    <h5 className="card-title">Contador</h5>
                    <div className='btn-practice-once btn-group btn-group-lg" role="group" aria-label="Large button group"'>
                        <button onClick={handleMinus} type="button" className="btn btn-outline-danger">Minus</button>
                        <button onClick={handleReset} type="button" className="btn btn-outline-dark">Reset</button>
                        <button onClick={handlePlus} type="button" className="btn btn-outline-success">Plus</button>
                    </div>
                </div>
            </div>
        </div>
    )


    function GetColorCounter(){
        if(count < 0) return 'red';
    
        if(count == 0) return 'neutral';
    
        if(count > 0) return 'green';
    }

}

export default PracticeOne;


