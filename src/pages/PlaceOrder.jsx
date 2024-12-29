import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { shopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(shopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-8 pt-8 sm:pt-16 min-h-[80vh] border-t border-gray-300 bg-gray-50 px-4 sm:px-8 lg:px-16">
      {/* Left Side */}
      <div className="flex flex-col gap-6 w-full sm:max-w-[480px]">
        <div className="text-2xl font-semibold">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>

        <div className="flex gap-4">
          <input
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-lg py-2 px-4 w-full text-gray-700 shadow-sm"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-lg py-2 px-4 w-full text-gray-700 shadow-sm"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <input
          className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-lg py-2 px-4 w-full text-gray-700 shadow-sm"
          type="email"
          placeholder="Enter Your Email Address"
        />
        <input
          className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-lg py-2 px-4 w-full text-gray-700 shadow-sm"
          type="text"
          placeholder="Street"
        />

        <div className="flex gap-4">
          <input
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-lg py-2 px-4 w-full text-gray-700 shadow-sm"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-lg py-2 px-4 w-full text-gray-700 shadow-sm"
            type="text"
            placeholder="State"
          />
        </div>

        <div className="flex gap-4">
          <input
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-lg py-2 px-4 w-full text-gray-700 shadow-sm"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-lg py-2 px-4 w-full text-gray-700 shadow-sm"
            type="text"
            placeholder="Country"
          />
        </div>

        <input
          className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-lg py-2 px-4 w-full text-gray-700 shadow-sm"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* Right Side */}
      <div className="w-full sm:max-w-[480px] flex flex-col items-center">
        <div className="mt-4 sm:mt-0 min-w-full">
          <CartTotal />
        </div>

        <div className="mt-12 w-full">
          <Title text1="PAYMENT" text2="METHOD" />

          {/* Payment Method Selection */}
          <div className="flex flex-col lg:flex-row gap-4 mt-6">
            <div
              onClick={() => setMethod('stripe')}
              className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition ${
                method === 'stripe' ? 'border-green-400 bg-green-50' : 'border-gray-300'
              } hover:shadow-md`}
            >
              <p
                className={`w-5 h-5 border-2 rounded-full flex-shrink-0 ${
                  method === 'stripe' ? 'bg-green-400 border-green-400' : 'border-gray-300'
                }`}
              ></p>
              <img className="h-6" src={assets.stripe_logo} alt="Stripe Logo" />
            </div>

            <div
              onClick={() => setMethod('razorpay')}
              className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition ${
                method === 'razorpay' ? 'border-green-400 bg-green-50' : 'border-gray-300'
              } hover:shadow-md`}
            >
              <p
                className={`w-5 h-5 border-2 rounded-full flex-shrink-0 ${
                  method === 'razorpay' ? 'bg-green-400 border-green-400' : 'border-gray-300'
                }`}
              ></p>
              <img className="h-6" src={assets.razorpay_logo} alt="Razorpay Logo" />
            </div>

            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition ${
                method === 'cod' ? 'border-green-400 bg-green-50' : 'border-gray-300'
              } hover:shadow-md`}
            >
              <p
                className={`w-5 h-5 border-2 rounded-full flex-shrink-0 ${
                  method === 'cod' ? 'bg-green-400 border-green-400' : 'border-gray-300'
                }`}
              ></p>
              <p className="text-gray-700 font-medium">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-center sm:text-right mt-8">
            <button
              onClick={() => navigate('./orders')}
              className="bg-blue-600 text-white px-16 py-3 text-sm rounded-3xl hover:bg-blue-700 active:bg-blue-800 shadow-md transition"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
