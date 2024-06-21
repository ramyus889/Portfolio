"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Sun = "/img/Sun.svg";

export default function MPage() {
  const [image] = useState([
    {
      id: 1,
      img: "/img/Twitter2.svg",
      name: "@praha37v",
      href: " https://twitter.com/praha37v",
    },
    {
      id: 2,
      img: "/img/Inst.svg",
      name: "@praha37v",
      href: "https://www.instagram.com/praha37v/",
    },
    {
      id: 3,
      img: "/img/In.svg",
      name: "@praha37v",
      href: "https://www.linkedin.com/in/praha37v/",
    },
  ]);
  return (
    <div className="mx-5 rounded-xl bg-[#101010] px-[20px]  py-[20px]  sm:mx-0">
      <div className="flex place-content-center items-center gap-1">
        <Image src={Sun} alt="tech-arsenal" width={20} height={20} />
        <div className="text-[#999987]">Follow Me</div>
      </div>
      <div className="text-center text-[20px]">Online Presence</div>
      <div className="mt-[47px] flex flex-col gap-5">
        {image.map((item) => (
          <Link
            key={item.id}
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
