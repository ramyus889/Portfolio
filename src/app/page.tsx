import TechArsenal from "./components/TechArsenal";
import WorkGallery from "./components/WorkGallery";
import Solution from "./components/Solution";
import ThreeFlex from "./components/ThreeFlex";
import Profile from "./components/Profile";
import Partners from "./components/Partners";
import Reviews from "./components/Reviews";
import Presence from "./components/Presence";
import WorkFlow from "./components/WorkFlow";
import WorkTogether from "./components/WorkTogether";

export default function Home() {
  return (
    <div className="  my-[33px] overflow-x-hidden">
      <div className="flex place-content-center">
        <div className="flex gap-5 max-[1919px]:flex-col">
          <div className="flex  gap-5 max-[1419px]:flex-col-reverse">
            <div className="flex max-w-[610px] flex-col gap-5 min-[1919px]:max-w-[450px]">
              <TechArsenal />
              <WorkGallery />
              <div className="hidden min-[600px]:block">
                <Solution />
              </div>
            </div>
            <div className="flex max-w-[610px] flex-col gap-5">
              <ThreeFlex />
              <Profile />
              <Partners />
            </div>
          </div>
          <div className="flex  gap-5 max-[1419px]:flex-col">
            <div className="flex flex-col gap-5 max-[1919px]:w-[610px] min-[1919px]:max-w-[450px]">
              <Reviews />
              <Presence />
            </div>
            <div className="flex  flex-col gap-5 min-[1919px]:max-w-[450px]">
              {/*
              <WorkFlow />
              <WorkTogether />
               */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
