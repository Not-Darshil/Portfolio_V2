"use client";
import { useState } from "react";
import { Card } from "@/components/Card";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import emailjs from "emailjs-com";


export const ContactSection = ({ id }: { id?: string }) => {
  const autofillFix = {
    WebkitBoxShadow: "0 0 0px 1000px #1f2937 inset",
    WebkitTextFillColor: "#fff",
    caretColor: "#fff"
  };

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", contact: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div id={id} className="py-16 pt-12 lg:py-24 lg:pt-20 lg:-mb-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Card */}
          <Card className="p-8 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 relative overflow-hidden z-0">
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{ backgroundImage: `url(${grainImage.src})` }}
            ></div>
            <h2 className="font-serif text-2xl md:text-3xl">
              Let&apos;s create something amazing together!
            </h2>
            <p className="text-sm md:text-base mt-2">
              Ready to bring your next project to life? Let&apos;s connect and
              discuss how I can help you achieve your goals.
            </p>
            <button
              className="mt-6 text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/notdarshil/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </Card>

          {/* Email Form Card */}
          <Card className="p-8 bg-gray-900 text-white">
            <h2 className="font-serif text-xl md:text-2xl mb-4">
              Send Me a Message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                  style={autofillFix}
                className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Your Email / Contact No."
                value={formData.contact}
                onChange={handleChange}
                  style={autofillFix}
                className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                  style={autofillFix}

                className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-2 bg-white text-gray-950 inline-flex items-center justify-center px-5 h-11 rounded-lg gap-2 w-max hover:bg-emerald-100 transition"
              >
                <span className="font-semibold">Send</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </form>
          </Card>

        </div>
      </div>
    </div>
  );
};
