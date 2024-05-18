import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import Treatment from "./Treatment";
import MakeAppointment from "./MakeAppointment";
import Testimonials from "./Testimonials";
import Connected from "./Connected";
import Footer from "./Footer";
const Home = () => {
    return (
        <div className="px-12 bg-base-200">
            <Banner />
            <Info />
            <Services />
            <Treatment />
            <MakeAppointment />
            <Testimonials />
            <Connected />
            <Footer />
        </div>
    );
};

export default Home;
