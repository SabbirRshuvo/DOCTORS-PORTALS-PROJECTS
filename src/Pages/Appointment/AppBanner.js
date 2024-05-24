import React from "react";
import chair from "../../assets/images/chair.png";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppBanner = ({ date, setDate }) => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={chair}
                    alt=""
                    className="rounded-lg max-w-2xl shadow-2xl"
                />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppBanner;
