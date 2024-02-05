import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import photo from "../assets/junita.jpeg";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#d8e9f3]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-6xl font-bold text-black">
            Junita Lama
          </h2>
          <h3 className="text-2xl sm:text-3xl font-serif  bg-green">
            Software Developer
          </h3>
          <p className="text-gray-500 py-4 max-w-md">
            Looking for opportunity to work as a software developer.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-gray w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-400 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div className="ml-55">
          <div className="flex-row">
            <img
              src={photo}
              alt="my profile"
              className="rounded-full 3xl mx-auto w-2/3 md:w-rounded"
            />
          </div>
          <div className=" top-[35%] justify-center items-center ml-12">
            <ul className=" flex flex-row gap-3">
              <li className="w-[40px] h-[px45] flex justify-between items-center ml-[-10px] hover:ml-[-10px] mb m-2 duration-300 bg-blue-600 rounded-full ">
                <a
                  className="flex justify-between items-center w-full text-gray-300 ml-1"
                  href="https://www.linkedin.com/in/junita-lama-73b110252/"
                >
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li className="w-[45px] h-[45px] flex justify-between items-center ml-[-10px] hover:ml-[-10px] mb m-2 duration-300 bg-[#333333] rounded-full">
                <a
                  className="flex justify-between items-center w-full text-gray-300 ml-1"
                  href="https://github.com/Junitalama"
                >
                  <FaGithub size={40} />
                </a>
              </li>
              <li className="w-[45px] h-[45px] flex justify-between items-center ml-[-10px] hover:ml-[-10px] mb m-2 duration-300 bg-[#6fc2b0] rounded-full">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="mailto:lamajunitaa@gmail.com"
                >
                  <HiOutlineMail size={40} />
                </a>
              </li>
              <li className="w-[45px] h-[45px] flex justify-between items-center ml-[-10px] hover:ml-[-10px] mb m-2 duration-300 bg-[#565f69] rounded-full">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://docs.google.com/document/d/1y8I7RdoCUO-34e6m5jIvqJ-c6CBEtFWIJHZeMpD2fXI/edit?usp=sharing"
                >
                  <BsFillPersonLinesFill size={40} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
