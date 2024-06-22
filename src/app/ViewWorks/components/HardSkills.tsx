"use client";

import { useState } from "react";
import Image from "next/image";
const Skills = "/img/Skills.svg";

export default function MPage() {
  const [image] = useState([
    {
      img: "/img/Figma.svg",
      name: "Figma",
      mainText: "Design Tool",
    },
    {
      img: "/img/Notion.svg",
      name: "Notion",
      mainText: "Productivity Tool",
    },
    {
      img: "/img/ShopifySkills.svg",
      name: "Shopify",
      mainText: "Ecommerce Tool",
    },
    {
      img: "/img/Mailchimp.svg",
      name: "Mailchimp",
      mainText: "Marketing Tool",
    },
    {
      img: "/img/WordPress.svg",
      name: "WordPress",
      mainText: "CMS Tool",
    },
  ]);
  return (
    <div className=" 1xl:max-w-[370px] 1xl:mx-0 mx-5 rounded-xl  bg-[#101010] px-[20px] py-[20px]">
      <div className="flex place-content-center items-center gap-1">
        <Image src={Skills} alt="tech-arsenal" width={20} height={20} />
        <div className="text-[#999987]">My Skills</div>
      </div>
      <div className="text-center text-[20px]">My Hardcore Skills</div>
      <div className="my-3 border border-[#212121]"></div>
      <div className="mt-7 flex flex-col gap-[23px]">
        {image.map((item) => (
          <div
            key={item.name}
            className="flex cursor-pointer items-center justify-between gap-8 rounded-xl border bg-[#141414] px-[8px] py-[8px] "
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
            <div className="rounded-xl bg-[#1f1f1f] px-[10px] py-[6px] text-[#838383]">
              {item.mainText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
