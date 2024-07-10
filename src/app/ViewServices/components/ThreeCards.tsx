"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const call = "/img/call.svg";
export default function MPage() {
  const [card] = useState([
    {
      id: 1,
      img: "/img/SEO.svg",
      main: "SEO Optimization",
      text: "For Boosting your Traffic",
      year: "5+ Years",
      works: "30+",
      rate: "$150",
      delay: 0.6,
    },
    {
      id: 2,
      img: "/img/WebPart.svg",
      main: "Webflow Partner",
      text: "For Responsive websites",
      year: "4+ Years",
      works: "20+",
      rate: "$100",
      delay: 0.7,
    },
    {
      id: 3,
      img: "/img/FramerPart.svg",
      main: "Framer Partner",
      text: "For Innovative Websites",
      year: "3+ Years",
      works: "15+",
      rate: "$120",
      delay: 0.8,
    },
    {
      id: 4,
      img: "/img/Notion.svg",
      main: "Notion Partner",
      text: "For Innovative Notion",
      year: "2+ Years",
      works: "10+",
      rate: "$50",
      hidde: "hidden",
      delay: 0.9,
    },
  ]);

  return (
    <div className="mx-5 grid grid-cols-1 place-content-center items-center gap-5 sm:grid-cols-2 lg:mx-0 xl:grid-cols-3">
      {card.map((item) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: item.delay }}
          key={item.id}
          className={`w-full rounded-xl xl:w-[345px] ${item.hidde} bg-[#101010] px-[30px] py-[30px] max-[1280px]:block`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-[#191919] px-[16px] py-[16px]">
                <Image
                  src={item.img}
                  alt="tech-arsenal"
                  className=""
                  width={38}
                  height={38}
                />
              </div>
              <div className="text-[20px]">{item.main}</div>
            </div>
            <div className="text-[#999987]">{item.text}</div>
            <div className="mt-7 flex flex-col gap-5">
              <div className="flex justify-between border-b border-slate-600 pb-3">
                <div className="text-[#999987]">Experience</div>
                <div className="">{item.year}</div>
              </div>
              <div className="flex justify-between border-b border-slate-600 pb-3">
                <div className="text-[#999987]">Completed Works</div>
                <div className="">{item.works}</div>
              </div>
              <div className="flex justify-between ">
                <div className="text-[#999987]">Hourly Rate</div>
                <div className="">{item.rate}</div>
              </div>
            </div>
            <Button
              as={Link}
              href="https://cal.com/"
              target="_blank"
              size="lg"
              className="mt-5 w-full bg-[#191919] text-[18px] text-[#cccccc]"
              startContent={
                <Image src={call} alt="profile" width={24} height={24} />
              }
            >
              Schedule Call
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
