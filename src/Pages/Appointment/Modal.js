import React from "react";
import { format } from "date-fns";

const Modal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    };

    return (
        <div>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label
                        for="booking-modal"
                        className="btn btn-sm btn-cirle absolute right-2 top-2"
                    >
                        X
                    </label>
                    <h3 className="font-bold text-lg text-secondary">
                        Booking for : {name}
                    </h3>

                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3 justify-items-center mt-2 p-7"
                    >
                        <input
                            disabled
                            value={format(date, "PP")}
                            type="text"
                            class="input input-bordered w-full max-w-xs"
                        />
                        <select
                            name="slot"
                            class="select select-bordered w-full max-w-xs"
                        >
                            {slots.map((slot) => (
                                <option value={slot}>{slot}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            placeholder="Type here"
                            class="btn btn-secondary w-full max-w-xs"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
