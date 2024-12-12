import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../context/ThemeContext';

const ContactUs = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-transparent py-12 px-6 w-[80%] mx-auto my-[70px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="mt-4">
            We’d love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-transparent shadow-md rounded-md p-6 mb-12" data-aos="fade-up">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative" data-aos="zoom-in">
                <input
                  type="text"
                  id="name"
                  className="peer w-full border-b-2 border-blue bg-transparent focus:outline-none focus:border-blue-500 transition duration-300"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-2.5 text-gray-500 text-sm peer-placeholder-shown:top-7 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all duration-300"
                >
                  Name
                </label>
              </div>

              <div className="relative" data-aos="zoom-in" data-aos-delay="100">
                <input
                  type="email"
                  id="email"
                  className="peer w-full border-b-2 border-blue bg-transparent focus:outline-none focus:border-blue-500 transition duration-300"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-2.5 text-gray-500 text-sm peer-placeholder-shown:top-7 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all duration-300"
                >
                  Email
                </label>
              </div>
            </div>

            <div className="relative" data-aos="zoom-in" data-aos-delay="200">
              <textarea
                id="message"
                rows="4"
                required
                className="peer w-full border-b-2 border-blue bg-transparent focus:outline-none focus:border-blue-500 transition duration-300"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-2.5 text-gray-500 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all duration-300"
              >
                Message
              </label>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <button
                type="submit"
                className={`${darkMode ? "px-6 py-3 bg-gradient-to-r from-transparent to-blue font-bold rounded-lg text-[lightgray]" : "px-6 py-3  bg-[black] font-bold rounded-lg text-[lightgray]"}`}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
