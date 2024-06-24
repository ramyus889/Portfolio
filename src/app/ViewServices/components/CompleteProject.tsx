"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const flag = "/img/Flag.svg";
const chart = "/img/chart.svg";

export default function MPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.1 }}
      className="mx-5 rounded-t-xl rounded-bl-xl bg-[#101010] ps-[24px]  pt-[40px] lg:mx-0"
    >
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-center gap-2">
          <Image src={flag} alt="tech-arsenal" width={20} height={20} />{" "}
          Completed Projects
        </div>
        <div className="mt-[15px] flex items-center justify-between gap-5">
          <div className=" flex items-center bg-gradient-to-b from-gray-300/80 to-black bg-clip-text  text-[64px] font-semibold   text-[#6f6f6f] text-transparent ">
            56
            <span className="text-[40px] text-[#6C60A4]">+</span>
          </div>
          <Image
            src={chart}
            alt="tech-arsenal"
            className="h-[150px] w-[250px] max-[460px]:h-[100px] max-[400px]:w-[160px] xxl:h-[100px] xxl:w-[200px]"
            width={200}
            height={100}
          />
        </div>
      </div>
    </motion.div>
  );
}
