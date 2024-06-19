import { BiDownload } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { Button, Chip } from "@nextui-org/react";
const front = "/img/frontend.jpg";
const Tel = "/img/Telegram.svg";
const What = "/img/WhatsApp.svg";
export default function MPage() {
  const chips = [
    {
      name: "Kayakent",
      image: "/img/Map.svg",
    },
    {
      name: "English & Russian",
      image: "/img/Lang.svg",
    },
    {
      name: "Frontend Developer",
      image: "/img/Soft.svg",
    },
    {
      name: "IST",
      image: "/img/Time.svg",
    },
    {
      name: "MIT University",
      image: "/img/Book.svg",
    },
    {
      name: "Good Boy",
      image: "/img/MinSmile.svg",
    },
  ];
  return (
    <div className="rounded-xl bg-[#101010] px-[20px] py-[30px]">
      <div className="flex items-center gap-3">
        <Image
          src={front}
          alt="profile"
          className="rounded-xl"
          width={130}
          height={140}
        />
        <div className="flex w-full flex-col gap-3">
          <div className="flex  items-center justify-between gap-3">
            <div className="flex items-center gap-2 rounded-xl border bg-[#191919] px-[20px] py-[6px]">
              <span className="h-[8px]  w-[8px] rounded-full bg-[#6DD33D]"></span>
              Available To Work
            </div>
            <div className="flex items-center gap-3 text-[#cccccc]">
              Resume{" "}
              <Link
                href="#"
                className="cursor-pointer transition hover:-translate-y-1"
              >
                <BiDownload size={35} />
              </Link>
            </div>
          </div>
          <div className="text-[28px]">Frontend Developer</div>
          <div className="">
            Im a <span className="text-[#A18FFB]"> Developer </span>
          </div>
        </div>
      </div>
      <div className="mt-3 max-w-[570px] rounded-xl bg-[#141414] px-[10px] py-[16px]">
        {chips.map((chip) => (
          <Chip
            key={chip.name}
            className="mx-2 my-1 bg-[#191919] text-[#cccccc]"
            startContent={
              <Image src={chip.image} alt="profile" width={20} height={20} />
            }
          >
            {chip.name}
          </Chip>
        ))}
      </div>
      <div className="mt-3 flex place-content-center gap-3 ">
        <Button
          as={Link}
          href="#"
          size="lg"
          className="w-full bg-[#191919]  text-[18px] text-[#cccccc]"
          startContent={
            <Image src={Tel} alt="profile" width={25} height={25} />
          }
        >
          Telegram Me
        </Button>
        <Button
          as={Link}
          href="#"
          size="lg"
          className="w-full bg-[#191919]  text-[18px] text-[#cccccc]"
          startContent={
            <Image src={What} alt="profile" width={25} height={25} />
          }
        >
          WhatsApp me
        </Button>
      </div>
    </div>
  );
}
