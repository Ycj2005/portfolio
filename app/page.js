"use client";
import Image from "next/image";
import image from "./image/firstsideimage.png";
import Navbar from "./components/navbar";
import bgblur from "./image/blurbg.png";
import bgblur2 from "./image/blurbg2.png";
import { roboto_mono } from "./font";
import first3d from "./image/3dfirst.jpg";
import second3d from "./image/gen3dimage.jpg";
import third3d from "./image/3dvideo.jpg";
import Link from "next/link";
import computer from "./image/computer.png";
import bgellipse from "./image/bgellipse.png";
import yash from "./image/my-image.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
export default function Home() {
  // const clicktodownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/public/resume.pdf";
  //   link.download = "resume.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }
  const [fill, setFill] = useState("Yash Jadhav");
  const refradioinpt = useRef();
  const namemap = [
    "Yash Jadhav",
    "Front-End Developer",
    "Back-End Developer",
    "Programmer",
  ];

  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handlesubmit = async (e) => {
    e.preventDefault();
    let result = await emailjs.sendForm(
      "service_bs693dj",
      "template_376wmod",
      form.current,
      "bvMPLDlPZuiG-Kb9M",
    );
    let finalresult = result.status;
    if (finalresult === 200) {
      toast.success("Thanks for the submitting the form..", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
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
      <Image
        src={bgblur}
        alt="bgblur"
        className="backanimation1 absolute z-0 left-5"
      />
      {/* <Image src={bgblur2} alt="bgblu2" className="backanimation absolute z-0 right-0 top-4" /> */}
      <Image src={bgellipse} alt="bgblu3" className="backanimation3 z-0 " />
      <main className="mainoutersection m-auto z-10 relative">
        <div
          className="firstsection flex items-center justify-between"
          id="skills"
        >
          <div
            className="w-full px-2 flex flex-col items-center justify-center gap-5 text-slate-50 text-center"
            style={{ fontFamily: roboto_mono }}
          >
            <div className="head_section font-bold">
              Hi, I&apos;m Yash Jadhav
            </div>
            <div className="description_section font-light text-base">
              a passionate Full Stack Web Developer skilled in HTML, CSS,
              JavaScript, React, Next.js, MongoDB, Tailwind CSS, and Bootstrap.
              I build fast, responsive, and user-friendly web applications from
              front-end design to back-end development.
            </div>
            <div className="description_section2 font-light text-lg">
              I&apos;m Yash Jadhav, a Full Stack Developer skilled in building
              responsive, modern web apps using React, Next.js, MongoDB, and
              Tailwind CSS.
            </div>
            <div className="button_group flex item-center justify-center gap-0">
              <Link
                href={"#about"}
                className="button1 border border-slate-400 rounded-md cursor-pointer px-3 py-2 mx-2 border-none hover:shadow-sm"
              >
                About Me
              </Link>
              <a
                href="/resume.pdf"
                className="button2 border border-slate-400 rounded-md cursor-pointer px-3 py-2 mx-2 hover:text-slate-950 hover:bg-slate-50 hover:shadow-sm"
                download
              >
                Download Cv 🚀
              </a>
            </div>
          </div>
          <Image
            src={yash}
            alt="image"
            className="firstimg"
            // height="350" width="420"
          />
        </div>

        {/* project section */}
        <div
          className="projectsection w-full flex flex-col
         gap-6 my-10"
          id="project"
        >
          <div
            className="head_features text-center font-semibold text-xl text-slate-100"
            style={{ fontStyle: roboto_mono }}
          >
            My Projects
          </div>
          <div className="main_features flex">
            {/* <div className="feature w-2/6 rounded-md cursor-pointer" >
              <Image src={first3d} alt="feature" className="imagefeatures h-80 rounded-md object-cover" />
              <div className="image_description text-slate-50 p-2" style={{ fontStyle: roboto_mono }}>
                <div className="title">Generate 3d Images</div>
              </div>
            </div> */}
            <Link
              href={"https://aibuilderwith-authentication-vf21.vercel.app"}
              target="_blank"
              className="feature w-full rounded-md cursor-pointer"
            >
              <Image
                src={second3d}
                alt="feature"
                className="imagefeatures h-80 rounded-md object-cover"
              />
              <div
                className="image_description text-slate-50 p-2 "
                style={{ fontStyle: roboto_mono }}
              >
                <div className="title">NovaNeuron Chatbot</div>
              </div>
            </Link>
            <div className="feature w-full rounded-md cursor-pointer">
              <Image
                src={third3d}
                alt="feature"
                className="imagefeatures h-80 rounded-md object-cover"
              />
              <div
                className="image_description text-slate-50 p-2"
                style={{ fontStyle: roboto_mono }}
              >
                <div className="title">Generate 3d Videos</div>
              </div>
            </div>
          </div>
        </div>

        {/* easy to use /about  */}
        <div className="main_easy mt-3" id="about">
          <Image
            src={computer}
            alt="computer"
            width="353"
            height="540"
            className="aboutmeimage"
          />
          <div className="easy_text" style={{ fontStyle: roboto_mono }}>
            <div className="my-2 easy_title">About Me</div>
            <div className="my-2 easy_description">
              Hi, I&apos;m Yash Jadhav — a Full Stack Developer who loves
              creating clean, fast, and responsive web apps. I work with React,
              Next.js, MongoDB, Tailwind CSS, and more. Always learning, always
              building!
            </div>
            <div></div>
            <Link href={"#question"} className="my-2 easy_button px-5 py-2">
              Ask me Any questions ?
            </Link>
          </div>
        </div>

        {/* footer */}
        <div
          className="footer w-full py-7"
          style={{ fontStyle: roboto_mono }}
          id="contact"
        >
          <div className="follow_footer text-center text-slate-50 font-bold mt-5 text-xl">
            Follow Us
          </div>
          <div className="social_platform flex items-center justify-center gap-5 mt-5">
            <Link
              href={"https://x.com/AshleyJacksonOG"}
              target="_blank"
              className="social cursor-pointer text-slate-50 font-semibold text-sm hover:text-blue-800"
            >
              Twitter
            </Link>
            <Link
              href={"https://www.instagram.com/og_yashjadhav"}
              target="_blank"
              className="social cursor-pointer text-slate-50 font-semibold text-sm hover:text-blue-800"
            >
              Instagram
            </Link>
            <Link
              href={"https://www.youtube.com/@AshJackson-007/streams"}
              target="_blank"
              className="social cursor-pointer text-slate-50 font-semibold text-sm hover:text-blue-800"
            >
              Youtube
            </Link>
          </div>
          <form
            ref={form}
            onSubmit={handlesubmit}
            className="contactme flex flex-col item-center justify-center gap-4 px-2 mt-3"
            style={{ fontFamily: roboto_mono }}
            id="question"
          >
            <input
              type="text"
              name="name"
              placeholder="username"
              className="input rounded-md text-slate-50 px-2 py-3"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              className="input rounded-md text-slate-50 px-2 py-3"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              cols={40}
              name="message"
              placeholder="questions ?"
              className="input rounded-md text-slate-50 px-2 py-3"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>

            <div>
              <label className="font-semibold text-xs text-white mb-2">
                give me a rating about your front dev skill
              </label>
              <br/>
              <label className="font-semibold text-xs text-orange-500/70 mb-1">
                (0 = bad, 5 = average, 9 = excellent)
              </label>
              <div className="flex items-center justify-evenly gap-4 px-4 py-2.5 rounded-md border border-white">
              {arr.map((el) => (
                <div className="flex flex-col items-center gap-2">
                  <input type="radio" id={el} name="rating" className="cursor-pointer" value={el} onChange={(e) => setRating(e.target.value)}/>
                  <label className="text-white font-semibold text-base">
                    {el}
                  </label>
                </div>
              ))}
              </div>
            </div>
            <input
              type="submit"
              className="px-2 py-3 rounded-md cursor-pointer bg-purple-800 text-slate-50"
              value="Submit"
            />
          </form>
        </div>
      </main>
    </>
  );
}
