"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const Mainimg = "/img/Main.svg";
const Message = "/img/message.svg";
const Call = "/img/call.svg";

export default function MPage() {
  return (
    <div className="mx-5 rounded-xl  bg-[#101010] py-[43px] sm:mx-0 xxl:py-[32px] ">
      <div className="flex flex-col place-content-center items-center gap-1">
        <Image
          src={Mainimg}
          className="rounded-full bg-[#1F1F1F] p-[10px]"
          alt="tech-arsenal"
          width={60}
          height={60}
        />
        <div className="text-[22px]">Let’s Work Together</div>
      </div>
      <div className="px-[60px] text-center text-[16px] text-[#999987]">
        Let&#39;s Make Magic Happen Together!
      </div>

      <div className="mt-[57px] flex flex-col gap-3 px-[20px]">
        <Button
          as={Link}
          href="#"
          size="lg"
          className="w-full bg-[#191919]  text-[18px] text-[#cccccc]"
          startContent={
            <Image src={Message} alt="profile" width={25} height={25} />
          }
        >
          Email Me
        </Button>
        <Button
          as={Link}
          href="#"
          size="lg"
          className="w-full bg-[#191919]  text-[18px] text-[#cccccc]"
          startContent={
            <Image src={Call} alt="profile" width={25} height={25} />
          }
        >
          Schedule a Call
        </Button>
      </div>
    </div>
  );
}
