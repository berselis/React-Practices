import React from 'react'

const Car = ({ id, brand, color, model, year, price, deleteCar}) => {
    return (
        <div className='col-md-4 col-sm-4 col-xs-12'>
            <div className="card">
                <i onClick={deleteCar} id={id} className="bi bi-x-circle-fill"></i>
                <div className="card-body">
                    <div className='block'>
                        <h6 className="card-subtitle mb-2 text-muted"><strong>#{id}</strong></h6>
                        <h6 className="card-subtitle mb-2 text-muted">Brand</h6>
                        <h5 className="card-title">{brand}</h5>
                    </div>
                    <div className='block'>
                        <h6 className="card-subtitle mb-2 text-muted">Color</h6>
                        <h5 className="card-title">{color}</h5>
                    </div>
                    <div className='block'>
                        <h6 className="card-subtitle mb-2 text-muted">Model</h6>
                        <h5 className="card-title">{model}</h5>
                    </div>
                    <div className='block'>
                        <h6 className="card-subtitle mb-2 text-muted">Year</h6>
                        <h5 className="card-title">{year}</h5>
                    </div>
                    <div className='block-price'>
                        <h6 className="card-subtitle mb-2 text-muted">Price</h6>
                        <h3 className="card-title"><strong>{price}</strong></h3>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Car