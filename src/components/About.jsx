import React from "react";
import LogoHero from "../assets/heroabout.svg";
import { AiFillBank } from "react-icons/ai";
import {BiUser} from "react-icons/bi"
import {FiUserPlus} from "react-icons/fi"
import{BsAward} from "react-icons/bs"

const About = () => {
  return (
    <div className="w-full bg-white py-5">
      <div className="md:max-w-[1200px] m-auto grid md:grid-cols-2 max-w-[600px] p-4">
        <div className="flex flex-col justify-start">
          <h1 className="md:leading-[60px] py-2 text-3xl font-bold">
            About Us
          </h1>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio laudantium, delectus ab numquam ipsam nobis animi ullam tempora fuga itaque blanditiis porro natus. Molestiae maxime quo asperiores voluptatibus eum quae est numquam consequatur porro.
          </p>

          <div className="grid grid-cols-2">
            <div className="py-6 flex">
              <div className="p-4 bg-[#CEFAFD] rounded-xl">
                <AiFillBank size={30} style={{color: "#042267"}}/>
              </div>

              <div className="px-3">
                <h1 className="text-2xl font-semibold">10</h1>
                <p className="text-[#6D737A]">Company</p>
              </div>
            </div>

            <div className="py-6 flex">
              <div className="p-4 bg-[#CEFAFD] rounded-xl">
                <BiUser size={30} style={{color: "#042267"}}/>
              </div>

              <div className="px-3">
                <h1 className="text-2xl font-semibold">50.000+</h1>
                <p className="text-[#6D737A]">Users</p>
              </div>
            </div>

            <div className="py-6 flex">
              <div className="p-4 bg-[#CEFAFD] rounded-xl">
                <FiUserPlus size={30} style={{color: "#042267"}}/>
              </div>

              <div className="px-3">
                <h1 className="text-2xl font-semibold">25.500+</h1>
                <p className="text-[#6D737A]">Clients</p>
              </div>
            </div>

            <div className="py-6 flex">
              <div className="p-4 bg-[#CEFAFD] rounded-xl">
                <BsAward size={30} style={{color: "#042267"}}/>
              </div>

              <div className="px-3">
                <h1 className="text-2xl font-semibold">15</h1>
                <p className="text-[#6D737A]">Award</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={LogoHero}
          className="w-[650px] h-[400px] md:order-last order-first"
        />
      </div>
    </div>
  );
};

export default About;
