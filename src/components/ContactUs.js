"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import toast, { Toaster } from "react-hot-toast";
import { useInView } from "framer-motion";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  const container = useRef();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    requirement: "",
  });

  // console.log("---formData----", formData);

  const robotImage = useRef();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       robotImage.current,
  //       {
  //         x: 250,
  //         autoAlpha: 0.5,
  //       },
  //       {
  //         x: 0,
  //         autoAlpha: 1,
  //         duration: 1.5,
  //         scrollTrigger: {
  //           trigger: robotImage.current,
  //           start: "top 80%",
  //           // end: "top -50%",
  //           // markers: true,
  //           toggleActions: "play reverse play reverse",
  //         },
  //       }
  //     );

  //     gsap.fromTo(
  //       formContainerRef.current,
  //       {
  //         autoAlpha: 0,
  //       },
  //       {
  //         autoAlpha: 1,
  //         duration: 1.5,
  //         delay: 0.5,
  //         scrollTrigger: {
  //           trigger: formContainerRef.current,
  //           start: "top 80%",
  //           // end: "top -50%",
  //           // markers: true,
  //           toggleActions: "play reverse play reverse",
  //         },
  //       }
  //     );
  //   },
  //   { scope: container }
  // );

  const onSubmit = async (event) => {
    event.preventDefault();
    // if (formData?.phone?.length !== 10) {
    //   toast.error("Please enter a valid 10-digit phone number");
    //   return;
    // }

    if (formData?.requirement === "") {
      toast.error("Requirement field is required");
      return;
    }

    setResult("Sending....");

    setLoading(true);
    const response = await axios(
      "https://api.abhiwan.com/api/support/submit-form",
      // "http://localhost:3021/api/support/submit-form",
      {
        method: "POST",
        data: formData,
      }
    );

    const data = response.data;

    if (data.success) {
      toast.success("Success! We’ll review your submission");

      setLoading(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      console.log("Error", data);
      if (data.success === false) {
        toast.error(data.message);
      }
      setLoading(false);
    }
  };

  const inView = useInView(container, {
    once: false, // animate only once
    amount: 0.5, // 50% visible to trigger
  });

  return (
    <>
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center  py-30"
        style={{ backgroundImage: 'url("/content/abhiwan1.jpg")' }}
        id="contactus"
        ref={container}
      >
        <div data-aos="fade-down">
          <div className="mb-8">
            <button
              className="px-6 py-2 rounded-full shadow-md  bg-black/20 backdrop-blur-sm border border-white/30 text-transparent bg-clip-text font-bold small-heading transition hover:scale-105"
              style={{
                backgroundImage: "linear-gradient(to right, #d100f8, #1f1fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CONTACT US
            </button>
          </div>
        </div>
        <div className="w-[90%] md:w-[80%] lg:w-[70%] bg-black/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Left Side - Avatar */}
          <div
            className={`w-full lg:w-1/2 transition-transform ${
              inView ? "robot-image-animate" : "robot-image-none-animate"
            }`}
            ref={robotImage}
          >
            <Image
              src="/content/cyberavatar.png"
              width={350}
              height={350}
              alt="cyber avatar"
              className=" h-full w-full object-cover drop-shadow-xl"
            />
          </div>

          {/* Right Side - Form */}
          <div
            className={`w-full lg:w-1/2 p-8 text-white ${
              inView ? "form-container-1" : "form-container-0"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Let’s Connect & Create Magic!
            </h2>
            <p className="text-sm md:text-base mb-6 text-white/80">
              Aligning innovation & ideas—reach out and let’s illuminate the
              future together.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 rounded-md bg-black/20  border border-white/30 text-white placeholder-white/60 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 rounded-md bg-black/20  border border-white/30 text-white placeholder-white/60 focus:outline-none"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-black/20  border border-white/30 text-white placeholder-white/60 focus:outline-none"
              />

              {/* <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-black/20  border border-white/30 text-white placeholder-white/60 focus:outline-none"
              /> */}

              <PhoneInput
                country={"us"}
                value={formData.phone}
                onChange={(phone) => {
                  setFormData({ ...formData, ["phone"]: phone });
                }}
                inputStyle={{
                  width: "100%",
                  background: "#0000003b",
                  border: "1px solid rgb(255 255 255 / 42%)",
                  height: "45px",
                }}
                buttonStyle={{
                  background: "#0000003b",
                  border: "1px solid rgb(255 255 255 / 42%)",
                }}
                dropdownStyle={{
                  color: "black",
                }}

                // inputClass="w-full px-4 py-2 rounded-md bg-black/20  border border-white/30 text-white placeholder-white/60 focus:outline-none"
              />

              <div className="custom-select">
                <select name="requirement" onChange={handleChange}>
                  <option value="">Select Requirement</option>

                  <option value="Metaverse Blockchain">
                    Metaverse Blockchain
                  </option>
                  <option value="Game Development">Game Development</option>
                  <option value="Real Estate Metaverse">
                    Real Estate Metaverse
                  </option>
                  <option value="NFT Marketplace | DEFI">
                    NFT Marketplace | DEFI
                  </option>
                  <option value="Web And App Development">
                    Web And App Development
                  </option>
                  <option value="AR / VR Development">
                    AR / VR Development
                  </option>
                  <option value="UI / UX Development">
                    UI / UX Development
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={200}
                className="w-full px-4 py-2 rounded-md bg-black/20  border border-white/30 text-white placeholder-white/60 focus:outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#d100f8] hover:bg-[#bd00deab] cursor-pointer text-white font-semibold py-2 rounded-md transition"
              >
                {loading ? "Submitting..." : "SEND"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default ContactUs;
