// ContinueWithFacebookButton.jsx
import React from "react";
import { FaFacebook } from "react-icons/fa";

const Facebook = () => {
    const handleFacebookLogin = () => {
        // Implement your Facebook login logic here
        console.log("Facebook login clicked");
    };

    return (
        <button
            onClick={handleFacebookLogin}
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-white bg-blue-600 border border-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            <FaFacebook className="w-5 h-5 mr-2" />
            Continue with Facebook
        </button>
    );
};

export default Facebook;
