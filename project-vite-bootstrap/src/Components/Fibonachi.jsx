import React from 'react';


const GetFibonacci = (limint) => {
    let array = new Array();
    let index = 0;
    let current = 0;

    while (index <= limint) {
        array.push(current);
        if (array.length < 2) array.push(current += 1);
        current = array.at(-1);
        current += array.at(-2);
        if (current > limint) index = limint + 1;
        index++;
    }
    return array;
}



const Fibonachi = () => {
    return (
        <div className='col-md-12 col-sm-12 col-xs-12'>
            <hr className="border border-info border-2 opacity-50"></hr>
            <h3><strong>Fibonacci</strong></h3>
            <h4><strong>test</strong></h4>
            <ul>
                <li><code>console.log(fibonacci(10))</code></li>
                <li><code>console.log(fibonacci(21))</code></li>
                <li><code>console.log(fibonacci(2))</code></li>
            </ul>


            <h5>Result</h5>
            <ul className="list">
                <li>{GetFibonacci(10).toString()}</li>
                <li>{GetFibonacci(21).toString()}</li>
                <li>{GetFibonacci(2).toString()}</li>
            </ul>




        </div>
    )
}

export default Fibonachi