import Image from "next/image";
import React from "react";
import cyber from "@/public/cyber.png";
import cybersmall from "@/public/small.png";
import down from "@/public/down.png"
import tos6 from "@/public/2075--2075.png";
import smiley from "@/public/smiley.png"

export default function CyberPunk() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center w-full   ">
          <div className=" w-full h-[80vh]  ">
            <div className="grid grid-cols-12 w-full h-full">
              <div className="col-span-4 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h4 className="font-febre_black pl-[10%] text-[38px] box-shadow">
                      THE FUTURE IS UPON US
                    </h4>
                    <p className=" font-agency_fb text-[24px] leading-normal box-shadow">
                      Not what we dreamed of?Killer Machines,Cyborg
                      Assasins,Neuro Hacking,Quantum Control.We got what we
                      asked for in request for advancement..........
                    </p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <Image src={smiley} alt="smiley" />
                    <div className="flex">
                      <div className=" w-[12px] bg-black h-[189px] border-black" />
               
                    </div>

                    <Image src={tos6} className="w-[40%]" alt="2075" />
                  </div>
                </div>
              </div>
              <div
                className="col-span-4 w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] "
                style={style.bg}
              >
                <div className="flex justify-center items-end h-full">
                  <Image className="" src={cyber} alt="cyber" />
                </div>
              </div>

              <div className="col-span-4 w-full h-full pl-[10%]">
                <div className="grid grid-cols-4 h-full">
                  <div className="col-span-3 h-full">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <h4 className=" uppercase font-febre_black text-[38px] pl-[30%] box-shadow">
                          prediction 2075
                        </h4>

                        <p className="font-agency_fb text-[24px] box-shadow">
                          Will the A.I conquer humans and make them slaves or
                          Will the hymans prevail and ascertain their dominance
                          in this new age?........
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <Image
                          className="w-[70%]"
                          src={cybersmall}
                          alt="cybersmall"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1  h-full">
                    <div className=" mt-[10rem] flex justify-center">
                      <Image src={down} className="w-[60%]" alt="down" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -z-[100] flex justify-center items-center">
            <div className="text-[142px] font-airnt ">
              <h1 className="cyb">CYBERPUNK</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const style = {
  bg: {
    background:
      "linear-gradient(180deg, #000 0%, rgba(7, 7, 7, 0.97) 0.01%, rgba(255, 255, 255, 0.00) 14.58%)",

    backgroundPosition: "50%",

    width: "100%",
    height: "100%",
  },
};
