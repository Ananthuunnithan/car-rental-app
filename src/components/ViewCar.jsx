import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCar = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://host-demo-app.onrender.com/api/cars").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        ()=>{
            fetchData()
        },[]
    )
    return (
        <div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Registration Number</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Model</th>
                        <th scope="col">Fuel Type</th>
                        <th scope="col">Transmission</th>
                        <th scope="col">Seating Capacity</th>
                        <th scope="col">Rent Per day</th>
                        <th scope="col">City</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (value, index) => {
                            return (
                                <tr>
                                    <th scope="row">{value.registration_number}</th>
                                    <td>{value.brand}</td>
                                    <td>{value.model}</td>
                                    <td>{value.vehicle_type}</td>
                                    <td>{value.fuel_type}</td>
                                    <td>{value.transmission}</td>
                                    <td>{value.seating_capacity}</td>
                                    <td>{value.rent_per_day}</td>
                                    <td>{value.city}</td>

                                </tr>
                            )
                        }
                    )}


                </tbody>
            </table>

        </div>
    )
}

export default ViewCar