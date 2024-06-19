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
    <div className="  my-[33px] ">
      <div className="flex place-content-center gap-5">
        <div className="flex max-w-[450px] flex-col gap-5">
          <TechArsenal />
          <WorkGallery />
          <Solution />
        </div>
        <div className="flex max-w-[610px] flex-col gap-5">
          <ThreeFlex />
          <Profile />
          <Partners />
        </div>
        <div className="flex max-w-[450px] flex-col gap-5">
          <Reviews />
          <Presence />
        </div>
        <div className="flex max-w-[450px] flex-col gap-5">
          <WorkFlow />
          <WorkTogether />
        </div>
      </div>
    </div>
  );
}
