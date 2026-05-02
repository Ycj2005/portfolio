"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import { roboto_mono } from "./font";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Home() {
  const [fill] = useState("Yash Jadhav");

  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    const result = await emailjs.sendForm(
     "service_bs693dj", 
     "template_376wmod",
      form.current,
     "bvMPLDlPZuiG-Kb9M",
    );

    if (result.status === 200) {
      toast.success("Thanks for submitting the form..", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });

      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
      }, 1200);
    }
  };

  return (
    <>
      {/* Background Images */}
      <Image
        src="/image/blurbg.png"
        alt="bgblur"
        className="backanimation1 absolute z-0 left-5"
        width={500}
        height={500}
      />

      <Image
        src="/image/bgellipse.png"
        alt="bgellipse"
        className="backanimation3 z-0"
        width={500}
        height={500}
      />

      <main className="mainoutersection m-auto z-10 relative">
        {/* Hero Section */}
        <div
          className="firstsection flex items-center justify-between"
          id="skills"
        >
          <div
            className={`w-full px-2 flex flex-col items-center justify-center gap-5 text-slate-50 text-center ${roboto_mono.className}`}
          >
            <div className="head_section font-bold">
              Hi, I&apos;m Yash Jadhav
            </div>

            <div className="description_section font-light text-base">
              Full Stack Developer skilled in React, Next.js, MongoDB, Tailwind
              CSS building fast and responsive apps.
            </div>

            <div className="button_group flex justify-center">
              <Link
                href="#about"
                className="button1 px-3 py-2 mx-2 rounded-md hover:shadow-sm"
              >
                About Me
              </Link>

              <a
                href="/resume.pdf"
                download
                className="button2 px-3 py-2 mx-2 rounded-md hover:bg-white hover:text-black"
              >
                Download CV 🚀
              </a>
            </div>
          </div>

          <Image
            src="/image/my-image.png"
            alt="yash"
            className="firstimg"
            width={350}
            height={420}
          />
        </div>

        {/* Projects */}
        <div className="projectsection w-full flex flex-col gap-6 my-10" id="project">
          <div className="text-center text-xl text-slate-100 font-semibold">
            My Projects
          </div>

          <div className="flex gap-4">
            <Link
              href="https://aibuilderwith-authentication-vf21.vercel.app"
              target="_blank"
              className="w-full"
            >
              <Image
                src="/image/gen3dimage.jpg"
                alt="project"
                className="h-80 object-cover rounded-md"
                width={500}
                height={300}
              />
              <div className="text-white p-2">NovaNeuron Chatbot</div>
            </Link>

            <div className="w-full">
              <Image
                src="/image/3dvideo.jpg"
                alt="project"
                className="h-80 object-cover rounded-md"
                width={500}
                height={300}
              />
              <div className="text-white p-2">Generate 3D Videos</div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="main_easy mt-3" id="about">
          <Image
            src="/image/computer.png"
            alt="computer"
            width={353}
            height={540}
            className="aboutmeimage"
          />

          <div className={`easy_text ${roboto_mono.className}`}>
            <div className="my-2 text-xl font-semibold">About Me</div>

            <div className="my-2">
              Full Stack Developer passionate about building clean and modern
              web apps using React, Next.js, MongoDB.
            </div>

            <Link href="#question" className="my-2 px-5 py-2">
              Ask me any questions
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="footer w-full py-7" id="contact">
          <div className="text-center text-white font-bold text-xl">
            Follow Me
          </div>

          <div className="flex justify-center gap-5 mt-5 text-white">
            <Link href="https://x.com/AshleyJacksonOG" target="_blank">
              Twitter
            </Link>

            <Link href="https://www.instagram.com/og_yashjadhav" target="_blank">
              Instagram
            </Link>

            <Link href="https://www.youtube.com/@AshJackson-007/streams" target="_blank">
              YouTube
            </Link>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={handlesubmit}
            className="flex flex-col gap-4 px-2 mt-3"
            id="question"
          >
            <input
              type="text"
              name="name"
              placeholder="username"
              className="input px-2 py-3 rounded-md text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              className="input px-2 py-3 rounded-md text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              name="message"
              placeholder="questions?"
              className="input px-2 py-3 rounded-md text-white"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <input
              type="submit"
              value="Submit"
              className="px-2 py-3 bg-purple-800 text-white rounded-md cursor-pointer"
            />
          </form>
        </div>
      </main>
    </>
  );
}
