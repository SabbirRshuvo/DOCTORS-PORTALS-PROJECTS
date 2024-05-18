import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "WInson Herry",
            review: "",
            location: "Carlifornia",
            img: people1,
        },
        {
            _id: 2,
            name: "Warry Hends",
            review: "",
            location: "Carlifornia",
            img: people2,
        },
        {
            _id: 3,
            name: "David king",
            review: "",
            location: "Carlifornia",
            img: people3,
        },
    ];
    return (
        <section>
            <div className="flex justify-between  mt-5">
                <div>
                    <h4 className="text-xl text-primary font-bold">
                        Testimonials
                    </h4>
                    <h2 className="text-3xl">What our Patients says</h2>
                </div>
                <div>
                    <img className="w-24 lg:w-48" src={quote} alt=""></img>
                </div>
            </div>
            <div className=" gap-5 justify-between grid lg:grid-cols-3 sm:grid-cols-1">
                {reviews.map((review) => (
                    <Review key={review.id} review={review}></Review>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
