"use client";

import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiMap, BiUser } from "react-icons/bi";
import { MdMiscellaneousServices } from "react-icons/md";

export default function MPage() {
  const pathname = usePathname();
  return (
    <div className="mt-[33px] flex place-content-center">
      <div className="  rounded-xl bg-[#101010] px-[10px] py-[10px]">
        <div className="flex gap-3">
          <Button
            as={Link}
            href="/"
            color={pathname === "/" ? "secondary" : "default"}
            startContent={<BiUser />}
            className="min-[430px]:text-[18px] min-[470px]:text-[20px]"
          >
            About
          </Button>
          <Button
            as={Link}
            href="/ViewWorks"
            color={pathname === "/ViewWorks" ? "secondary" : "default"}
            startContent={<BiMap />}
            className="min-[430px]:text-[18px] min-[470px]:text-[20px] "
          >
            Works
          </Button>
          <Button
            as={Link}
            href="/ViewServices"
            color={pathname === "/ViewServices" ? "secondary" : "default"}
            startContent={<MdMiscellaneousServices />}
            className="min-[430px]:text-[18px] min-[470px]:text-[20px] "
          >
            Services
          </Button>
        </div>
      </div>
    </div>
  );
}
