import React, { useState } from "react";
import ScrollingContainer from "react-page-scroll";
import PageIndicatorContainer from "../../components/PageIndicator/PageIndicator";
import PageFour from "../../components/portfolio/pageFour";
import PageOne from "../../components/portfolio/pageOne";
import PageThree from "../../components/portfolio/pageThree";
import PageTwo from "../../components/portfolio/pageTwo";

const bgColors = [
  "rgb(29 78 216)",
  "rgb(219 39 119)",
  "rgb(220 38 38)",
  "rgb(8 145 178)",
  "rgb(147 51 234)",
  "rgb(5 150 105)",
];

const DemoWithPageIndicators = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      <video
        className="video-bg"
        src="https://video.wixstatic.com/video/fe5385_9f011cd1aa2a4bbfa6903ac7a1804dde/1080p/mp4/file.mp4"
        autoPlay
        loop
        muted
      />
      <PageIndicatorContainer pagesNumber={4} selectedPage={currentPage} />
      <ScrollingContainer
        onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}
      >
        <div className="page">
          <PageOne />
        </div>
        <div className="page">
          <PageTwo />
        </div>
        <div className="page">
          <PageThree />
        </div>
        <div className="page">
          <PageFour />
        </div>
      </ScrollingContainer>
    </div>
  );
};

export default DemoWithPageIndicators;
