//modules
//react utils
import { useState } from "react";
//components
import MyStory from "./MyStory";
import Projects from "./Projects";

const Info = () => {
  //states
  const [tabNumber, setTabNumber] = useState<number>(0);
  const tabs: Array<{
    id: number;
    title: string;
  }> = [
    {
      id: 0,
      title: "My Story",
    },
    {
      id: 1,
      title: "Projects",
    },
  ];
  const tabManager = () => {
    switch (tabNumber) {
      case 0:
        return <MyStory />;
        break;
      case 1:
        return <Projects />;
        break;
    }
  };
  return (
    <div className="w-screen h-max p-5 min-h-screen">
      <div className="tabs">
        {tabs.map((tab) => (
          <div onClick={() => setTabNumber(tab.id)} className="tab">
            {tab.title}
          </div>
        ))}
      </div>
      <section className="info-container">{tabManager()}</section>
    </div>
  );
};

export default Info;
