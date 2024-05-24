import React, { useState } from "react";
import Footer from "../Sheared/Footer";
import AppBanner from "./AppBanner";
import AvailableApp from "./AvailableApp";

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppBanner date={date} setDate={setDate} />
            <AvailableApp date={date} />
            <Footer />
        </div>
    );
};

export default Appointment;
