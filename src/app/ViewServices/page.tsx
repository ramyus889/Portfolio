import ViewAboutMe from "./components/ViewAboutMe";
import ViewStatistic from "./components/ViewStatistic";
import ViewGallery from "./components/ViewGallery";
import BigCards from "./components/BigCards";
export default function Home() {
  return (
    <div className="mx-[323px]  my-[30px] ">
      <div className="flex ">
        <div className="flex  gap-5">
          <div className="flex w-[450px]  flex-col gap-5">
            <ViewStatistic />
            <ViewAboutMe />
            <ViewGallery />
          </div>
          <div className="">
            <BigCards />
          </div>
        </div>
      </div>
    </div>
  );
}
