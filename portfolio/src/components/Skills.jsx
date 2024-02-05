import React from "react";
import htmlicon from "../assets/html.png";
import cssicon from "../assets/css.png";
import jsicon from "../assets/js.jpg";
import reacticon from "../assets/react.png";
import githubicon from "../assets/github.png";
import nodeicon from "../assets/node.png";
import postgressqlicon from "../assets/PostgreSQL-Logo.wine.png";
import nexticon from "../assets/next-JS-framework.png";
import bootstrapicon from "../assets/bootstrap.png";
import tailwindicon from "../assets/tailwind.png";
import materialicon from "../assets/material-UI.png";
import tddicon from "../assets/test-driven-development-TDD.webp";

const Skills = () => {
  return (
    <div name="skills" className="h-screen w-full bg-[#d8e9f3] text-blue-900">
      
      <div className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col mb-14 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center ">
            Skills
          </p>
        </div>
        <div className=" grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-5 bg-[#e3ebd0]">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={htmlicon}
              alt="my profile"
              className="rounded-full 3xl mx-auto w-2/3 md:w-rounded mt-7"
            />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={cssicon}
              alt="my profile"
              className="rounded-full 3xl mx-auto w-2/3 md:w-rounded mt-7"
            />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={jsicon}
              alt="my profile"
              className="rounded-full 2xl mx-auto w-2/3 md:w-rounded"
            />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={reacticon}
              alt="my profile"
              className="rounded-full 3xl mx-auto w-2/3 md:w-rounded bg-black mt-3"
            />
            <p>React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={githubicon}
              alt="my profile"
              className="rounded-full 3xl mx-auto w-2/3 md:w-rounded bg-black"
            />
            <p>Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={nodeicon}
              alt="my profile"
              className="rounded-full 3xl mx-auto w-2/3 md:w-rounded"
            />
            <p>NodeJs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={postgressqlicon}
              alt="my profile"
              className="rounded-full 5xl mx-auto w-3/3 md:w-rounded"
            />
            <p>posgreSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={nexticon}
              alt="my profile"
              className="rounded-full 3xl mx-auto w-2/3 md:w-rounded mt-7"
            />
            <p>NextJs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={tailwindicon}
              alt="my profile"
              className="rounded-full 3xl mx-auto w-2/3 md:w-rounded"
            />
            <p>Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={materialicon}
              alt="my profile"
              className="rounded-full 3xl mx-auto w-2/3 md:w-rounded"
            />
            <p>Material UI</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={bootstrapicon}
              alt="my profile"
              className="rounded-full 3xl mx-auto w-2/3 md:w-rounded"
            />
            <p>Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={tddicon}
              alt="my profile"
              className="rounded-full 3xl mx-auto w-2/3 md:w-rounded"
            />
            <p>TDD</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
