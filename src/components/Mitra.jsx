import React from "react";
import Mitra1 from "../assets/mitra1.svg"
import Mitra2 from "../assets/mitra2.svg"


const Mitra = () => {
  return (
    <div className="w-full bg-white py-[20px]">
      <div className="md:max-w-[1200px] m-auto max-w-[600px] p-4">
        <h1 className="text-center text-3xl font-bold ">Our Partners</h1>
        <p className="text-center  text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
        
        <div className="max-w-[1200px] flex flex-wrap justify-center gap-4 py-5">
            <img src={Mitra1} className="w-[40%] md:w-[148px]"/>
            <img src= {Mitra2} className="w-[40%] md:w-[148px]"/>
            <img src= {Mitra1} className="w-[40%] md:w-[148px]"/>
            <img src= {Mitra2} className="w-[40%] md:w-[148px]"/>
        </div>
      </div>
    </div>
  );
};

export default Mitra;
