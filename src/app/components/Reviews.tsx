"use client";

import Image from "next/image";
import { Link } from "@nextui-org/link";
import Marquee from "react-fast-marquee";
const Rave = "/img/Rave.svg";

export default function MPage() {
  const marq = [
    {
      id: 1,
      imag: "/img/AvatarC.avif",
      name: "Carlos Rodriguez",
      country: "Madrid, Spain.",
      year: "19, Nov 2023",
      text: "Pragadesh is a true professional. He understood my vision and executed it flawlessly, resulting in a website that perfectly reflects my style.",
    },
    {
      id: 2,
      imag: "/img/AvatarD.avif",
      name: "David Smith",
      country: "London, UK.",
      year: "21, Jan 2024",
      text: "Working with Pragadesh was a breeze. He not only delivered a sleek and functional website but also provided excellent support throughout the process.",
    },
    {
      id: 3,
      imag: "/img/AvatarE.avif",
      name: "Emily Chen",
      country: "Sydney, Australia.",
      year: "09, Feb 2024",
      text: "Pragadesh exceeded my expectations with his attention to detail and creativity. I'm thrilled with the website he built for my business.",
    },
  ];

  return (
    <div className="rounded-xl bg-[#101010]  px-[20px] py-[20px]">
      <div className="flex place-content-center items-center gap-1">
        <Image src={Rave} alt="tech-arsenal" width={20} height={20} />
        <div className="text-[#999987]">Testimonials</div>
      </div>
      <div className="text-center text-[20px]">Rave Reviews Showcase</div>
      <div className="my-3 border border-[#212121]"></div>
      <div className="mt-5 flex flex-col gap-7">
        {marq.map((card) => (
          <div key={card.id} className="">
            <div className="w-full rounded-xl bg-[#191919] px-[20px] py-[20px]">
              <div className="flex items-center justify-between gap-6">
                <div className="flex gap-2">
                  <Image
                    src={card.imag}
                    alt="tech-arsenal"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col">
                    <div className="">{card.name}</div>
                    <div className="text-[#999987]">{card.country}</div>
                  </div>
                </div>
                <div className="text-[#999987]">{card.year}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}