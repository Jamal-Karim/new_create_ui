"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Session } from "next-auth";
import { signIn, signOut, getProviders } from "next-auth/react";

type Provider = {
  id: string;
  name: string;
};

type NavbarProps = {
  session: Session;
};

const Navbar: React.FC<NavbarProps> = ({ session }: NavbarProps) => {
  const [providers, setProviders] = useState<Record<string, Provider> | null>(
    null
  );
  const [toggleDropdown, setToggleDropdown] = useState(false);

  // Analytics navbar link clicks
  useEffect(() => {
    function handleClick(event) {
      console.log(event);
      if (
        event.target.tagName === "A" &&
        event.target.textContent === "Create" &&
        typeof window !== "undefined" &&
        (window as any).gtag
      ) {
        (window as any).gtag("event", "navbar_create_click", {
          link_text: event.target.innerText,
          link_id: event.target.id,
        });
      }
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    getProviders().then(setProviders);
  }, []);

  const handleSignOut = () => {
    setToggleDropdown(false);
    signOut();
  };

  return (
    <nav>
      <div className="flex justify-around items-center mb-16">
        <img src="/logo.svg"></img>
        <div className="ml-auto mr-36">
          <a className="mr-9 text-sm font-semibold" href="#">
            Tour Platform
          </a>
          <a className="mr-9 text-sm font-semibold" href="#">
            Pricing
          </a>
          <a className="mr-9 text-sm font-semibold" href="#">
            FAQ
          </a>
          <a className="mr-9 text-sm font-semibold" href="#">
            Company
          </a>
        </div>
        {session ? (
          <button
            type="button"
            onClick={() => handleSignOut()}
            className="bg-purpleBtn p-3 px-4 text-white rounded-md"
          >
            Sign out
          </button>
        ) : (
          <button
            type="button"
            onClick={() => signIn()}
            className="bg-purpleBtn p-3 px-4 text-white rounded-md"
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
