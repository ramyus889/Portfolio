"use client";

import Image from "next/image";
import { Link } from "@nextui-org/link";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const Work = "/img/WorkGallery.svg";

export default function MPage() {
  const marq = [
    {
      id: 1,
      imag: "/img/template1.avif",
    },
    {
      id: 2,
      imag: "/img/template2.avif",
    },
    {
      id: 3,
      imag: "/img/template3.avif",
    },
    {
      id: 4,
      imag: "/img/template4.avif",
      hidd: "hidden",
    },
    {
      id: 5,
      imag: "/img/template5.avif",
      hidd: "hidden",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mx-5 rounded-xl bg-[#101010] pt-[20px]  sm:mx-0"
    >
      <div className="flex place-content-center items-center gap-1">
        <Image src={Work} alt="tech-arsenal" width={20} height={20} />
        <div className="text-[#999987]">Projects</div>
      </div>
      <div className="text-center text-[20px]">Works Gallery</div>
      <div className="mt-[20px]">
        <Marquee speed={30}>
          {marq.map((mar) => (
            <div key={mar.id} className={`mx-1 min-[500px]:block ${mar.hidd} `}>
              <Image
                className="rounded-2xl"
                src={mar.imag}
                alt="work-gallery"
                width={200}
                height={112}
              />
            </div>
          ))}
        </Marquee>
        <div className="flex place-content-center">
          <Link
            showAnchorIcon
            href={"/ViewWorks"}
            className=" py-[13px]  text-[#A18FFB]"
          >
            View Works
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
