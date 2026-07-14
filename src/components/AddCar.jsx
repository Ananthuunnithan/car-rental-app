import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddCar = () => {
    const [input, changeInput] = useState(
        {
            registration_number: "",
            brand: "",
            model: "",
            vehicle_type: "",
            fuel_type: "",
            transmission: "",
            seating_capacity: "",
            rent_per_day: "",
            city: "",
        }
    )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(input)
        axios.post("https://host-demo-app.onrender.com/api/add-car", input).then(
            (response) => {
                console.log(response.data)
                alert("Car added successfully")
            }
        ).catch(
            (error) => {
                console.log(error.response.data);
                alert(error.response.data.message);
            })
    }
    return (
        <div>
            <NavBar />
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col col-12">

                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Registration Number</label>
                                <input type="text" className="form-control" name="registration_number" placeholder="Registration Number" value={input.registration_number} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Brand</label>
                                <input type="text" className="form-control" name="brand" placeholder="Brand" value={input.brand} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Model</label>
                                <input type="text" className="form-control" name="model" placeholder="Model" value={input.model} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Vehicle Type</label>
                                <select id="" className="form-select" name="vehicle_type" placeholder="select" value={input.vehicle_type} onChange={inputHandler}>
                                    <option value="">Select Vehicle Type</option>
                                    <option value="Hatchback">Hatchback</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="SUV">SUV</option>
                                    <option value="MUV">MUV</option>
                                    <option value="Luxury">Luxury</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Fuel Type</label>
                                <select id="" className="form-select" name="fuel_type" placeholder="select" value={input.fuel_type} onChange={inputHandler}>
                                    <option value="">Select Fuel Type</option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="CNG">CNG</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Transmission</label>
                                <select name="transmission" id="" className="form-select" placeholder="select" value={input.transmission} onChange={inputHandler}>
                                    <option value="">Select Transmission</option>
                                    <option value="Manual">Manual</option>
                                    <option value="Automatic">Automatic</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Seating Capacity</label>
                                <input type="text" className="form-control" placeholder="Seats" name="seating_capacity" value={input.seating_capacity} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Rent per day</label>
                                <input type="text" className="form-control" placeholder="Rent" name="rent_per_day" value={input.rent_per_day} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">City</label>
                                <input type="text" className="form-control" placeholder="City" name="city" value={input.city} onChange={inputHandler} />
                            </div>
                            <div className="col col-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddCar