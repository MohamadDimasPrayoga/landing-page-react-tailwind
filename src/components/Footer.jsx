import React from "react";
import logo from "../assets/react.svg";
import { BsWhatsapp, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import {FaFacebookSquare} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="w-full bg-white py-5">
      <div className="md:max-w-[1200px] m-auto grid md:grid-cols-5 max-[740px]:grid-cols-2 gap-8 max-w-[600px] p-4">
        <div className="col-span-2">
          <img src={logo} alt="Logo" className="h-[35px]" />
          <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
          <h3 className="py-2 text-[#6D7073]">Call : +621 1000 2000</h3>
          <h3 className="py-2 text-[#6D7073]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <h3 className="py-2 text-[#6D7073]">Email : example@gmail.com</h3>

          <div className="flex gap-4 py-4">
            <div className="p-4 bg-[#CEFAFD] rounded-xl">
              <BsWhatsapp size={20} style={{ color: "#042267" }} />
            </div>

            <div className="p-4 bg-[#CEFAFD] rounded-xl">
              <FaFacebookSquare size={25} style={{ color: "#042267" }} />
            </div>

            <div className="p-4 bg-[#CEFAFD] rounded-xl">
              <BsInstagram size={25} style={{ color: "#042267" }} />
            </div>

            <div className="p-4 bg-[#CEFAFD] rounded-xl">
              <BsTwitter size={25} style={{ color: "#042267" }} />
            </div>

            <div className="p-4 bg-[#CEFAFD] rounded-xl">
              <BsLinkedin size={25} style={{ color: "#042267" }} />
            </div>
          </div>
        </div>

        <div>
            <h3 className="text-2xl font-bold">Explore</h3>
            <ul className="py-6 text-[#6D7073]">
                <li className="py-2">Home</li>
                <li className="py-2">Services</li>
                <li className="py-2">About</li>
                <li className="py-2">Feedback</li>
                <li className="py-2">Contact</li>
            </ul>
        </div>

        <div>
            <h3 className="text-2xl font-bold">Category</h3>
            <ul className="py-6 text-[#6D7073]">
                <li className="py-2">Front-End</li>
                <li className="py-2">Data Analyst</li>
                <li className="py-2">Backend</li>
                <li className="py-2">Mobile Dev</li>
                <li className="py-2">Ui/Ux</li>
                <li className="py-2">Marketing</li>
                <li className="py-2">Sales Markrting</li>
                <li className="py-2">Grapich Design</li>
                <li className="py-2">Copywriting</li>
            </ul>
        </div>

        <div className="max-[740px]:col-span-2">
        <h3 className="text-2xl font-bold">Subscribe</h3>
        <h3 className="py-6 text-[#6D7073]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <form className="py-4">
            <input type="text" placeholder="Email Here" className="bg-[#F2F3F4] w-full rounded p-4"/>
            <button className='max-[740px]:w-full my-4 py-5 px-3 rounded-md bg-[#0F307B] text-white font-medium'>Subscribe Now</button>
        </form>
        </div>

      </div>
    </div>
  );
};

export default Footer;
