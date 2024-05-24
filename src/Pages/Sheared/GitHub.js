// ContinueWithGitHubButton.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";

const Github = () => {
    const handleGitHubLogin = () => {
        // Implement your GitHub login logic here
        console.log("GitHub login clicked");
    };

    return (
        <button
            onClick={handleGitHubLogin}
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-white bg-gray-800 border border-gray-800 rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
            <FaGithub className="w-5 h-5 mr-2" />
            Continue with GitHub
        </button>
    );
};

export default Github;
