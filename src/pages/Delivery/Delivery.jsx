import React from "react";
import Tracking from "../../assets/live-tracking.png";
import delivery from "../../assets/safe-delivery.png";

const Delivery = () => {
  return (
    <div className="my-24 border-t-3 border-b-3 border-dotted border-[#03464D] py-20">

      <div data-aos = 'fade-right' className="bg-[#FFFFFF] flex items-center mb-6 p-8 rounded-3xl">
        <img className="hover:scale-105 transition-transform duration-300 hover:-translate-y-4" src={Tracking} alt="" />
        <div className="m-12 p-6 border-r-2 border-dotted border-[#03464D]"></div>
        <div>
          <h3 className="text-2xl font-extrabold mb-4">Live Parcel Tracking</h3>
          <p className="text-[16px] font-medium text-[#606060]">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div data-aos = 'fade-left' className="bg-[#FFFFFF] flex items-center  mb-6 p-8 rounded-3xl">
        <img className="hover:scale-105 transition-transform duration-300 hover:-translate-y-4" src={delivery} alt="" />
        <div className="m-12 p-6 border-r-2 border-dotted border-[#03464D]"></div>
        <div>
          <h3 className="text-2xl font-extrabold">100% Safe Delivery</h3>
          <p className="text-[16px] font-medium text-[#606060]">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div data-aos = 'fade-buttom' className="bg-[#FFFFFF] flex items-center p-8 rounded-3xl">
        <img className="hover:scale-105 transition-transform duration-300 hover:-translate-y-4" src={delivery} alt="" />
        <div className="m-12 p-6 border-r-2 border-dotted border-[#03464D]"></div>
        <div>
          <h3 className="text-2xl font-extrabold">24/7 Call Center Support</h3>
          <p className="text-[16px] font-medium text-[#606060]">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
