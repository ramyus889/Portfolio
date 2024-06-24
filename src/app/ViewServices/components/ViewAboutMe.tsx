"use client";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import { useState } from "react";
import { motion } from "framer-motion";

const front = "/img/frontend.jpg";
export default function MPage() {
  const [image] = useState([
    {
      img: "/img/Twitter2.svg",
      href: " https://twitter.com/praha37v",
    },
    {
      img: "/img/Inst.svg",
      href: "https://www.instagram.com/praha37v/",
    },
    {
      img: "/img/In.svg",
      href: "https://www.linkedin.com/in/praha37v/",
    },
  ]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mx-5 flex place-content-center items-center rounded-xl bg-[#101010]  py-[80px] lg:mx-0"
    >
      <div className="flex flex-col items-center gap-2">
        <Image
          src={front}
          alt="tech-arsenal"
          className="rounded-xl"
          width={88}
          height={80}
        />
        <div className=" text-[22px]">Frontend</div>
        <div className=" grid  grid-cols-3 gap-5 ">
          {image.map((item) => (
            <Link
              key={item.img}
              href={item.href}
              target="_blank"
              className="   gap-8 rounded-xl  "
            >
              <div className="flex  items-center gap-2 ">
                <div className=" rounded-xl bg-[#282828] px-[12px] py-[12px]">
                  <Image
                    src={item.img}
                    className=" "
                    alt="tech-arsenal"
                    layout="fixed"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/" showAnchorIcon className="pt-3 text-[#A18FFB]">
          About Me
        </Link>
      </div>
    </motion.div>
  );
}
