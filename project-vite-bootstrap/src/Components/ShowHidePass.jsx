import React from 'react';
import { useState } from 'react';

let inputState = 'password';
let hide = 'hide';
let show = '';

const ShowHidePass = () => {

    let [valor, setValor] = useState(inputState);

    const GetState = (e) => {
        if (valor === 'password') {
            inputState = 'text';
            show = 'hide';
            hide = '';

        } else {
            inputState = 'password';
            hide = 'hide';
            show = '';

        }



        setValor(inputState);
    }

    return (
        <div className='col-md-12 col-sm-12 col-xs-12'>
            <hr className="border border-primary border-2 opacity-50"></hr>
            <h3><strong>Show / Hide Password</strong></h3>
            <form className="row g-3">
                <div className="col-md-6 div-password">
                    <label className="visually-hidden">Password</label>
                    <input type={inputState} className="form-control" placeholder={inputState} />
                    <i onClick={GetState} className={`bi bi-eye-fill ${hide}`}></i>
                    <i onClick={GetState} className={`bi bi-eye-slash-fill ${show}`}></i>
                </div>
            </form>
        </div>
    )
}

export default ShowHidePass