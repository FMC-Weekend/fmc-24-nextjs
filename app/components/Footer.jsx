"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../components/logo_withdate.png";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";
import { sendContactForm } from "../../utils/api";

const Alert = ({ type, message, onClose }) => {
  return (
    <div
      className={`mt-3 p-4 rounded-lg shadow-lg ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white`}
    >
      <p>{message}</p>
      <button className="mt-2 text-sm underline" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

const Footer = () => {
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      await sendContactForm({ name, email, message });
      e.target.reset();
      setSending(false);
      setAlert({
        show: true,
        message: "Form submitted successfully!",
        type: "success",
      });
    } catch (error) {
      setAlert({
        show: true,
        message: "Error submitting form. Please try again.",
        type: "error",
      });
    }
  };

  const closeAlert = () => {
    setAlert({ show: false, message: "", type: "" });
  };

  return (
    <footer className="relative bg-black text-white py-8 w-[90vw] mx-auto justify-between rounded-2xl flex flex-col p-6 md:p-12 backdrop-blur-md bg-gray-400/10 overflow-hidden">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <div className="flex items-center mb-4">
            <Image src={logo} alt="Company Logo" width={350} height={250} />
          </div>
          <p className="text-lg mb-4">IIT (BHU), Varanasi, India</p>
          <p className="text-lg mb-4">Phone: +91 9310825339</p>
          <p className="text-lg mb-4">Email: info@fmcweekend.com</p>
          <div className="flex space-x-4">
            <a target="_blank" href="https://www.facebook.com/fmcweekendiitbhu/" className="text-red-400 hover:underline gap-0 flex ">
              Facebook <FacebookIcon />
            </a>
            <a target="_blank" href="https://x.com/fmc_weekend?lang=en" className="text-red-400 hover:underline gap-1 flex">
              Twitter <TwitterIcon />
            </a>
            <a target="_blank" href="https://www.instagram.com/fmc_weekend/?hl=en" className="text-red-400 hover:underline gap-1 flex">
              Instagram <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              required
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
            <input
              id="email"
              name="email"
              required
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
            <textarea
              id="message"
              name="message"
              required
              placeholder="Message"
              rows="4"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
            <button
              type="submit"
              className="bg-red-500 p-3 rounded-lg text-white font-semibold hover:bg-red-600"
              disabled={sending}
            >
              Send Message
            </button>
          </form>
          {alert.show && (
            <Alert
              type={alert.type}
              message={alert.message}
              onClose={closeAlert}
            />
          )}
        </div>
      </div>
      <div className="container mx-auto mt-8 px-4">
        <h3 className="text-2xl font-bold mb-4">Find Us</h3>
        <div className="w-full h-fit">
          <iframe
            src="https://www.google.com/maps?q=IIT+BHU,+Varanasi,+Uttar+Pradesh&hl=es;z=14&output=embed"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
