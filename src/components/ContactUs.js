"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import toast, { Toaster } from "react-hot-toast";
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
  });

  const robotImage = useRef();
  const formContainerRef = useRef();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useGSAP(
    () => {
      gsap.fromTo(
        robotImage.current,
        {
          x: 250,
          autoAlpha: 0.5,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: robotImage.current,
            start: "top 80%",
            // end: "top -50%",
            // markers: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        formContainerRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1.5,
          delay: 0.5,
          scrollTrigger: {
            trigger: formContainerRef.current,
            start: "top 80%",
            // end: "top -50%",
            // markers: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: container }
  );

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "461c108a-11a1-4e3e-bf4d-354a8dfd89d8");
    setLoading(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Success! We’ll review your submission");
      event.target.reset();
      setLoading(false);
    } else {
      console.log("Error", data);
      if (data.success === false) {
        toast.error("Please enter valid email address");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    // });
  }, []);

  return (
    <>
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center  py-30"
        style={{ backgroundImage: 'url("/content/abhiwan1.jpg")' }}
        id="contactus"
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
        <div
          ref={container}
          className="w-[90%] md:w-[80%] lg:w-[70%] bg-black/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl"
        >
          {/* Left Side - Avatar */}
          <div className="w-full lg:w-1/2" ref={robotImage}>
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
            className="w-full lg:w-1/2 p-8 text-white"
            ref={formContainerRef}
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

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-black/20  border border-white/30 text-white placeholder-white/60 focus:outline-none"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-black/20  border border-white/30 text-white placeholder-white/60 focus:outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#d100f8] hover:bg-[#bd00deab] cursor-pointer text-white font-semibold py-2 rounded-md transition"
              >
                {loading ? "submitting..." : "SEND"}
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
