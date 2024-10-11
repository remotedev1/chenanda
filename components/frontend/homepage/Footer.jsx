"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import axios from "axios";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState("");
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubscribeChange = (e) => {
    setSubscribeEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription submission
    console.log(subscribeEmail);
    // Reset email after subscription
    setSubscribeEmail("");
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    // try {
    //   const response = await axios.post("/api/contact-us", {
    //     name: contactForm.name,
    //     email: contactForm.email,
    //     phone: contactForm.phone,
    //     message: contactForm.message,
    //   });

    //   if (response.data.success) {
    //     // Handle successful submission
    //     console.log("Contact form submitted successfully:", response.data);
    //   } else {
    //     console.error("Failed to submit contact form:", response.data.error);
    //   }
    // } catch (error) {
    //   console.error("Error submitting contact form:", error);
    // }

    setLoading(false); // Set loading state to false after submission
    setContactForm({ name: "", email: "", phone: "", message: "" }); // Reset form
  };

  return (
    <div className="bg-primary ">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:col-span-4 ">
            {/* Resources Links */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Resources
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            {/* <div id="contact-form">
              <p className="font-medium tracking-wide text-gray-300">
                Contact Us
              </p>
              <form onSubmit={handleSubmitContact} className="mt-4 space-y-2">
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-gray-200"
                />
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-gray-200"
                />
                <input
                  type="tel"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleContactChange}
                  placeholder="Your Phone"
                  required
                  pattern="[0-9]{10}" // Basic validation for a 10-digit phone number
                  title="Please enter a valid 10-digit phone number."
                  className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-gray-200"
                />
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Your Message"
                  required
                  className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-gray-200"
                />
                <button
                  className={cn(
                    "w-full rounded-md bg-white  hover:bg-secondary px-6 py-3 font-medium text-black",
                    {
                      "cursor-not-allowed bg-primary/60": loading, // Apply styles when loading
                    }
                  )}
                  disabled={loading}
                  type="submit"
                >
                  {loading ? "Submitting..." : "Submit"}{" "}
                </button>
              </form>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col justify-center pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-white/50">
            © Copyright 2024 chenanda. All rights reserved.
          </p>
          {/* <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <Link
              target="_blank"
              // href="https://in.linkedin.com/company"
              className="text-white/50 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <FaLinkedin />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/"
              className="text-white/50 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              className="text-white/50 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <FaYoutube />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
