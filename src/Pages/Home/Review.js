import React from "react";

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl px-12 container mx-auto mb-5">
            <div className="card-body ">
                <p>Patainets review is the most important part of the doctor</p>
            </div>
            <div className="flex">
                <div>
                    <img src={review.img} alt=""></img>
                </div>
                <div>
                    <h4>{review.name}</h4>
                    <h5>{review.location}</h5>
                </div>
            </div>
        </div>
    );
};

export default Review;
