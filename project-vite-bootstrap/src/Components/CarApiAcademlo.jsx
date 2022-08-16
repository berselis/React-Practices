import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Car from './subcomponets/Car';
import CarForm from './subcomponets/CarForm';

const CarApiAcademlo = () => {
    const URL = 'https://cars-crud.herokuapp.com/cars/';
    const [cars, setCars] = useState([]);
    const [car, setCar] = useState({});



    useEffect(() => {
        axios.get(URL)
            .then(res => setCars(res.data))
            .catch(error => console.log(error))
    }, [car]);

    const setNewCar = (car) => {
        axios.post(URL, car)
            .then(res => setCar(res.data))
            .catch(error => console.log(error));
    }

    const saveNewCar = (e) => {
        e.preventDefault();
        const inputs = e.target.elements;
        const car = {
            brand: inputs.Brand.value,
            model: inputs.Model.value,
            color: inputs.Color.value,
            year: inputs.Year.value,
            price: inputs.Price.value
        };
        setNewCar(car);
        [...inputs].forEach(input => input.value = '');
    }

    const deleteCar = (e) => {
        const urlDel = `${URL}${e.target.id}/`;
        axios.delete(urlDel)
            .then(_ => setCar({}))
            .catch(error => console.log(error))
    }

    return (
        <div className='row'>
            <div className='col-md-12'>
                <hr className="border border-info border-2 opacity-50"></hr>
                <hr className="border border-secondary border-2 opacity-50"></hr>
            </div>

            <div className='col-md-6 col-sm-6 col-xs-12'>
                <CarForm saveNewCar={saveNewCar} />
            </div>

            <div className='col-md-12 col-sm-12 col-xs-12'>
                <hr className="border border-secondary border-2 opacity-50"></hr>
                <h3><strong>List of Cars {cars.length}</strong></h3>
                <div className='row'>
                    {
                        cars?.map(car => (
                            <Car deleteCar={deleteCar} key={car.id} id={car.id} brand={car.brand} color={car.color} model={car.model} year={car.year} price={car.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CarApiAcademlo