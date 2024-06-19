"use client";
import Image from "next/image";
import { useState } from "react";
export default function MPage() {
  const [cards] = useState([
    {
      id: 1,
      text: "Projects",
      number: "56",
      img: "/img/Flag.svg",
    },
    {
      id: 2,
      text: "Happy Clients",
      number: "23",
      img: "/img/Smile.svg",
    },
    {
      id: 3,
      text: "Year Expertise",
      number: "06",
      img: "/img/Star.svg",
    },
  ]);
  return (
    <div className="flex gap-5">
      {cards.map((card) => (
        <div
          key={card.id}
          className="rounded-xl bg-[#101010] px-[10px] pb-[22px] text-center"
        >
          <div className=" flex place-content-center items-center bg-gradient-to-b from-gray-300/80 to-black bg-clip-text px-[30px] text-[64px] font-semibold   text-[#6f6f6f] text-transparent ">
            {card.number} <span className="text-[40px] text-[#6C60A4]">+</span>
          </div>
          <div className="flex place-content-center items-center gap-2 rounded-xl border bg-[#141414]  py-[6px]">
            <Image src={card.img} alt="tech-arsenal" width={20} height={20} />
            <div className="">{card.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}