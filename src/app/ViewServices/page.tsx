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
            <CompleteProject />
            <Benefits />
          </div>
        </div>
      </div>
    </div>
  );
}
