"use client";

import Image from "next/image";
import { useState } from "react";
import { Link } from "@nextui-org/link";
const Work = "/img/Services.svg";

export default function MPage() {
  const [image] = useState([
    {
      img: "/img/Dribble.svg",
      name: "Dribble",
      href: "https://dribbble.com/",
    },
    {
      img: "/img/Behance.svg",
      name: "Behance",
      href: "https://www.behance.net/",
    },
  ]);
  return (
    <div className="w-[304px] rounded-xl   bg-[#101010] px-[20px] pt-[20px]">
      <div className="flex place-content-center items-center gap-1">
        <Image src={Work} alt="tech-arsenal" width={20} height={20} />
        <div className="text-[#999987]">My Portfolio</div>
      </div>
      <div className="text-center text-[20px]">My Demo Works</div>
      <div className="mt-[40px] flex flex-col gap-3">
        {image.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            className="flex items-center justify-between gap-3 rounded-xl bg-[#191919] px-[8px] py-[8px] "
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
            <div className="pe-2 text-[30px] text-[#999987]  transition-transform  duration-400 ">
              →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
