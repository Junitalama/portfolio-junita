import React, { useState } from "react";

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Your form submission logic here

      // Set the state to true when the form is successfully submitted
      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error if the form submission fails
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#d8e9f3] flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[500px] w-full">
        <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-blue-900">
            Contact
          </p>
          <p className="text-blue-900 py-4">Send me a message</p>
        </div>
        <form
          onSubmit={handleSubmit}
          action="https://getform.io/f/939f7ecf-2a91-4a0b-8b59-aa55ec3e2812"
          method="POST"
        >
          <input
            className="bg-[#f8f9fc] p-1"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-3 p-1 bg-[#f8f9fc]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#f8f9fc] p-2"
            name="message"
            rows="5"
            placeholder="Message"
          ></textarea>
          <button className="text-blue-900 bg-orange-600 100 border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center">
            SEND
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
