import React from "react";
import services from "../../../assets/service.png";

const Services = () => {
  return (
    <div data-aos = 'fade-right' className="bg-[#03373D] px-40 py-28 rounded-4xl">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-[#FFFFFF] mb-4">
          Our Services
        </h2>
        <p className="text-[16px] text-[#FFFFFF] font-medium mb-8">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#FFFFFF] rounded-3xl py-8 px-6 text-center hover:bg-gradient-to-r hover:from-red-100 hover:to-green-300 hover:scale-105 transition-transform duration-300">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
            <img src={services} alt="" className="w-10 mx-auto h-10" />
          </div>

          <h3 className="text-2xl mb-4 text-[#03373D] font-bold">
            Express & Standard <br /> Delivery
          </h3>
          <p className="text-[16px] text-[#606060] font-medium">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="bg-[#FFFFFF] rounded-3xl py-8 px-6 text-center hover:bg-gradient-to-r hover:from-red-100 hover:to-green-300 hover:scale-105 transition-transform duration-300">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
            <img src={services} alt="" className="w-10 mx-auto h-10" />
          </div>
          <h3 className="text-2xl mb-4 text-[#03373D] font-bold">
            Nationwide Delivery
          </h3>
          <p className="text-[16px] text-[#606060] font-medium">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>
        <div className="bg-[#FFFFFF] rounded-3xl py-8 px-6 text-center hover:bg-gradient-to-r hover:from-red-100 hover:to-green-300 hover:scale-105 transition-transform duration-300">
         <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
            <img src={services} alt="" className="w-10 mx-auto h-10" />
          </div>
          <h3 className="text-2xl mb-4 text-[#03373D] font-bold">
            Fulfillment Solution
          </h3>
          <p className="text-[16px] text-[#606060] font-medium">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>
        <div className="bg-[#FFFFFF] rounded-3xl py-8 px-6 text-center hover:bg-gradient-to-r hover:from-red-100 hover:to-green-300 hover:scale-105 transition-transform duration-300">
         <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
            <img src={services} alt="" className="w-10 mx-auto h-10" />
          </div>
          <h3 className="text-2xl mb-4 text-[#03373D] font-bold">
            Cash on Home Delivery
          </h3>
          <p className="text-[16px] text-[#606060] font-medium">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="bg-[#FFFFFF] rounded-3xl py-8 px-6 text-center hover:bg-gradient-to-r hover:from-red-100 hover:to-green-300 hover:scale-105 transition-transform duration-300">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
            <img src={services} alt="" className="w-10 mx-auto h-10" />
          </div>
          <h3 className="text-2xl mb-4 text-[#03373D] font-bold">
            Corporate Service / Contract <br /> In Logistics
          </h3>
          <p className="text-[16px] text-[#606060] font-medium">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>
        <div className="bg-[#FFFFFF] rounded-3xl py-8 px-6 text-center hover:bg-gradient-to-r hover:from-red-100 hover:to-green-300 hover:scale-105 transition-transform duration-300">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
            <img src={services} alt="" className="w-10 mx-auto h-10" />
          </div>
          <h3 className="text-2xl mb-4 text-[#03373D] font-bold">
            Parcel Return
          </h3>
          <p className="text-[16px] text-[#606060] font-medium">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
