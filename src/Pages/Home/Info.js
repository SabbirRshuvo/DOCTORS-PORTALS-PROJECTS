import React from "react";
import InfoCards from "./InfoCards";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Info = () => {
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
            <InfoCards
                bgClass="bg-gradient-to-r from-secondary to-primary "
                cardTitle="Opening Hours"
                img={clock}
            />
            <InfoCards
                bgClass="bg-neutral"
                cardTitle="Our Location"
                img={marker}
            />
            <InfoCards
                bgClass="bg-gradient-to-r from-secondary to-primary "
                cardTitle="Contact Us"
                img={phone}
            />
        </div>
    );
};

export default Info;
