"use client";

import {
  Bars,
  House,
  Compass,
  Person,
  Gear,
  SquarePlus,
} from "@gravity-ui/icons";

import Link from "next/link";
import { Button, Drawer } from "@heroui/react";

export function Navigation() {
  const navItems = [
    {
      icon: House,
      label: "Home",
      href: "/",
    },
    {
      icon: Compass,
      label: "Explore Car",
      href: "/explore-car",
    },
    {
      icon: Person,
      label: "My Booking",
      href: "/my-booking",
    },
    {
      icon: SquarePlus,
      label: "My Add ",
      href: "/my-add",
    },
    
  ];

  return (
    <Drawer>
      <Button variant="outline" className={"border-none"}>
        <Bars />
      </Button>

      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />

            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>

            <Drawer.Body>
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-all hover:bg-gray-100 active:bg-gray-100"
                  >
                    <item.icon className="size-5" />

                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}
