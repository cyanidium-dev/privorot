"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import { routes, footerLinks } from "@/utils/routes";
import ContactModal from "./modals/ContactModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar maxWidth="xl" shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      {/* Брендинг */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Logo</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Навигационные ссылки для десктопа */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {routes.map((route) => (
          <NavbarItem key={route.path}>
            <Link color="foreground" href={route.path}>
              {route.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ContactModal />
        </NavbarItem>
      </NavbarContent>

      {/* Бургер-меню */}
      <NavbarMenu>
        {routes.map((route) => (
          <NavbarMenuItem key={route.path}>
            <Link
              color="foreground"
              className="w-full"
              href={route.path}
              size="lg"
            >
              {route.name}
            </Link>
          </NavbarMenuItem>
        ))}

        <hr className="my-2 border-gray-300" />

        {footerLinks.map((link) => (
          <NavbarMenuItem key={link.path}>
            <Link
              color="foreground"
              className="w-full"
              href={link.path}
              size="lg"
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
