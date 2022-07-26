import React from 'react';
const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];


let x = Math.floor(Math.random() * colors.length);
const color = colors.at(x);
const RandomColor = () => {
    return (
        <div className='col-md-12 col-sm-12 col-xs-12'>
            <hr className="border border-danger border-2 opacity-50"></hr>
            <h3><strong>Random colors</strong></h3>
            <div className="container text-center">
                <div className="row">
                    <div className="col align-self-center" style={{background:color}}>
                        <h1>Refresh the page</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomColor