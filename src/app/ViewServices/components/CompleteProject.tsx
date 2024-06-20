import Image from "next/image";

const flag = "/img/Flag.svg";

export default function MPage() {
  return (
    <div className="rounded-xl bg-[#101010] px-[24px] pb-[20px] pt-[40px]">
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-center gap-2">
          <Image src={flag} alt="tech-arsenal" width={20} height={20} />{" "}
          Completed Projects
        </div>
        <div className=" flex items-center bg-gradient-to-b from-gray-300/80 to-black bg-clip-text  text-[64px] font-semibold   text-[#6f6f6f] text-transparent ">
          56
          <span className="text-[40px] text-[#6C60A4]">+</span>
        </div>
      </div>
    </div>
  );
}
