"use client";
import React from "react";
import Image from "next/image";
import { Navigation } from "./Menu";
import UserProfile from "./UserProfile";
import NabLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { ThemeSwitch } from "./ThemeSwitch";

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  //  console.log(session)
  return (
    <div className="shadow sticky backdrop-blur-xl overflow-hidden top-0 min-h-15 flex justify-center items-center  z-20">
      <div className="container mx-auto flex justify-between   items-center p-2 ">
        <div className=" flex justify-center items-center gap-4 ">
          <div className="lg:hidden flex">{<Navigation></Navigation>}</div>

          <Image
            src="/assets/Logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="max-sm:w-[40vw] max-w-2xl"
          />
        </div>
        <ul className=" lg:flex gap-4 hidden">
          <NabLink href={"/"}>Home</NabLink>
          <NabLink href={"/explore-car"}>Explore Cars</NabLink>
          <NabLink href={"/my-booking"}>My Booking</NabLink>
          <NabLink href={"/my-added-car"}>My Added </NabLink>
          <NabLink href={"/my-add"}>Add My Car</NabLink>
        </ul>
        <div className="flex  items-center gap-3">
          <ThemeSwitch></ThemeSwitch>
          {session ? (
            <UserProfile session={session} isPending={isPending}></UserProfile>
          ) : (
            <ul className="flex gap-4">
              <NabLink href={"/auth/login"}>Login</NabLink>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
