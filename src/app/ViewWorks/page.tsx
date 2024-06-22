import Statistic from "./components/Statistic";
import AboutMe from "./components/AboutMe";
import TopProject from "./components/TopProject";
import HardSkills from "./components/HardSkills";
import SolutionWorks from "./components/SolutionWorks";
import DemoWorks from "./components/DemoWorks";
import Awards from "./components/Awards";
import ChooseMe from "./components/ChooseMe";
export default function Home() {
  return (
    <div className="  my-[30px] overflow-x-hidden ">
      <div className="flex place-content-center">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col-reverse gap-5 xxl:flex-row">
            <div className="flex  flex-col gap-5">
              <Statistic />
              <AboutMe />
            </div>
            <div className="1xl:flex-row flex flex-col gap-5">
              <TopProject />
              <HardSkills />
            </div>
          </div>
          <div className="flex flex-col gap-5 xxl:flex-row">
            {" "}
            <div className="flex  flex-col gap-5 xl:flex-row ">
              <SolutionWorks />
              <DemoWorks />
            </div>
            <div className="flex flex-col gap-5 xl:flex-row ">
              <Awards />
              <ChooseMe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
