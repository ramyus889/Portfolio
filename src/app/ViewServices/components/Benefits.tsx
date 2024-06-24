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
const Sun = "/img/Sun.svg";

export default function MPage() {
  const [image] = useState([
    {
      img: "/img/speed.svg",
      name: "Speed Delivery",
      mainText: "Speed Delivery",
      text: "Swift delivery of high-quality services to meet your project timelines.",
    },
    {
      img: "/img/quick.svg",
      name: "Quick Turnaround",
      mainText: "Quick Turnaround",
      text: "Quick turnaround times ensuring your projects are completed efficiently and effectively.",
    },
    {
      img: "/img/success.svg",
      name: "Success Tracking",
      mainText: "Success Tracking",
      text: "Track the success of your projects with comprehensive analytics and reporting.",
    },
    {
      img: "/img/unique.svg",
      name: "Unique Design",
      mainText: "Unique Design",
      text: "Stand out from the crowd with unique and captivating design solutions.",
    },
  ]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="mx-5 rounded-xl bg-[#101010] px-[20px] py-[20px] lg:mx-0"
    >
      <div className="flex place-content-center items-center gap-1">
        <Image src={Sun} alt="tech-arsenal" width={20} height={20} />
        <div className="text-[#999987]">Benefits</div>
      </div>
      <div className="text-center text-[20px]">Service Benefits</div>
      <div className="my-3 border border-[#212121]"></div>
      <div className="mt-7 flex flex-col gap-[15px]">
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
