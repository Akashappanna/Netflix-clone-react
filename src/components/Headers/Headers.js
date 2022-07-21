import React from "react";

import "./Headers.css";
import logo from "../../assests/NetFlixLogo.png";
import tv from "../../assests/tv.png";
import mobile from "../../assests/mobile.jpg";
import devices from "../../assests/devices.png";
import profile from "../../assests/profile.png";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <React.Fragment>
      {/* style={{ height: "100vh" }} */}
      <header className="bg-Netflix-header h-fit md:h-screen">
        <div className="flex flex-col bg-header-main pb-4">
          <div className="flex flex-row items-center justify-between px-4">
            <img src={logo} alt="logo" className="w-36" />
            <div className="flex flex-row items-center">
              <select className="border-2 outline-2 px-4 py-1 mr-2 rounded text-white bg-transparent">
                <option className="bg-transparent" value="English">
                  English
                </option>
                <option className="bg-transparent" value="other">
                  other
                </option>
              </select>
              <button
                type="button"
                className="px-4 py-2 bg-red-600 text-sm rounded text-white"
              >
                <Link to="/netflix">Sign in</Link>
              </button>
            </div>
          </div>

          <div className="mt-40">
            <div
              className="flex justify-center
        items-center text-3xl text-white font-semibold"
            >
              Unlimited movies, TV shows and more
            </div>
            <p className="text-xl p-2 text-white font-medium">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-xl p-2 text-white font-medium">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center m-auto">
              <input
                type="text"
                name="text"
                className="outline-none px-2 py-5 w-96 rounded"
                placeholder="Email"
              />
              <button
                type="button"
                className="px-4 py-2 bg-red-600 text-xl md:py-4 md:text-3xl rounded text-white mt-5 md:mt-0"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-black">
        <div
          className="border-t-8 border-teal-800
         flex flex-col md:flex-row py-7 justify-center text-white items-center"
        >
          <div className="w-4/5 m-auto">
            <h1 className="text-2xl font-bold py-2">Enjoy on your TV. </h1>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="relative">
            <img src={tv} alt="tv" className="relative w-4/5 m-auto z-10" />
            <video
              className="absolute w-3/5 inset-0 m-auto h-fit"
              autoPlay
              muted
              loop
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div
          className="border-t-8 border-teal-800
         flex flex-col  md:flex-row py-7 justify-center text-white items-center"
        >
          <div className="relative hidden md:block">
            <img
              src={mobile}
              alt="mobile"
              className="relative w-4/5 m-auto z-10"
            />
          </div>
          <div className="w-4/5 m-auto">
            <h1 className="text-2xl font-bold py-2">
              Download your shows to watch offline.
            </h1>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
          <div className="relative md:hidden">
            <img
              src={mobile}
              alt="mobile"
              className="relative w-4/5 m-auto z-10"
            />
          </div>
        </div>

        <div
          className="border-t-8 border-teal-800
         flex flex-col md:flex-row py-7 justify-center text-white items-center"
        >
          <div className="w-4/5 m-auto">
            <h1 className="text-2xl font-bold py-2">Watch everywhere.</h1>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="relative">
            <img
              src={devices}
              alt="devices"
              className="relative w-4/5 m-auto z-10"
            />

            <video
              className="absolute w-64 inset-0 m-auto h-fit bottom-32"
              autoPlay
              muted
              loop
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div
          className="border-t-8 border-teal-800
         flex flex-col md:flex-row py-7 justify-center text-white items-center"
        >
          <div className="relative hidden md:block">
            <img
              src={profile}
              alt="profile"
              className="relative w-4/5 m-auto z-10"
            />
          </div>
          <div className="w-4/5 m-auto">
            <h1 className="text-2xl font-bold py-2">
              Create profiles for children.
            </h1>
            <p>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>

          <div className="relative md:hidden">
            <img
              src={profile}
              alt="profile"
              className="relative w-4/5 m-auto z-10"
            />
          </div>
        </div>

        <div
          className="border-y-8 border-teal-800
         flex flex-col  py-7 justify-center text-white items-center"
        >
          <h3 className="text-center font-bold text-white text-2xl ">
            Frequently Asked Questions
          </h3>

          <div
            className="flex flex-row justify-between
          bg-teal-800 text-xl py-3 px-3 items-start w-4/5 md:w-3/5 my-3"
          >
            <p>What is Netflix?</p>
            <p>+</p>
          </div>

          <div
            className="flex flex-row justify-between
          bg-teal-800 text-xl py-3 px-3 items-start w-4/5 md:w-3/5 my-3"
          >
            <p>How much does Netflix cost?</p>
            <p>+</p>
          </div>

          <div
            className="flex flex-row justify-between
          bg-teal-800 text-xl py-3 px-3 items-start w-4/5 md:w-3/5 my-3"
          >
            <p>Where can I watch?</p>
            <p>+</p>
          </div>

          <div
            className="flex flex-row justify-between
          bg-teal-800 text-xl py-3 px-3 items-start w-4/5 md:w-3/5 my-3"
          >
            <p>How do I cancel?</p>
            <p>+</p>
          </div>

          <div
            className="flex flex-row justify-between
          bg-teal-800 text-xl py-3 px-3 items-start w-4/5 md:w-3/5 my-3"
          >
            <p>What can I watch on Netflix?</p>
            <p>+</p>
          </div>

          <div
            className="flex flex-row justify-between
          bg-teal-800 text-xl py-3 px-3 items-start w-4/5 md:w-3/5 my-3"
          >
            <p>Is Netflix good for kids?</p>
            <p>+</p>
          </div>

          <div className="text-white text-1xl mt-4 w-3/5">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>

          <div className="flex flex-col md:flex-row justify-center mt-4 items-center m-auto">
            <input
              type="text"
              name="text"
              className="outline-none px-2 py-5 w-96 rounded"
              placeholder="Email"
            />
            <button
              type="button"
              className="px-4 py-2 bg-red-600 text-xl md:py-4 md:text-3xl rounded text-white mt-5 md:mt-0"
            >
              Get Started
            </button>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Headers;
