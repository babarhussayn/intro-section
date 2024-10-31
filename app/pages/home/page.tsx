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
          <div className="md:grid md:grid-cols-2 md:gap-28 gap-6 w-full flex-col flex justify-center items-center">
            <div className="w-full flex justify-center items-center md:hidden">
              {" "}
              <Image
                src="/images/image-hero-mobile.png"
                alt="mobile"
                height={200}
                width={700}
              />
            </div>
            <div className=" flex justify-center items-center">
              <div className="w-full flex justify-center flex-col gap-8">
                <div className="">
                  <div className="flex justify-center items-center gap-4 md:block">
                    <h3 className="md:text-7xl text-4xl text-start font-bold">
                      Make{" "}
                    </h3>
                    <p className="md:text-7xl text-4xl text-start font-bold">
                      remote work
                    </p>
                  </div>
                </div>
                <div className="flex md:justify-start justify-center items-center w-full">
                  <div className="md:w-[400px] w-[350px] flex md:justify-end justify-center items-center">
                    <p className="text-lg md:text-start text-center text-[#adadad]">
                      Get your team in sync ,no matter your location. Streamline
                      processes, create team rituals, and watch productivity
                      soar.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center md:block">
                  <Button className="hover:bg-white hover:text-black">
                    Learn more
                  </Button>
                </div>
                <div className="flex justify-center items-center gap-8 md:mt-16 flex-row ">
                  <div className="flex justify-center items-center md:gap-8 gap-4 p-8 md:p-0">
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
            <div className="w-full hidden md:block">
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
