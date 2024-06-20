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
    <div className="  my-[30px] ">
      <div className="flex place-content-center">
        <div className="flex flex-col gap-5">
          <div className="flex  gap-5">
            <div className="flex  flex-col gap-5">
              <Statistic />
              <AboutMe />
            </div>
            <div className="flex gap-5">
              <TopProject />
              <HardSkills />
            </div>
          </div>
          <div className="flex gap-5">
            {" "}
            <SolutionWorks />
            <DemoWorks />
            <Awards />
            <ChooseMe />
          </div>
        </div>
      </div>
    </div>
  );
}
