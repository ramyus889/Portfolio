"use client";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const call = "/img/call.svg";
export default function MPage() {
  const [card] = useState([
    {
      id: 1,
      img: "/img/code.svg",
      main: "Web Development",
      text: "Crafting functional websites with clean code and responsive design to meet client objectives",
      marq: [
        {
          id: 1,
          icon: "/img/Agency.svg",
          name: "Agency",
          number: "08",
        },
        {
          id: 2,
          icon: "/img/Fintech.svg",
          name: "Fintech",
          number: "03",
        },
        {
          id: 3,
          icon: "/img/Ecommerce.svg",
          name: "Ecommerce",
          number: "02",
        },
        {
          id: 4,
          icon: "/img/Portfolio.svg",
          name: "Portfolio",
          number: "06",
        },
        {
          id: 5,
          icon: "/img/Blog.svg",
          name: "Blog",
          number: "03",
        },
      ],
    },
    {
      id: 2,
      img: "/img/pain.svg",
      main: "Web Design",
      text: "Creating visually stunning and user-centric designs that reflect brand identity",
      marq: [
        {
          id: 1,
          icon: "/img/Web3.svg",
          name: "Web3",
          number: "04",
        },
        {
          id: 2,
          icon: "/img/Estate.svg",
          name: "Real Estate",
          number: "01",
        },
        {
          id: 3,
          icon: "/img/Edutech.svg",
          name: "Edutech",
          number: "02",
        },
        {
          id: 4,
          icon: "/img/Health.svg",
          name: "Health",
          number: "04",
        },
        {
          id: 5,
          icon: "/img/Restaurant.svg",
          name: "Restaurant",
          number: "05",
        },
      ],
    },
  ]);

  return (
    <div className="flex w-[1050px] items-center gap-3">
      {card.map((item) => (
        <div
          key={item.id}
          className="rounded-xl bg-[#101010] px-[30px] py-[30px]"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-[#191919] px-[16px] py-[16px]">
                <Image
                  src={item.img}
                  alt="tech-arsenal"
                  className=""
                  width={38}
                  height={38}
                />
              </div>
              <div className="text-[20px]">{item.main}</div>
            </div>
            <div className="text-[#999987]">{item.text}</div>
            <Button
              as={Link}
              href="https://cal.com/"
              target="_blank"
              size="lg"
              className="w-full bg-[#191919]  text-[18px] text-[#cccccc]"
              startContent={
                <Image src={call} alt="profile" width={24} height={24} />
              }
            >
              Schedule Call
            </Button>
            <div className="mt-5 flex w-full justify-between">
              <div className="">Completed Projects</div>
              <Link className="text-[#999987]" href="/ViewWorks">
                View Projects
              </Link>
            </div>
            <div className="w-[470px] rounded-xl bg-[#141414] py-[9px]">
              <Marquee speed={30}>
                {item.marq?.map((mar) => (
                  <div
                    key={mar.id}
                    className="mx-2 flex items-center gap-3 rounded-xl bg-black px-[8px] py-[8px]"
                  >
                    <div className="rounded-xl bg-[#141414] px-[10px] py-[10px]">
                      <Image
                        className="rounded-2xl"
                        src={mar.icon}
                        alt="work-gallery"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="text-[#999987]">{mar.name}</div>
                    <div className="rounded-xl bg-[#141414] px-[10px] py-[10px] text-[#999987]">
                      {mar.number}
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
