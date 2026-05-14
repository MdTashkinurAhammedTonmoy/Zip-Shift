import React from "react";
import merchant from "../../assets/be-a-merchant-bg.png";
import location from "../../assets/location-merchant.png";

const Merchant = () => {
  return (
    <div 
      className="flex justify-between p-20 bg-cover bg-[#03373D] rounded-4xl"
      style={{ backgroundImage: `url(${merchant})` }}
    >
      <div data-aos = 'fade-right'>
        <h2 className="text-[40px] font-extrabold text-[#FFFFFF] hover:scale-105 transition-transform duration-300">
          Merchant and Customer Satisfaction <br /> is Our First Priority
        </h2>
        <p className="text-[16px] text-[#DADADA] mt-4 mb-8">
          We offer the lowest delivery charge with the highest value along with{" "}
          <br />
          100% safety of your product. Pathao courier delivers your parcels in
          every <br /> corner of Bangladesh right on time.
        </p>
        <div className="flex gap-4">
          <button className="text-[20px] rounded-[99px] font-bold text-[#CAEB66] border-[#CAEB66] border-2 hover:bg-[#CAEB66] hover:text-black hover:scale-105 transition-transform duration-300 px-8 py-4">
            Become a Merchant
          </button>
          <button className="text-[20px] rounded-[99px] font-bold text-[#CAEB66] border-[#CAEB66] border-2 hover:bg-[#CAEB66] hover:text-black hover:scale-105 transition-transform duration-300 px-8 py-4">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
      <img data-aos = 'fade-left' src={location} alt="" />
    </div>
  );
};

export default Merchant;
