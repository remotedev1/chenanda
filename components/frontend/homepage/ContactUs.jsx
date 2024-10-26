"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/contact-us", data);
      setMessage("Your message has been sent successfully!");
      reset();
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full h-auto clear-both relative mb-16 md:mb-28 pt-16 md:pt-36">
      <div className="max-w-[1200px]  w-full mx-auto h-auto py-0 px-10">
        <div className="mb-6 flex flex-col items-center justify-center gap-2 ">
          <div className="w-full h-auto clear-both float-left">
            <h3 className="uppercase text-2xl md:text-4xl font-semibold tracking-widest">
              Get in <span className="text-yellow-500">Touch</span>
            </h3>
          </div>
        </div>
        {/* //Inner Form */}
        <div className="w-full h-auto clear-both flex flex-col md:flex-row justify-between gap-10  md:pt-10">
          <div className="left wow fadeInLeft flex-1">
            <div className="w-full float-left mb-5 md:mb-10">
              <p className="text-sm md:text-md md:leading-relaxed text-slate-500">
                Please fill out the form on this section to contact with us. Or
                call between 9:00 a.m. and 8:00 p.m. IST, Monday through Friday
              </p>
            </div>
            <div>
              <table className="w-full text-left border-none text-sm md:text-lg">
                <tbody>
                  <tr>
                    <th className="p-4 pl-0 font-medium text-gray-700">
                      Address
                    </th>
                    <td className="p-4 text-gray-500">
                      Kokeri Village, Cheyandane Post, 571212
                    </td>
                  </tr>
                  <tr>
                    <th className="p-4 pl-0 font-medium text-gray-700">
                      Email
                    </th>
                    <td className="p-4 text-gray-500">
                      <a
                        href="mailto:example@gmail.com"
                        className="text-blue-500 hover:underline"
                      >
                        example@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="p-4 pl-0 font-medium text-gray-700">
                      Phone
                    </th>
                    <td className="p-4 text-gray-500">
                      <a
                        href="tel:+770334425557"
                        className="text-blue-500 hover:underline"
                      >
                        +77 033 442 55 57
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="p-4 pl-0 font-medium text-gray-700">
                      Website
                    </th>
                    <td className="p-4 text-gray-500">
                      <a
                        href="https://www.chenanda.in"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        www.chenanda.in
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="p-4 pl-0 font-medium text-gray-700">
                      Twitter
                    </th>
                    <td className="p-4 text-gray-500">
                      <a
                        href="https://twitter.com/twitternickname"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        @twitternickname
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="p-4 pl-0 font-medium text-gray-700">
                      Facebook
                    </th>
                    <td className="p-4 text-gray-500">
                      <a
                        href="https://facebook.com/facebooknickname"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        @facebooknickname
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="right wow fadeInLeft flex-1">
            <div className=" mx-auto md:p-6 pt-0">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your Name"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    placeholder="Your Email"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("notes", { required: "Message is required" })}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  {errors.notes && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.notes.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className={`w-full p-4 bg-blue-500 text-white rounded-lg font-semibold 
            ${loading ? "cursor-not-allowed opacity-50" : "hover:bg-blue-600"}`}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>

              {message && (
                <p className="mt-4 text-center text-gray-700">{message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
