"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const simpleLink = [
  {
    name: "Careers",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
];

export function Header() {
  const [isShow, setIsShow] = React.useState(false);
  const handleOpen = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <>
      <div className="w-full ">
        <div className="flex justify-center items-center gap-8 p-6">
          <div className="w-full flex justify-start items-center gap-8">
            <div>
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={100}
                height={50}
              />
            </div>
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[#adadad] font-bold">
                      Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 w-[150px] justify-center items-center">
                        <li className="flex justify-center items-center gap-4">
                          <div className="w-full">
                            <Image
                              src="/images/icon-todo.svg"
                              alt="todo"
                              width={20}
                              height={30}
                            />{" "}
                          </div>
                          <div className="flex justify-end w-full">
                            <h4 className="text-center">Todo</h4>
                          </div>
                        </li>
                        <li className="flex justify-center items-center gap-4">
                          {" "}
                          <div className="w-full">
                            <Image
                              src="/images/icon-calendar.svg"
                              alt="todo"
                              width={20}
                              height={30}
                            />{" "}
                          </div>
                          <div className="flex w-full">
                            <h4>Calendar</h4>
                          </div>
                        </li>
                        <li className="flex justify-center items-center gap-4">
                          {" "}
                          <div className="w-full">
                            <Image
                              src="/images/icon-reminders.svg"
                              alt="todo"
                              width={20}
                              height={30}
                            />
                          </div>
                          <div>
                            <p> Reminders</p>
                          </div>
                        </li>
                        <li className="flex justify-center items-center gap-4">
                          {" "}
                          <div className="w-full">
                            <Image
                              src="/images/icon-planning.svg"
                              alt="todo"
                              width={20}
                              height={30}
                            />
                          </div>
                          <div>
                            <p> Planing</p>
                          </div>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[#adadad] font-bold">
                      Company
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 w-[150px]">
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  {simpleLink.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <div className="flex justify-center items-center ">
                        <Link href={item.link} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            <h3 className="text-[#adadad] font-bold">
                              {" "}
                              {item.name}
                            </h3>
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="w-full hidden md:block">
            <div className="flex justify-end items-center gap-8">
              <div>
                <Button className="bg-white text-[#adadad] hover:bg-white">
                  Login
                </Button>
              </div>
              <div>
                <Button className="bg-white text-[#adadad] border border-black hover:text-white ">
                  Register
                </Button>
              </div>
            </div>
          </div>
          {/********************************Mobile screens ********************************/}

          <div className="md:hidden top-0 ">
            {isShow ? (
              <div className="flex justify-center items-center flex-col right-0">
                <div>
                  <Image
                    src="/images/icon-close-menu.svg"
                    alt="menu-icon"
                    width={50}
                    height={50}
                    onClick={handleOpen}
                  />
                </div>
                <div className="flex justify-center items-center flex-col absolute top-0 mt-16 bg-white w-[70%] h-full right-0 transition-all duration-100 ease-in ">
                  <div className=" md:hidden flex justify-center items-center flex-col">
                    <NavigationMenu className="flex justify-center items-center flex-col">
                      <NavigationMenuList className="flex justify-center items-center flex-col gap-8">
                        <NavigationMenuItem>
                          <NavigationMenuTrigger className="text-[#adadad] font-bold">
                            Features
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 w-[150px] justify-center items-center ">
                              <li className="flex justify-center items-center gap-4">
                                <div className="w-full">
                                  <Image
                                    src="/images/icon-todo.svg"
                                    alt="todo"
                                    width={20}
                                    height={30}
                                  />{" "}
                                </div>
                                <div className="flex justify-end w-full">
                                  <h4 className="text-center">Todo</h4>
                                </div>
                              </li>
                              <li className="flex justify-center items-center gap-4">
                                {" "}
                                <div className="w-full">
                                  <Image
                                    src="/images/icon-calendar.svg"
                                    alt="todo"
                                    width={20}
                                    height={30}
                                  />{" "}
                                </div>
                                <div className="flex w-full">
                                  <h4>Calendar</h4>
                                </div>
                              </li>
                              <li className="flex justify-center items-center gap-4">
                                {" "}
                                <div className="w-full">
                                  <Image
                                    src="/images/icon-reminders.svg"
                                    alt="todo"
                                    width={20}
                                    height={30}
                                  />
                                </div>
                                <div>
                                  <p> Reminders</p>
                                </div>
                              </li>
                              <li className="flex justify-center items-center gap-4">
                                {" "}
                                <div className="w-full">
                                  <Image
                                    src="/images/icon-planning.svg"
                                    alt="todo"
                                    width={20}
                                    height={30}
                                  />
                                </div>
                                <div>
                                  <p> Planing</p>
                                </div>
                              </li>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger className="text-[#adadad] font-bold">
                            Company
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 w-[150px]">
                              <li>History</li>
                              <li>Our Team</li>
                              <li>Blog</li>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        {simpleLink.map((item, index) => (
                          <NavigationMenuItem key={index}>
                            <div className="flex justify-center items-center ">
                              <Link href={item.link} legacyBehavior passHref>
                                <NavigationMenuLink
                                  className={navigationMenuTriggerStyle()}
                                >
                                  <h3 className="text-[#adadad] font-bold">
                                    {" "}
                                    {item.name}
                                  </h3>
                                </NavigationMenuLink>
                              </Link>
                            </div>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>
                  <div className="w-full  md:hidden flex justify-center items-center flex-col">
                    <div className="flex justify-end items-center flex-col gap-8">
                      <div>
                        <Button className="bg-white text-[#adadad] hover:bg-white">
                          Login
                        </Button>
                      </div>
                      <div>
                        <Button className="bg-white text-[#adadad] border border-black hover:text-white ">
                          Register
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Image
                src="/images/icon-menu.svg"
                alt="close"
                width={50}
                height={50}
                onClick={handleOpen}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
