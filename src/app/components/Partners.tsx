"use client";

import Image from "next/image";
import { Link } from "@nextui-org/link";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Work = "/img/Services.svg";

export default function MPage() {
  const marq = [
    {
      id: 1,
      imag: "/img/Twitter.svg",
    },
    {
      id: 2,
      imag: "/img/YouTube.svg",
    },
    {
      id: 3,
      imag: "/img/Facebook.svg",
    },
    {
      id: 4,
      imag: "/img/Spotify.svg",
      hidd: "hidden",
    },
    {
      id: 5,
      imag: "/img/TikTok.svg",
      hidd: "hidden",
    },
  ];
  const marq2 = [
    {
      id: 1,
      imag: "/img/Pinterest.svg",
    },
    {
      id: 2,
      imag: "/img/Instagram.svg",
    },
    {
      id: 3,
      imag: "/img/Discord.svg",
    },
    {
      id: 4,
      imag: "/img/Snapchat.svg",
      hidd: "hidden",
    },
    {
      id: 5,
      imag: "/img/Libble.svg",
      hidd: "hidden",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="mx-5 rounded-xl bg-[#101010]  pb-[32px] pt-[20px]  sm:mx-0"
    >
      <div className="flex place-content-center items-center gap-1">
        <Image src={Work} alt="tech-arsenal" width={20} height={20} />
        <div className="text-[#999987]">My Clients</div>
      </div>
      <div className="text-center text-[20px]">Satisfied Partners</div>
      <div className="mt-[47px] flex flex-col gap-5">
        <Marquee
          speed={30}
          direction="right"
          gradient={true}
          gradientColor="#101010"
          gradientWidth={100}
        >
          {marq.map((item) => (
            <div
              key={item.id}
              className={`mx-1 min-[500px]:block ${item.hidd} `}
            >
              <div className="flex items-center  rounded-xl bg-[#191919] px-[20px] py-[8px] ">
                <div className="">
                  <Image
                    src={item.imag}
                    className=""
                    alt="tech-arsenal"
                    width={100}
                    height={40}
                  />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee
          speed={30}
          gradient={true}
          gradientColor="#101010"
          gradientWidth={100}
        >
          {marq2.map((item) => (
            <div
              key={item.id}
              className={`mx-1 min-[500px]:block ${item.hidd} `}
            >
              <div className="flex items-center  rounded-xl bg-[#191919] px-[20px] py-[8px] ">
                <div className="">
                  <Image
                    src={item.imag}
                    className=""
                    alt="tech-arsenal"
                    width={100}
                    height={40}
                  />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
        <div className="block min-[600px]:hidden">
          <div className="flex place-content-center">
            <Link
              showAnchorIcon
              href={"/ViewServices"}
              className=" pb-[12px]  text-[#A18FFB]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
