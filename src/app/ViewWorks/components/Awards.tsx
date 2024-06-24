"use client";

import Image from "next/image";
import { useState } from "react";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
const Work = "/img/Recordings.svg";

export default function MPage() {
  const [image] = useState([
    {
      img: "/img/DesignMaster.svg",
      name: "DesignMastery",
      hrefName: "designmastery.com",
      href: "https://twitter.com/praha37v",
    },
    {
      img: "/img/Excellence.svg",
      name: "Excellence",
      hrefName: "excellence.in",
      href: "https://twitter.com/praha37v",
    },
    {
      img: "/img/Gezite.svg",
      name: "Gezite Details",
      hrefName: "gezitedetails.com",
      href: "https://twitter.com/praha37v",
    },
  ]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="mx-5 rounded-xl bg-[#101010] px-[20px] pb-[20px]  pt-[20px] xl:mx-0 xl:ms-5 xl:w-full 1xl:ms-0 xxl:w-[660px]"
    >
      <div className="flex place-content-center items-center gap-1">
        <Image src={Work} alt="tech-arsenal" width={20} height={20} />
        <div className="text-[#999987]">Recognitions</div>
      </div>
      <div className="text-center text-[20px]">Awards & Accolades</div>
      <div className="mt-[25px] grid grid-cols-1 gap-3 sm:grid-cols-3">
        {image.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            className="flex items-center justify-between gap-3 rounded-xl bg-[#191919] px-[14px] py-[14px] "
          >
            <div className="flex flex-col  gap-8">
              <div className="flex items-center justify-between ">
                <div className=" rounded-xl bg-[#282828] px-[12px] py-[12px]">
                  <Image
                    src={item.img}
                    className=""
                    alt="tech-arsenal"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="opacity-0">→</div>
              </div>
              <div className="">
                <div className="text-[#cccccc]">{item.name}</div>
                <div className="text-[#999987]">{item.hrefName}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
