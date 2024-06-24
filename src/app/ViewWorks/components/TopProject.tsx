"use client";

import Image from "next/image";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
const Top = "/img/TopProject.svg";

export default function MPage() {
  const prod = [
    {
      id: 1,
      img: "/img/Nathan.avif",
      href: "https://produce-ui.com/templates",
      title: "Nathan",
      text: "Portfolio",
    },
    {
      id: 2,
      img: "/img/NexGen.avif",
      href: "https://produce-ui.com/templates",
      title: "NexGen Agency",
      text: "Agency",
    },
    {
      id: 3,
      img: "/img/StyleLoom.avif",
      href: "https://produce-ui.com/templates",
      title: "StyleLoom",
      text: "Ecommerce",
    },
    {
      id: 4,
      img: "/img/DevCraft.avif",
      href: "https://produce-ui.com/templates",
      title: "DevCraft",
      text: "Portfolio",
    },
    {
      id: 5,
      img: "/img/Currentvandi.avif",
      href: "https://produce-ui.com/templates",
      title: "Currentvandi",
      text: "Business",
    },
    {
      id: 6,
      img: "/img/Damien.avif",
      href: "https://produce-ui.com/templates",
      title: "Damien",
      text: "Portfolio",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mx-5 rounded-xl  bg-[#101010] px-[24px] py-[20px] 1xl:mx-0"
    >
      <div className="flex place-content-center items-center gap-1">
        <Image src={Top} alt="tech-arsenal" width={20} height={20} />
        <div className="text-[#999987]">My Works</div>
      </div>
      <div className="text-center text-[20px]">My top 6 Projects</div>
      <div className="mt-[20px] grid grid-cols-1  gap-5 sm:grid-cols-2 md:grid-cols-3">
        {prod.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            target="_blank"
            className="rounded-xl bg-[#191919] px-[14px] py-[14px]"
          >
            <div className="flex w-[500px] flex-col gap-3 sm:w-[400px] 1xl:w-[270px]">
              <Image
                src={item.img}
                className="h-[125px] w-full rounded-xl object-cover 1xl:w-[270px] "
                alt="tech-arsenal"
                width={270}
                height={114}
              />
              <div className="">
                <div className="text-[20px] text-[#CCCCC1]">{item.title}</div>
                <div className="text-[#999987]">{item.text}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
