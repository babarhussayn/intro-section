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
        <div className="flex justify-center items-center gap-8 p-4">
          <div className="w-full flex justify-start items-center gap-8">
            Logo
            <div className="">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6  ">
                        <li className="">Todo List</li>
                        <li>Calendar</li>
                        <li>Reminders</li>
                        <li>Planing</li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
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
                            {item.name}
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
              <div>login</div>
              <div>signin</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
