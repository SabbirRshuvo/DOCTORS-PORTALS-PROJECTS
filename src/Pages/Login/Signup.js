import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
    useSignInWithFacebook,
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Google from "../Sheared/Google";
import Facebook from "../Sheared/Facebook";
import Github from "../Sheared/GitHub";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    //
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    // Function to handle form submission
    const handleSubmit = (e) => {
        console.log(formData);
        e.preventDefault();
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userInfo) => {
                if (userInfo) {
                    setMessage("Account created successfully");
                    setTimeout(() => {
                        navigate("/");
                    }, 2000);
                }
            })
            .catch((error) => setMessage(error.message));
    };
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        console.log(user);
        navigate("/");
    }
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">SignUp</h2>
                    {message && <p>{message}</p>}
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-6"
                        action="#"
                        method="POST"
                    >
                        <div className="rounded-md shadow-sm -space-y-px">
                            {/* Username field */}
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Username
                                </label>
                                <input
                                    onChange={handleInputChange}
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-3"
                                    placeholder="Username"
                                />
                            </div>
                            {/* Email field */}
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    onChange={handleInputChange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-3"
                                    placeholder="Email address"
                                />
                            </div>
                            {/* Password field */}
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    onChange={handleInputChange}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div>
                            {/* Submit button */}
                            <button class="btn w-full">Sign Up</button>
                        </div>
                    </form>
                    <p>
                        Already Have an Account{" "}
                        <Link
                            className="text-green-500 font-serif"
                            to="/login "
                        >
                            Login
                        </Link>{" "}
                    </p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}>
                        <Google />
                    </button>
                    <button onClick={() => signInWithFacebook()}>
                        <Facebook />
                    </button>
                    <button onClick={() => signInWithGithub()}>
                        <Github />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
