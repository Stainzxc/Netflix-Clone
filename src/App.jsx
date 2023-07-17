import { Button, Card, Checkbox, Input } from "antd";
import netflixLogo from "./assets/images/netflixLogo.svg";

function App() {
  return (
    <div>
      <div className="h-[112vh] w-screen bg-[url('./assets/images/netflixbg.jpg')] bg-cover bg-center">
        <div className="w-screen h-[112vh] bg-slate-900/30 backdrop-brightness-50">
          <div className="py-4 mx-14 text-white">
            <img src={netflixLogo} alt="" className="h-16 w-44" />
          </div>
          <div className="max-w-[700px] h-auto w-screen mx-auto flex justify-center items-center ">
            <Card className="w-[450px] bg-black bg-opacity-75 rounded-sm border-none">
              <div className="m-8">
                <h1 className="text-white font-semibold text-4xl py-2">
                  Sign In
                </h1>
                <Input
                  className="rounded-md px-5 py-3 mt-6 bg-[#333] placeholder:text-[#8c8c8c] text-base text-white border-none leading-loose"
                  placeholder="Email or phone number"
                />
                <Input
                  className="rounded-md px-5 py-3 mt-6 bg-[#333] placeholder:text-[#8c8c8c] text-base text-white border-none leading-loose"
                  placeholder="Password"
                />
                <Button className="bg-[#e50914] py-6 border-none mt-10 w-full text-base font-bold flex justify-center items-center text-white">
                  Sign In
                </Button>
                <div className="flex items-center justify-between">
                  <Checkbox className="mt-2 text-[#8c8c8c]">
                    Remember me
                  </Checkbox>
                  <span className="mt-2 text-[#8c8c8c]">Need help?</span>
                </div>
                <p className="mt-16 text-[#8c8c8c] text-base">
                  New to Netflix?{" "}
                  <span className="text-white">Sign up now.</span>
                </p>
                <p className="mt-4 text-[#8c8c8c]">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. <span className="text-[#0071eb]">Learn more.</span>
                </p>
              </div>
            </Card>
          </div>
          <div className="bg-black bg-opacity-75 w-full h-[300px] mt-24">
            <div className="max-w-[1100px] mx-auto h-full">
              <div className="py-4">
                <p className="text-[#8c8c8c] text-base font-serif">
                  Questions? Contact us.
                </p>
              </div>
              <div className="py-4 grid grid-cols-4 justify-around">
                <div>
                  <p className="text-[#8c8c8c] text-base font-serif">FAQ</p>
                </div>
                <div>
                  <p className="text-[#8c8c8c] text-base font-serif">
                    Help Center
                  </p>
                </div>
                <div>
                  <p className="text-[#8c8c8c] text-base font-serif">
                    Terms of Use
                  </p>
                </div>
                <div>
                  <p className="text-[#8c8c8c] text-base font-serif">Privacy</p>
                </div>
              </div>
              <div className="py-4 grid grid-cols-4 justify-around">
                <div>
                  <p className="text-[#8c8c8c] text-base font-serif">
                    Cookie Preferences
                  </p>
                </div>
                <div>
                  <p className="text-[#8c8c8c] text-base font-serif">
                    Corporate Information
                  </p>
                </div>
              </div>
              <div>
                <select className="bg-transparent text-[#8c8c8c] text-base font-serif border-[1px] py-2 px-8">
                  <option value="">English</option>
                  <option value="">Filipino</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
