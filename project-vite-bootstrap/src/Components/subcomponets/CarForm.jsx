import React from 'react'

const CarForm = ({saveNewCar}) => {
    return (
        <form onSubmit={saveNewCar} className='row'>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <label className="form-label"><strong>Brand</strong></label>
                <input id='Brand' type="text" className="form-control" required/>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <label className="form-label"><strong>Color</strong></label>
                <input id='Color' type="text" className="form-control" required/>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <label className="form-label"><strong>Model</strong></label>
                <input id='Model' type="text" className="form-control" required/>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <label className="form-label"><strong>Year</strong></label>
                <input id='Year' type="number" className="form-control" required/>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <label className="form-label"><strong>Price</strong></label>
                <input id='Price' type="number" className="form-control" required/>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end m-30">
                <button type="submit" className="btn btn-outline-primary" style={{ marginTop: '30px' }}>Save new car</button>
            </div>
        </form>
    )
}

export default CarForm