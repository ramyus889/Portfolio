"use client";

import Image from "next/image";
import { Link } from "@nextui-org/link";
import Marquee from "react-fast-marquee";
const Work = "/img/Services.svg";

export default function MPage() {
  const marq = [
    {
      id: 1,
      imag: "/img/WebDesign.svg",
      name: "Web Design",
    },
    {
      id: 2,
      imag: "/img/mobileApp.svg",
      name: "Mobile App Design",
    },
    {
      id: 3,
      imag: "/img/WebDev.svg",
      name: "Web Development",
    },
  ];
  const marq2 = [
    {
      id: 1,
      imag: "/img/Framer.svg",
      name: "Framer Development",
    },
    {
      id: 2,
      imag: "/img/Webflow.svg",
      name: "Webflow Development",
    },
    {
      id: 3,
      imag: "/img/WebDesign.svg",
      name: "SEO Optimization",
    },
  ];
  return (
    <div className="rounded-xl bg-[#101010]   pt-[20px]">
      <div className="flex place-content-center items-center gap-1">
        <Image src={Work} alt="tech-arsenal" width={20} height={20} />
        <div className="text-[#999987]">Services</div>
      </div>
      <div className="text-center text-[20px]">Solutions Suite</div>
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
        <div className="flex place-content-center">
          <Link
            showAnchorIcon
            href={"/Services"}
            className=" pb-[12px]  text-[#A18FFB]"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
}
