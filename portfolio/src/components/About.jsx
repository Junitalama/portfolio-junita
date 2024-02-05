import React from "react";


const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="py-7 bg-[#d8e9f3] text-black-300 h-screen w-full"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-6 rounded-md bg-[#f3f4ef] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-3xl font-bold">
              <p>
                A software developer with experience in building Responsive and
                Scalable Web apps.
              </p>
            </div>
            <div>
              <p>
                {" "}
                Highly motivated software developer who has engaged in numerous
                web development projects individually and as a team. Experienced
                in various programming languages including HTML, CSS,
                JavaScript, React, Node js, Next.js, SQL. Willing to put all
                skills and experience to use for the right opportunity. Seeking
                for a good opportunity which helps for personal and professional
                growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
