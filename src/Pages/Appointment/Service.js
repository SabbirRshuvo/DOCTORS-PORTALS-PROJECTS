import React from "react";

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body hover:shadow-2xl">
                <h2 className="card-title text-secondary justify-center">
                    {name}
                </h2>
                <p className="font-serif">
                    {slots.length > 0 ? (
                        <span>{slots[0]}</span>
                    ) : (
                        <span className="text-red-400">No slot available</span>
                    )}
                </p>
                <p className="font-sans font-bold">
                    {slots.length} {slots.length > 1 ? "spaces" : "space"}{" "}
                    available
                </p>
                <div className="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;
