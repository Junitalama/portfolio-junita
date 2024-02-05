import React from "react";
import song from "../assets/song-sieve.png";
import hotel from "../assets/cyf-hotel.png";
import tv from "../assets/tv-show.png";
import weather from "../assets/weather.png";
import cityfarm from "../assets/city-farm.png"

const Projects = () => {
  return (
    <div name="projects" className="bg-[#d8e9f3] py-10 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Project */}
          <div className="bg-[#e3ebd0] rounded-lg shadow-lg p-6">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={cityfarm}
                alt="city-farm-pic"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              Volunteers Booking APP
            </h3>
            <p className="text-gray-900 text-sm mt-2">
              This app helps voluteers to book a session, cancel a session and
              register themselves as a volunteer. volunteers can also see
              available sessions. Manger can see all the bookings list and
              volunteers datails.
            </p>
            <p className="text-gray-900 text-sm mt-2">
              <strong>Technologies:</strong> Github action, CICD pipeline,
              Amazon EC2, Amazon s3 bucket, amazon RDS, Amazon Web Services
              (AWS), Express.js, PostgreSQL, Node.js, React.js
            </p>
            <div className="flex items-center justify-between mt-4">
              <button class="bg-gray-900 text-white py-1 px-4 rounded-full font-bold  hover:bg-gray-800 ">
                <a href="http://city-farm.s3-website.eu-west-2.amazonaws.com/">
                  Live
                </a>
              </button>
              <button className="bg-gray-900 text-white py-1 px-4 rounded-full font-bold hover:bg-gray-800">
                <a href="https://github.com/Junitalama/city_farm_volunteers">
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="bg-[#e3ebd0] rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={song}
                alt="song-sieve"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              Spotify-song-sieve
            </h3>
            <p className="text-gray-900 text-sm mt-2">
              Spotify Playlist Sieve allows users to filter Spotify playlists
              based on length and content preferences, enhancing the overall
              music discovery experience. This project demonstrates effective
              teamwork, communication, and adherence to agile principles,
              contributing to the successful delivery of a user-friendly and
              innovative application. .
            </p>
            <p className="text-gray-900 text-sm mt-2">
              <strong>Technologies: </strong>React, JavaScript, CSS, PostgreSQL,
              Node.js, Spotify API, PKCE OAuth flow, Tailwind CSS, Render,
              ElephantSQL, Agile methodology,github planner board.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button class="bg-gray-900 text-white py-1 px-4 rounded-full font-bold  hover:bg-gray-800 ">
                <a href="https://song-sieve-frontend.onrender.com">Live</a>
              </button>
              <button className="bg-gray-900 text-white py-1 px-4 rounded-full font-bold hover:bg-gray-800">
                <a href="https://github.com/Afsha10/song-sieve">code</a>
              </button>
            </div>
          </div>

          <div className="bg-[#e3ebd0] rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              a
              <img
                className="object-cover w-full h-full"
                src={tv}
                alt="TV Show"
              />
              <div class="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mt-4">TV Show App</h3>
            <p class="text-gray-900 text-sm mt-2">
              This application empowers users with seamless access to a wide
              array of captivating TV series and episodes, meticulously curated
              and seamlessly integrated via advanced APIs. Delve into an
              immersive experience as you effortlessly navigate through an
              extensive library, enriched by a dynamic live search
              functionality, ensuring swift and efficient access to tv shows.
            </p>
            <p class="text-gray-900 text-sm mt-2">
              <strong>Technologies:</strong> DOM manipulation, JavaScript, Event
              Listners, fetch API , async/await and bootstrap, Netlify.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button class="bg-gray-900 text-white py-1 px-4 rounded-full font-bold  hover:bg-gray-800 ">
                <a href="https://cyf-junitalama-tv.netlify.app/">Live</a>
              </button>
              <button className="bg-gray-900 text-white py-1 px-4 rounded-full font-bold hover:bg-gray-800">
                <a href="https://github.com/Junitalama/tv-show-dom-project">
                  Code
                </a>
              </button>
            </div>
          </div>

          <div class="bg-[#e3ebd0] rounded-lg shadow-lg p-8">
            <div class="relative overflow-hidden">
              <img
                class="object-cover w-full h-full"
                src={hotel}
                alt="Cyf Hotel"
              />
              <div class="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mt-4">Hotel App</h3>
            <p className="text-gray-900 text-sm mt-2">
              This Hotel Booking App allows users to see the informations about
              the popular tourist destinations. it shows booking list and search
              customers by filtering.
            </p>
            <p className="text-gray-900 text-sm mt-2">
              <strong>Technologies:</strong>React, JavaScript, bootstrap, fetch
              API, Netlify.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button class="bg-gray-900 text-white py-1 px-4 rounded-full font-bold  hover:bg-gray-800 ">
                <a href="https://cyf-junitalama-hotel-react.netlify.app/">
                  Live
                </a>
              </button>
              <button className="bg-gray-900 text-white py-1 px-4 rounded-full font-bold hover:bg-gray-800">
                <a href="https://github.com/Junitalama/cyf-hotel-react">Code</a>
              </button>
            </div>
          </div>
          <div className="bg-[#e3ebd0] rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={weather}
                alt="Cyf Hotel"
              />
              <div class="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mt-4">Weather App</h3>
            <p className="text-gray-900 text-sm mt-2">
              This application provides users with the ability to effortlessly
              check the weather for various locations. Users can simply input
              the name of a city, and instantly access the current weather
              conditions and forecast for that particular locations.
            </p>
            <p className="text-gray-900 text-sm mt-2">
              <strong>Technologies:</strong>DOM manipulation, Rest API, fetch,
              unsplash API, openweathermap API, Netlify.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button class="bg-gray-900 text-white py-1 px-4 rounded-full font-bold  hover:bg-gray-800 ">
                <a href="https://junita-weather-app.netlify.app/">Live</a>
              </button>
              <button className="bg-gray-900 text-white py-1 px-4 rounded-full font-bold hover:bg-gray-800">
                <a href="https://github.com/Junitalama/weather-app">Code</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
