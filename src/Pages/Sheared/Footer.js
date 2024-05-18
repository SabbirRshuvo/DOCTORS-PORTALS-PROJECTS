import React from "react";
import footer from "../../assets/images/footer.png";
import { Link } from "react-router-dom";
const Footer = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const currentYear = currentDate.getFullYear();

    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: "cover",
            }}
            className=" p-10 bg-neutral"
        >
            <div className="footer justify-evenly">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
            </div>
            <footer className="footer footer-center p-4 text-base-content mt-5">
                <aside>
                    <p>Today's Date: {formattedDate}</p>
                    <p>Copyright © {currentYear} - All right reserved</p>
                </aside>
            </footer>
        </footer>
    );
};

export default Footer;
