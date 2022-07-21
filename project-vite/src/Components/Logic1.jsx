import React from 'react'

const Logic1 = ({objData}) => {
    const {UrlImg, Result} = objData;
  return (
    <div>
    <img src={UrlImg} className="img-exercise" alt="imagen " />
    <h2><strong>Result is {Result}</strong></h2>
  </div>
  )
}

export default Logic1