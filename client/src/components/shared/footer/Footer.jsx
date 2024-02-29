import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-900 text-white">
      <div className="md:grid md:grid-cols-4 gap-6 py-8 w-11/12 mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Link
            to="/"
            className="text-xl border-2 tracking-wide md:tracking-widest border-white"
          >
            <span className="bg-white text-black font-bold w-full h-full px-2 md:px-3 pb-0.5">
              D&H
            </span>
            <span className="text-white px-2 md:px-3 py-1 md:py-2">
              Fashions
            </span>
          </Link>
        </div>
        <div className="flex justify-around col-span-2">
          <div>
            <h2 className="text-xl md:text-2xl">Some important links </h2>
            <ul className="my-2 text-sm">
              <Link to="/about">
                <li className="footer-link">About Us</li>
              </Link>
              <Link to="/contact">
                <li className="footer-link">Contact Us</li>
              </Link>
              <Link to="/faqs">
                <li className="footer-link">FAQs</li>
              </Link>
              <Link to="/disclaimer">
                <li className="footer-link">Privacy Policy</li>
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl">Also visit on </h2>
            <ul className="my-2 text-sm">
              <Link to="/partnership">
                <li className="footer-link">Partnership</li>
              </Link>
              <Link to="/affiliate">
                <li className="footer-link">Affiliate Program</li>
              </Link>
              <Link to="/storeLocator">
                <li className="footer-link">Store Locator</li>
              </Link>
              <Link to="/legalInfo">
                <li className="footer-link">Legal Information</li>
              </Link>
              <Link to="/others">
                <li className="footer-link">Others</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="my-6 md:my-0">
          <h2 className="text-xl md:text-2xl text-center md:text-start">
            Follow our socials
          </h2>
          <div className="flex justify-center md:justify-start items-center gap-4 my-2 md:my-8">
            <Link
              to="https://www.facebook.com/dnhfashions"
              rel="noreferrer"
              target={"_blank"}
            >
              <img
                className="w-8 cursor-pointer grayscale hover:grayscale-0"
                src="https://i.ibb.co/Jypsrh5/facebook-icon.png"
                alt="facebook logo"
                title="Facebook"
              />
            </Link>

            <Link
              to="https://www.linkedin.com/company/awr-developments-bd-ltd./about/"
              rel="noreferrer"
              target={"_blank"}
            >
              <img
                className="w-10 cursor-pointer grayscale hover:grayscale-0"
                src="https://i.ibb.co/Q6TTFRr/linkedIn.png"
                alt="linkedin logo"
                title="LinkedIn"
              />
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-4/5 mx-auto" />
      <p className="text-center text-sm py-4">
        <span className="text-amber-400">&#169; </span>
        {year} dnh fashions ltd. all rights reserved.
      </p>
    </div>
  );
};

export default Footer;
