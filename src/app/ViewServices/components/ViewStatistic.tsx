"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
export default function MPage() {
  const [cards] = useState([
    {
      id: 1,
      text: "Satisfaction",
      number: "99",
      simbol: "%",
      img: "/img/Star.svg",
    },
    {
      id: 2,
      text: "Partnerships",
      number: "08",
      simbol: "+",
      img: "/img/Like.svg",
    },
    {
      id: 3,
      text: "Services Suite",
      number: "12",
      simbol: "+",
      img: "/img/Suite.svg",
      hidd: "hidden",
    },
    {
      id: 4,
      text: "Accolabes",
      number: "14",
      simbol: "+",
      img: "/img/Accolabes.svg",
      hidd: "hidden",
    },
  ]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="mx-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mx-0 xl:grid-cols-4 xxl:grid-cols-2"
    >
      {cards.map((card) => (
        <div
          key={card.id}
          className={`rounded-xl bg-[#101010] px-[10px] pb-[22px] ${card.hidd} max-[1919px]:block `}
        >
          <div className=" flex place-content-center items-center bg-gradient-to-b from-gray-300/80 to-black bg-clip-text px-[30px] text-[64px] font-semibold   text-[#6f6f6f] text-transparent ">
            {card.number}{" "}
            <span className="text-[40px] text-[#6C60A4]">{card.simbol}</span>
          </div>
          <div className="flex place-content-center items-center gap-2 rounded-xl border bg-[#141414]  py-[6px]">
            <Image src={card.img} alt="tech-arsenal" width={20} height={20} />
            <div className="">{card.text}</div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
