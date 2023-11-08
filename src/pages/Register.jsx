import React from "react";
import netflixLogo from "../assets/images/netflixLogo.svg";
import tvgif from "../assets/images/tvgif.gif";
import stranger from "../assets/images/stranger.png";
import kids from "../assets/images/kids.png";
import { Card, Input } from "antd";
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="h-screen w-full">
      <div className="bg-[url('./assets/images/netflixbg.jpg')] bg-center">
        <div className="h-[680px] w-full bg-slate-900/30 backdrop-brightness-50 ">
          <div className="max-w-[1200px] mx-auto flex items-center py-6">
            <div className="grow">
              <img src={netflixLogo} alt="" className="h-10 w-44" />
            </div>
            <div className="grow-0 ">
              <select className="bg-transparent text-white rounded-lg border-[#8c8c8c] text-base border-[1px] py-2 px-8">
                <option value="">English</option>
                <option value="">Filipino</option>
              </select>
              <Link to="/login"><button
                type="submit"
                className="bg-[#e50914] ml-6 py-2 px-4 border-none rounded-md text-base text-white hover:text-white"
              >
                Sign In
              </button></Link>
            </div>
          </div>
          <div className="max-w-[1000px] mx-auto my-52">
            <div className="flex justify-center items-center text-white font-sans text-5xl font-extrabold">
              <h1>Unlimited movies, TV shows, and more</h1>
            </div>
            <div className="flex justify-center items-center text-white text-xl my-4">
              <p>Watch anywhere. Cancel anytime.</p>
            </div>
            <div className="flex justify-center items-center text-white text-xl mx-46">
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
            <div className="relative grid grid-cols-3 max-w-[500px] mx-auto gap-2 ">
              <Input
                id="email"
                className="border-1 border-[#a3a3a3] col-span-2 mr-2 peer rounded-md px-5 pt-4 mt-5 placeholder-transparent hover:border-[#a3a3a3] text-base focus:border-white  text-white leading-loose bg-black bg-opacity-60"
                placeholder="Email or phone number"
                // rules={rules.email}
                // required
              />
              <label
                for="email"
                className="absolute left-0 top-7 px-5 text-[#a3a3a3] text-sm peer-placeholder-shown:text-base transition-all peer-placeholder-shown:top-8 peer-focus:top-7 peer-focus:text-sm"
              >
                Email address
              </label>
              <button
                type="submit"
                className="bg-[#e50914] border-none mt-5 px-5 rounded-md text-2xl flex justify-center items-center text-white hover:text-white hover:bg-opacity-90"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black h-[600px] border-b-4 border-t-8 border-[#2b2a2a] ">
          <div className="grid grid-cols-2 max-w-[1200px] mx-auto my-24 gap-2">
            <div className=" text-white flex flex-col justify-center">
              <h1 className="font-sans text-5xl font-extrabold mb-6 mr-1">
                Enjoy on your TV
              </h1>
              <p className="text-2xl mr-1">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <div>
              <img
                src={tvgif}
                alt=""
                className="shadow-lg h-[400px] w-[1050px]"
              />
            </div>
          </div>
        </div>
        <div className="bg-black h-[600px] border-y-4 border-[#2b2a2a] ">
          <div className="grid grid-cols-2 max-w-[1200px] mx-auto my-24 gap-2">
            <div className="bg-[url('./assets/images/mobilepic.jpg')] bg-cover bg-center h-[400px]">
              <div className="flex border-2 border-[#a3a3a3] rounded-xl max-w-[330px] mx-auto h-24 mt-64 bg-black">
                <div>
                  <img src={stranger} alt="" className="w-14 h-[90px] ml-2" />
                </div>
                <div className="flex flex-col justify-start items-center  ml-8 text-white text-md my-auto leading-5">
                  <h1 className="">Stranger Things</h1>
                  <p className="text-blue-500">Downloading ...</p>
                </div>
              </div>
            </div>
            <div className=" text-white flex flex-col justify-center">
              <h1 className="font-sans text-[50px] font-extrabold mb-6 ml-1">
                Download your shows to watch offline
              </h1>
              <p className="text-[25px] ml-1">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-black h-[600px] border-y-4 border-[#2b2a2a] ">
          <div className="grid grid-cols-2 max-w-[800px] mx-auto my-24 gap-2">
            <div className=" text-white flex flex-col justify-center">
              <h1 className="font-sans text-5xl font-extrabold mb-6 ml-1 leading-relaxed">
                Watch everywhere
              </h1>
              <p className="text-2xl ml-1">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-black h-[600px] border-b-4 border-t-8 border-[#2b2a2a] ">
          <div className="grid grid-cols-2 max-w-[1200px] mx-auto my-24 gap-2">
            <div>
              <img
                src={kids}
                alt=""
                className="shadow-lg h-[400px] w-[1050px]"
              />
            </div>
            <div className=" text-white flex flex-col justify-center">
              <h1 className="font-sans text-[55px] font-extrabold mb-6 mr-1">
                Create profiles for kids
              </h1>
              <p className="text-2xl mr-1">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-black h-[600px] border-b-4 border-t-8 border-[#2b2a2a] ">
          <div className="max-w-[1200px] mx-auto my-24">
            <div className=" text-white flex flex-col justify-center items-center">
              <h1 className="font-sans text-[55px] font-extrabold mb-6 mr-1">Frequently Asked Questions</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
