"use client";

import Image from "next/image";
import { Link } from "@nextui-org/link";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const Work = "/img/Why.svg";

export default function MPage() {
  const marq = [
    {
      id: 1,
      imag: "/img/Attention.svg",
      name: "Attention to Detail",
    },
    {
      id: 2,
      imag: "/img/Solver.svg",
      name: "Problem Solver",
    },
    {
      id: 3,
      imag: "/img/Team.svg",
      name: "Team Player",
    },
    {
      id: 4,
      imag: "/img/Communicator.svg",
      name: "Good Communicator",
    },
  ];
  const marq2 = [
    {
      id: 1,
      imag: "/img/Learner.svg",
      name: "Continuous Learner",
    },
    {
      id: 2,
      imag: "/img/Thinker.svg",
      name: "Critical Thinker",
    },
    {
      id: 3,
      imag: "/img/Attitude.svg",
      name: "Positive Attitude ",
    },
    {
      id: 4,
      imag: "/img/Mind.svg",
      name: "Creative Mind",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="mx-5 hidden max-w-[650px] rounded-xl bg-[#101010] pb-[20px] pt-[20px] xl:mx-0 xl:me-5 xl:block 1xl:me-0 xxl:w-[364px]"
    >
      <div className="flex place-content-center items-center gap-1">
        <Image src={Work} alt="tech-arsenal" width={20} height={20} />
        <div className="text-[#999987]">Why Me</div>
      </div>
      <div className="text-center text-[20px]">Why to Choose Me?</div>
      <div className="my-3 border border-[#212121]"></div>
      <div className="mt-[20px] flex flex-col gap-5">
        <Marquee
          speed={30}
          direction="right"
          gradient={true}
          gradientColor="#101010"
          gradientWidth={100}
        >
          {marq.map((item) => (
            <div key={item.id} className="mx-1">
              <div className="flex items-center  rounded-xl bg-[#191919] px-[8px] py-[8px] ">
                <div className="flex items-center gap-2">
                  <div className="rounded-xl bg-[#282828] px-[12px] py-[12px]">
                    <Image
                      src={item.imag}
                      className=""
                      alt="tech-arsenal"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className="text-[#999987]">{item.name}</div>
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
            <div key={item.id} className="mx-1">
              <div className="flex items-center  rounded-xl bg-[#191919] px-[8px] py-[8px] ">
                <div className="flex items-center gap-2">
                  <div className="rounded-xl bg-[#282828] px-[12px] py-[12px]">
                    <Image
                      src={item.imag}
                      className=""
                      alt="tech-arsenal"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className="text-[#999987]">{item.name}</div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </motion.div>
  );
}
