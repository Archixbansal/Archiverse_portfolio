import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID,
  EMAIL_JS_PUBLIC_KEY,
} from "../constants";
import Footer from "./Footer";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, message } = form;

    if (!name || !email || !message) {
      setLoading(false);
      toast.error("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          name: form.name,
          time: new Date().toLocaleString(),
          message: form.message,
        },
        EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          toast.error("Something went wrong, please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="relative z-0 bg-black w-screen h-screen mt-12 overflow-hidden">
      {/* Animated background */}
      <ul className="circles">
        <li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li>
      </ul>

      <div className="text-white contact overflow-x-hidden pt-12 mt-8 relative z-10" id="contact">
        <div className="z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl">
          <p className="font-light">REACH OUT TO ME</p>
          <h2 className="text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500">
            Contact.
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ex:abc@gmail.com"
                className="py-4 px-6 rounded-lg font-medium bg-gray-900"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Do you have anything to say?"
                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900"
                required
              />
            </label>

            <button
              type="submit"
              className="pt-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md bg-gray-900"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
