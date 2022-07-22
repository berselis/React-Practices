import React from 'react';
import { useState } from 'react';

let btn = 'btn-danger';
let light = 'OFF';

const LightButtom = () => {
    let [valor, setValor] = useState(false);

    const setToggle = () => {
        

        if (valor == false) {
            btn = 'btn-success';
            light = 'ON';
        } else {
            btn = 'btn-danger';
            light = 'OFF';
        }

        setValor(!valor);

    }
    return (
        <div className='col-md-3 col-sm-12 col-xs-12'>
            <div className="card">
            <div className="card-header div-circle">
                <div className={`light-circle ${light}`}></div>
            </div>
            <div className="card-body">
                <div className="btn-group btn-group-lg d-grid" role="group" aria-label="Basic mixed styles example">
                    <button onClick={setToggle} type="button" className={`btn ${btn}`}>{light}</button>
                </div>
            </div>
        </div>
        </div >
    )
}

export default LightButtom