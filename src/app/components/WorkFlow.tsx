"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { motion } from "framer-motion";
const StarDown = "/img/StarDown.svg";

export default function MPage() {
  const [image] = useState([
    {
      img: "/img/target.svg",
      name: "Goals & Objectives",
      mainText: "Goals & Objectives",
      text: "Defining project aims and target outcomes to guide design.",
    },
    {
      img: "/img/Research.svg",
      name: "Research",
      mainText: "Research",
      text: "Delving into user needs and market trends for informed decisions.",
    },
    {
      img: "/img/Wireframe.svg",
      name: "Wireframe",
      mainText: "Wireframe",
      text: "Translating ideas into rough visuals and structural outlines.",
    },
    {
      img: "/img/Prototyping.svg",
      name: "Prototyping",
      mainText: "Prototyping",
      text: "Crafting interactive models to visualize and refine design concepts.",
    },
  ]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.0 }}
      className="mx-5 rounded-xl  bg-[#101010] px-[20px] py-[20px] sm:mx-0 "
    >
      <div className="flex place-content-center items-center gap-1">
        <Image src={StarDown} alt="tech-arsenal" width={20} height={20} />
        <div className="text-[#999987]">Work Process</div>
      </div>
      <div className="text-center text-[20px]">Workflow Highlights</div>
      <div className="my-3 border border-[#212121]"></div>
      <div className="mt-7 flex flex-col gap-[26px]">
        {image.map((item) => (
          <Popover key={item.name} placement="left">
            <PopoverTrigger>
              <div className="flex cursor-pointer items-center justify-between gap-8 rounded-xl bg-[#191919] px-[8px] py-[8px] ">
                <div className="flex items-center gap-2">
                  <div className="rounded-xl bg-[#282828] px-[12px] py-[12px]">
                    <Image
                      src={item.img}
                      className=""
                      alt="tech-arsenal"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="text-[#cccccc]">{item.name}</div>
                </div>
                <div className="text-[#999987] opacity-0 transition-transform  duration-400 ">
                  →
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="w-[200px] px-1 py-2">
                <div className=" font-bold ">{item.mainText}</div>
                <div className="text-small text-[#cccccc]">{item.text}</div>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </motion.div>
  );
}
