import React from 'react'

const HomePage = () => {
    return (
        <div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 text-center">

                        <h1 className="text-primary">
                            🚗 Car Rental Management System
                        </h1>

                        <p className="lead">
                            Welcome to the Car Rental Management System.
                        </p>

                    </div>
                </div>

                <div className="row">

                    {/* Add Cars Card */}
                    <div className="col-12 col-sm-6 mb-3">
                        <div className="card shadow p-4 text-center">
                            <h3>Add Cars</h3>

                            <button
                                type="button"
                                className="btn btn-outline-primary">
                                Add Car
                            </button>
                        </div>
                    </div>

                    {/* View Cars Card */}
                    <div className="col-12 col-sm-6 mb-3">
                        <div className="card shadow p-4 text-center">
                            <h3>View Cars</h3>

                            <button
                                type="button"
                                className="btn btn-success">
                                View Cars
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default HomePage