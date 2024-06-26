import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

export const Navbar = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const menuItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/appointment">Appointment</Link>
            </li>
            <li>
                <Link to="/review">Review</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                {user ? (
                    <button
                        onClick={async () => {
                            const success = await signOut();
                            if (success) {
                                alert("You are sign out");
                            }
                        }}
                    >
                        Sign out
                    </button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </li>
        </>
    );
    return (
        <div class="navbar bg-base-100  flex justify-evenly">
            <div class="navbar-start">
                <div class="dropdown">
                    <div
                        tabindex="0"
                        role="button"
                        class="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost text-xl">
                    Doctors Portals
                </Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">{menuItems}</ul>
            </div>
        </div>
    );
};
