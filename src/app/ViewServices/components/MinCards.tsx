import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const call = "/img/call.svg";
const free = "/img/Freelance.svg";

export default function MPage() {
  return (
    <div className="mx-5 rounded-xl bg-[#101010] px-[16px] py-[16px] lg:mx-0">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 rounded-xl border bg-[#191919] px-[20px] py-[6px]">
          <span className="h-[8px]  w-[8px] rounded-full bg-[#6DD33D]"></span>
          Available To Work
        </div>
        <div className="flex w-full  place-content-center items-center gap-2 rounded-xl bg-[#141414]  py-[8px]">
          <Image src={free} alt="tech-arsenal" width={20} height={20} />{" "}
          Freelancing
        </div>
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
      </div>
    </div>
  );
}
