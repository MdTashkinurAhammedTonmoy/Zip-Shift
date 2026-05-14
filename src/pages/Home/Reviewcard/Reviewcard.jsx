import React from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

const Reviewcard = ({review}) => {
    const {userName,review:tastimoniyal,user_photoURL} = review;
    return (
        
      <div className="bg-base-100 max-w-md p-6 rounded-2xl shadow-sm">
        
        {/* Quote Icon */}
        <FaQuoteLeft className="text-4xl text-teal-200 mb-4" />

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed pb-5 border-b border-dashed border-gray-300">
          {tastimoniyal}
        </p>

        {/* User Info */}
        <div className="flex items-center gap-4 mt-5">
          
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-teal-900">
            <img className='rounded-full' src={user_photoURL} alt="" />
          </div>

          {/* Name & Role */}
          <div>
            <h3 className="font-bold text-teal-900 text-lg">
              {userName}
            </h3>
            <p className="text-sm text-gray-400">
              Senior Product Designer
            </p>
          </div>

        </div>
      </div>
    );
};

export default Reviewcard;