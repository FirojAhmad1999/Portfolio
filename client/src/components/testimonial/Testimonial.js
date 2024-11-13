import React, { useState } from 'react';
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title';
import { testimonialOne, testimonialTwo, quote } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => setDotActive(next),
    appendDots: (dots) => (
      <div style={{ borderRadius: "10px", padding: "10px" }}>
        <ul style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "20px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? { width: "12px", height: "12px", background: "#ff014f", borderRadius: "50%", cursor: "pointer" }
            : { width: "12px", height: "12px", background: "gray", borderRadius: "50%", cursor: "pointer" }
        }
      ></div>
    ),
  };

  return (
    <section id="testimonial" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* ========== Testimonial Slide 1 ========== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                <img className="h-72 rounded-lg object-cover" src={testimonialOne} alt="testimonialOne" />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">Enterprise Minds, Inc</p>
                  <h3 className="text-2xl font-bold">Dinesh Sinnarasse</h3>
                  <p className="text-base tracking-wide text-gray-500">MANAGER - Enterprise Minds, Inc.</p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 flex flex-col justify-center gap-4">
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    "Firoj’s contribution as an intern at Enterprise Minds, Inc. was invaluable. His work on creating responsive front-end components and implementing server-side rendering using EJS enhanced our website's performance significantly. He demonstrated a keen understanding of RESTful APIs, and his focus on optimizing site speed ensured a seamless user experience."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========== Testimonial Slide 2 ========== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                <img className="h-72 rounded-lg object-cover" src={testimonialTwo} alt="testimonialTwo" />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">Hackveda Pvt. Ltd.</p>
                  <h3 className="text-2xl font-bold">Devanshu Shukla</h3>
                  <p className="text-base tracking-wide text-gray-500">TL - Hackveda Pvt. Ltd.</p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 flex flex-col justify-center gap-4">
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    "At Hackveda Pvt. Ltd., Firoj was instrumental in developing and designing our web applications. His expertise in creating functional, visually appealing websites was evident, and his ability to deliver user-centered designs made him an asset to our team."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
