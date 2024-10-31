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
            <div className="">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[#adadad] font-bold">
                      Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 w-[150px] justify-center items-center">
                        <li className="flex justify-center items-center gap-4">
                          <div></div>
                          <Image
                            src="/images/icon-todo.svg"
                            alt="todo"
                            width={20}
                            height={30}
                          />{" "}
                          <h4 className="">Todo</h4>
                        </li>
                        <li className="flex justify-center items-center gap-4">
                          {" "}
                          <Image
                            src="/images/icon-calendar.svg"
                            alt="todo"
                            width={20}
                            height={30}
                          />{" "}
                          Calendar
                        </li>
                        <li className="flex justify-center items-center gap-4">
                          {" "}
                          <Image
                            src="/images/icon-reminders.svg"
                            alt="todo"
                            width={20}
                            height={30}
                          />
                          <p> Reminders</p>
                        </li>
                        <li className="flex justify-center items-center gap-4">
                          {" "}
                          <Image
                            src="/images/icon-planning.svg"
                            alt="todo"
                            width={20}
                            height={30}
                          />
                          <p> Planing</p>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[#adadad] font-bold">
                      Company
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 ">
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
          <div className="w-full">
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
        </div>
      </div>
    </>
  );
}
