import React from "react";
import fluride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Flouride Treatment",
            description: "Flour",
            img: fluride,
        },
        {
            _id: 2,
            name: "Flouride Treatment",
            description: "Flour",
            img: cavity,
        },
        {
            _id: 3,
            name: "Flouride Treatment",
            description: "Flour",
            img: whitening,
        },
    ];
    return (
        <div className="my-28">
            <div className="text-center">
                <h3 className=" text-xl font-bold uppercase">Our Services</h3>
                <h2 className="text-4xl">Services we Provide</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-2">
                {services.map((service) => (
                    <Service key={service.id} service={service}>
                        {" "}
                    </Service>
                ))}
            </div>
        </div>
    );
};

export default Services;
