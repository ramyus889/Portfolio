"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Tech = "/img/TechArsenal.svg";

export default function MPage() {
  const [image] = useState([
    {
      img: "/img/Framer.svg",
      name: "Framer",
      href: "https://www.framer.com/",
    },
    {
      img: "/img/Webflow.svg",
      name: "Webflow",
      href: "https://www.webflow.com/",
    },
    {
      img: "/img/Figma.svg",
      name: "Figma",
      href: "https://www.figma.com/",
    },
    {
      img: "/img/Shopify.svg",
      name: "Shopify",
      href: "https://www.shopify.com/",
    },
  ]);
  return (
    <div className="rounded-xl bg-[#101010] px-[30px] pb-[36px] pt-[20px]">
      <div className="flex place-content-center items-center gap-1">
        <Image src={Tech} alt="tech-arsenal" width={20} height={20} />
        <div className="text-[#999987]">My Stacks</div>
      </div>
      <div className="text-center text-[20px]">Tech Arsenal</div>
      <div className="mt-[20px] grid grid-cols-2 gap-2">
        {image.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            className="flex items-center justify-between gap-8 rounded-xl bg-[#191919] px-[8px] py-[8px] "
          >
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-[#282828] px-[12px] py-[12px]">
                <Image
                  src={item.img}
                  className=""
                  alt="tech-arsenal"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-[#cccccc]">{item.name}</div>
            </div>
            <div className="text-[#999987] opacity-0 transition-transform  duration-400 ">
              →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
