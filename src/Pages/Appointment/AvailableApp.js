import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";
import Modal from "./Modal";

const AvailableApp = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const [services, setService] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);
    return (
        <div>
            <h4 className="p-7 text-xl text-secondary">
                {" "}
                Available Appointment on {format(date, "PP")}:
            </h4>
            <div className="grid sm:grid-cols-3 gap-4 ">
                {services.map((service) => (
                    <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>
                ))}
            </div>
            {treatment && (
                <Modal
                    date={date}
                    setTreatment={setTreatment}
                    treatment={treatment}
                />
            )}
        </div>
    );
};

export default AvailableApp;
