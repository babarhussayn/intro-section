import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface ImagesLogo {
  name: string;
  src: string;
}

const imageslogo: ImagesLogo[] = [
  {
    name: "datbiz",
    src: "/images/client-databiz.svg",
  },
  {
    name: "audio",
    src: "/images/client-audiophile.svg",
  },
  {
    name: "meet",
    src: "/images/client-meet.svg",
  },
  {
    name: "maker",
    src: "/images/client-maker.svg",
  },
];

const HomePage = () => {
  return (
    <div className="w-full flex justify-center items-center  mt-8">
      <div className=" w-[1400px]">
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-2 gap-28 w-full">
            <div className=" flex justify-center items-center">
              <div className="w-full flex justify-center flex-col gap-8">
                <div className="">
                  <div className="">
                    <h3 className="text-7xl text-start font-bold">Make </h3>
                    <p className="text-7xl text-start font-bold">remote work</p>
                  </div>
                </div>
                <div className="flex justify-start items-center w-full">
                  <div className="w-[400px] flex justify-end items-center">
                    <p className="text-lg text-start text-[#adadad]">
                      Get your team in sync ,no matter your location. Streamline
                      processes, create team rituals, and watch productivity
                      soar.
                    </p>
                  </div>
                </div>
                <div>
                  <Button className="hover:bg-white hover:text-black">
                    Learn more
                  </Button>
                </div>
                <div className="flex justify-center items-center gap-8 mt-16 flex-row">
                  <div className="flex justify-center items-center gap-8">
                    {imageslogo.map((items, index) => (
                      <Image
                        src={items.src}
                        alt="imges"
                        width={150}
                        height={50}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="w-full flex justify-center items-center">
                <Image
                  src="/images/image-hero-desktop.png"
                  alt="main-image"
                  width={500}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
