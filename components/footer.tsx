import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import {BsFire} from 'react-icons/bs';
const Footer = () => {
  return (
    <footer className=" lg:px-36">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 text-lg">
        <div className="flex flex-col gap-2">
          <div className="flex items-center text-2xl font-bold space-x-1">
            <BsFire className="text-red-500" />
            <span className="cursor-pointer">uifry</span>
          </div>
          <div className="flex items-center space-x-2 text-md">
            <FaEnvelope className="text-red-500" />
            <span className="hover:text-red-500 cursor-pointer">Help@Frybix.Com</span>
          </div>
          <div className="flex items-center space-x-2 text-md">
            <FaPhoneAlt className="text-red-500" />
            <span className="hover:text-red-500 cursor-pointer">+1234 456 678 89</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <h4 className="font-bold">Links</h4>
          <a href="#" className="hover:text-red-500">Home</a>
          <a href="#" className="hover:text-red-500">About Us</a>
          <a href="#" className="hover:text-red-500">Bookings</a>
          <a href="#" className="hover:text-red-500">Blog</a>
        </div>
        <div className="flex flex-col space-y-1">
          <h4 className="font-bold">Legal</h4>
          <a href="#" className="hover:text-red-500">Terms Of Use</a>
          <a href="#" className="hover:text-red-500">Privacy Policy</a>
          <a href="#" className="hover:text-red-500">Cookie Policy</a>
        </div>
        <div className="flex flex-col space-y-1">
          <h4 className="font-bold">Product</h4>
          <a href="#" className="hover:text-red-500">Take Tour</a>
          <a href="#" className="hover:text-red-500">Live Chat</a>
          <a href="#" className="hover:text-red-500">Reviews</a>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Newsletter</h4>
          <p className="text-md">Stay Up To Date</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 rounded-l p-2 flex-1"
            />
            <button className="bg-black text-white rounded-r px-2 py-2 hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 mt-6 pt-4 text-center text-md">
        <p>&copy; Copyright 2022 Uifry.Com All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
