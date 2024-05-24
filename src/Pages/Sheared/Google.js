import React from "react";
import { FcGoogle } from "react-icons/fc";

const Google = () => {
    const handleGoogleLogin = () => {
        // Implement your Google login logic here
        console.log("Google login clicked");
    };

    return (
        <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            <FcGoogle className="w-5 h-5 mr-2" />
            Continue with Google
        </button>
    );
};

export default Google;
