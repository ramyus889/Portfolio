import ViewAboutMe from "./components/ViewAboutMe";
import ViewStatistic from "./components/ViewStatistic";
import ViewGallery from "./components/ViewGallery";
import BigCards from "./components/BigCards";
import ThreeCards from "./components/ThreeCards";
import MinCards from "./components/MinCards";
import CompleteProject from "./components/CompleteProject";
import Benefits from "./components/Benefits";

export default function Home() {
  return (
    <div className="  my-[30px] ">
      <div className="flex place-content-center">
        <div className="flex  gap-5">
          <div className="flex w-[450px]  flex-col gap-5">
            <ViewStatistic />
            <ViewAboutMe />
            <ViewGallery />
          </div>
          <div className="flex flex-col gap-5">
            <BigCards />
            <ThreeCards />
          </div>
          <div className="flex flex-col gap-5">
            <MinCards />
            <CompleteProject />
            <Benefits />
          </div>
        </div>
      </div>
    </div>
  );
}
