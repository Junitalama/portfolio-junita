import React, { useState } from "react";

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);

    }
  };

  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-[#d8e9f3] flex justify-center items-center p-4 pt-16"
    >
      <div>
        <form
          onSubmit={handleSubmit}
          method="POST"
          action="https://getform.io/f/939f7ecf-2a91-4a0b-8b59-aa55ec3e2812"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-sky-100 text-[25px] py-4">Send a Message</p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="7"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 font-bold px-4 py-3 my-8 mx-auto flex items-center">
            Submit
          </button>
        </form>
      </div>

      {isFormSubmitted && (
        <p className="text-green-600 font-bold text-center">
          Message submitted successfully!
        </p>
      )}
    </div>
  );
};

export default Contact;
