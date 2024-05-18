import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Sheared/PrimaryButton";
const Care = () => {
    return (
        <div className="hero min-h-screen mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} alt="" />
                <div>
                    <h1 className="text-5xl font-bold">
                        Exceptional Dental Care on Your Terms
                    </h1>
                    <p className="py-6">
                        These treatments help restore the appearance, shape and
                        function of your teeth. They include: Composite resins -
                        – chipped, discoloured or oddly shaped teeth can be
                        treated by bonding a tooth-coloured resin filling to
                        improve the appearance of the affected tooth
                    </p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Care;
