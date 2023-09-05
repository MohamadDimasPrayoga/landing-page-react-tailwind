import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { ServiceData } from "../data/ServicesData";

const Service = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      };

  return (
    <div className="w-full bg-[#CEFAFD] py-5">
      <div className="md:max-w-[1200px] m-auto  max-w-[600px] p-4">
        <h1 className="text-3xl py-4 font-bold">Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquam sequi tenetur id qui explicabo!</p>
        <Slider {...settings}>
        {ServiceData.map(dataservice => <Card dataservice={dataservice}/>)}        
        </Slider>
       
      </div>
    </div>
  );
};

export default Service;
