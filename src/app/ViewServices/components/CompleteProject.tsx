"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import UseAreaChart from "./UseAreaChart";

const flag = "/img/Flag.svg";
const chart = "/img/chart.svg";

export default function MPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="mx-5 rounded-t-xl rounded-bl-xl bg-[#101010] ps-[24px]  pt-[40px] lg:mx-0"
    >
      <div className="flex flex-col gap-[4px]">
        <div className="flex items-center gap-2">
          <Image src={flag} alt="tech-arsenal" width={20} height={20} />{" "}
          Completed Projects
        </div>
        <div className="me-5 mt-3 border border-[#212121]"></div>
        <div className="mt-[20px] flex items-center justify-between gap-5">
          <div className=" flex items-center bg-gradient-to-b from-gray-300/80 to-black bg-clip-text  text-[70px] font-semibold   text-[#6f6f6f] text-transparent xxl:text-[64px] ">
            50
            <span className="text-[50px] text-[#6C60A4] xxl:text-[40px]">
              +
            </span>
          </div>
        </div>
        <div className="my-[18px] text-wrap text-[#727065]">
          Completed Projects for 3+ Years
        </div>
        <div className=" w-full xxl:max-w-[300px]">
          <UseAreaChart />
        </div>
      </div>
    </motion.div>
  );
}
