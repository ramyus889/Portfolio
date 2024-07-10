import Benefits from "./components/Benefits";
import BigCards from "./components/BigCards";
import CompleteProject from "./components/CompleteProject";
import MinCards from "./components/MinCards";
import ThreeCards from "./components/ThreeCards";
import ViewAboutMe from "./components/ViewAboutMe";
import ViewGallery from "./components/ViewGallery";
import ViewStatistic from "./components/ViewStatistic";

export default function Home() {
  return (
    <div className="my-[30px]  overflow-x-hidden">
      <div className="flex place-content-center">
        <div className="flex flex-col gap-5 xxl:flex-row">
          <div className="flex flex-col-reverse gap-5 xxl:flex-row">
            <div className="flex max-w-[1076px] flex-col  gap-5 xxl:max-w-[450px]">
              <ViewStatistic />
              <ViewAboutMe />
              <ViewGallery />
            </div>
            <div className="flex max-w-[1076px] flex-col gap-5 xxl:max-w-[1150px]">
              <BigCards />
              <ThreeCards />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <MinCards />
            <Benefits />
            <CompleteProject />
          </div>
        </div>
      </div>
    </div>
  );
}
