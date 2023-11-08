import { Button, Card, Checkbox, Form, Input, Tooltip } from "antd";
import { useState } from "react";
import netflixLogo from "../assets/images/netflixLogo.svg";
import { rules } from "./rules";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="h-screen w-full">
      <div className=" bg-[url('./assets/images/netflixbg.jpg')] bg-cover bg-center">
        <div className=" bg-slate-900/30 backdrop-brightness-50 ">
          <div className="py-4 mx-14 text-white">
            <img src={netflixLogo} alt="" className="h-16 w-44" />
          </div>
          <div className="max-w-[700px] h-auto w-screen mx-auto flex justify-center items-center ">
            <Form>
              <Card className="w-[450px] bg-black bg-opacity-75 rounded-sm border-none">
                <div className="m-8">
                  <h1 className="text-white text-4xl py-2 font-serif">
                    Sign In
                  </h1>
                  <div className="relative">
                    <Input
                      id="email"
                      className="border-none peer rounded-md px-5 pt-4 mt-6 bg-[#333] placeholder-transparent text-base text-white leading-loose focus:bg-[#525151]"
                      placeholder="Email or phone number"
                      rules={rules.email}
                      // required
                    />
                    <label
                      for="email"
                      className="absolute left-0 top-7 px-5 text-[#a3a3a3] text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-[#8c8c8c] transition-all peer-placeholder-shown:top-10 peer-focus:top-7 peer-focus:text-[#a3a3a3] peer-focus:text-xs"
                    >
                      Email or phone number
                    </label>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      className="peer rounded-md px-5 pt-4 mt-6 bg-[#333] placeholder-transparent text-base text-white border-none leading-loose focus:bg-[#525151] "
                      placeholder="Password"
                      // rules={rules.password}
                      // value={isVisible ? 'Hide' : 'Show'}
                      // onClick={toggleVisibility}
                      // required
                    />
                    <label
                      for="password"
                      className="absolute left-0 top-7 px-5 text-[#a3a3a3] text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-[#8c8c8c] transition-all peer-placeholder-shown:top-10 peer-focus:top-7 peer-focus:text-[#a3a3a3] peer-focus:text-xs"
                    >
                      Password
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#e50914] py-3 border-none mt-6 rounded-md w-full text-base font-bold flex justify-center items-center text-white hover:text-white"
                  >
                    Sign In
                  </button>

                  <div className="flex items-center justify-between">
                    <label className="text-[#8c8c8c]">
                      <input
                        type="checkbox"
                        className="mr-1 h-4 w-4 mt-2"
                        // checked={isChecked}
                        // onChange={handleCheckboxChange}
                      />
                      Remember me
                    </label>
                    {/* <Checkbox className="mt-2 text-[#8c8c8c]">
                    
                  </Checkbox> */}
                    <span className="mt-2 text-[#8c8c8c]">Need help?</span>
                  </div>
                  <p className="mt-16 text-[#8c8c8c] text-base">
                    New to Netflix?{" "}
                    <Link to="/register"><span className="text-white">Sign up now.</span></Link>
                  </p>
                  <p className="mt-4 text-[#8c8c8c]">
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.{" "}
                    <span className="text-[#0071eb]">Learn more.</span>
                  </p>
                </div>
              </Card>
            </Form>
          </div>
          <div className="bg-black bg-opacity-75 h-[275px] mt-36">
            <div className="max-w-[1100px] mx-auto">
              <div className="py-4">
                <p className="text-[#8c8c8c] text-sm font-serif">
                  Questions? Contact us.
                </p>
              </div>
              <div className="py-4 grid grid-cols-4 justify-around">
                <div>
                  <p className="text-[#8c8c8c] text-sm font-serif">FAQ</p>
                </div>
                <div>
                  <p className="text-[#8c8c8c] text-sm font-serif">
                    Help Center
                  </p>
                </div>
                <div>
                  <p className="text-[#8c8c8c] text-sm font-serif">
                    Terms of Use
                  </p>
                </div>
                <div>
                  <p className="text-[#8c8c8c] text-sm font-serif">Privacy</p>
                </div>
              </div>
              <div className="py-4 grid grid-cols-4 justify-around">
                <div>
                  <p className="text-[#8c8c8c] text-sm font-serif">
                    Cookie Preferences
                  </p>
                </div>
                <div>
                  <p className="text-[#8c8c8c] text-sm font-serif">
                    Corporate Information
                  </p>
                </div>
              </div>
              <div>
                <select className="bg-transparent text-[#8c8c8c] text-sm font-serif border-[1px] py-2 px-8">
                  <option value="">English</option>
                  <option value="">Filipino</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
