import React, { useEffect } from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import AOS from 'aos';
import "aos/dist/aos.css";

const Work = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (1s)
      offset: 100, // trigger point
      once: true, // animate only once
    });
  }, []);
    return (
        <div data-aos="fade-left" className='my-24'>
            <div>
                <h2 className='text-3xl font-extrabold text-[#03373D] pl-9'>How it Works</h2>
            </div>
            <div className='flex p-8 gap-6'>
                <div className='p-8 bg-[#FFFFFF] rounded-3xl hover:scale-105 transition-transform duration-300 hover:-translate-y-4 hover:shadow-xl'>
                    <TbTruckDelivery className='w-[56px] h-[56px]' />
                    <h3 className='text-[20px] font-bold'>Booking Pick & Drop</h3>
                    <p className='text-[#606060] text-[16px] font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='p-8 bg-[#FFFFFF] rounded-3xl hover:scale-105 transition-transform duration-300 hover:-translate-y-4 hover:shadow-xl'>
                    <TbTruckDelivery className='w-[56px] h-[56px]'/>
                    <h3 className='text-[20px] font-bold'>Cash On Delivery</h3>
                    <p className='text-[#606060] text-[16px] font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='p-8 bg-[#FFFFFF] rounded-3xl hover:scale-105 transition-transform duration-300 hover:-translate-y-4 hover:shadow-xl'>
                    <TbTruckDelivery className='w-[56px] h-[56px]'/>
                    <h3 className='text-[20px] font-bold'>Delivery Hub</h3>
                    <p className='text-[#606060] text-[16px] font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='p-8 bg-[#FFFFFF] rounded-3xl hover:scale-105 transition-transform duration-300 hover:-translate-y-4 hover:shadow-xl'>
                    <TbTruckDelivery className='w-[56px] h-[56px]'/>
                    <h3 className='text-[20px] font-bold'>Booking SME & Corporate</h3>
                    <p className='text-[#606060] text-[16px] font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default Work;