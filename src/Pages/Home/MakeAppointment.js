import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Sheared/PrimaryButton";
const MakeAppointment = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`,
            }}
            className="flex justify-center items-center p-16 rounded-md"
        >
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-150px]" src={doctor} alt=""></img>
            </div>
            <div className="flex-1">
                <h3 className="text-xl text-primary ">MakeAppointment</h3>
                <h2 className="text-3xl text-white">Make a appointment</h2>
                <p className="text-white my-7">
                    Doctors help patients to get relief from their pain. Doctors
                    play a very essential role in human life. We can say Doctors
                    are the incarnation of the god. In India, we celebrate
                    National Doctor's Day on July of 1st to thank physicians and
                    doctors for their dedicated services to patients.
                </p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
