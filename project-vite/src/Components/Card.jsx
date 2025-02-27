//COMANDO PARA AUTO COMPLETAR SINTAX rafce

import React from 'react';

const Card = ({objInfo, color}) => {
    const {title, list} = objInfo;
    return (
        <div className={`App ${color}`}>
            <h2><strong>{title}</strong></h2>
            <ul>
                <li>{list[0]}</li>
                <li>{list[1]}</li>
                <li>{list[2]}</li>
                <li>{list[3]}</li>
                <li>{list[4]}</li>
            </ul>
        </div>
    )
}

export default Card