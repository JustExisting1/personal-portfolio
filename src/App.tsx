import TiltedCard from "./components/TiltedCard/TiltedCard";

function App() {
  return (
    <>
      {/* Landing Area */}
      <div className="w-full h-dvh flex bg-cover bg-center bg-[url(./BlurredBackground.jpg)] bg-fixed place-content-center place-items-center">
        <div className="w-full h-full place-content-center place-items-center backdrop-brightness-90">
          <TiltedCard
            imageSrc="./Frame.png"
            containerHeight="50vh"
            containerWidth="40vh"
            imageHeight="50vh"
            imageWidth="40vh"
            rotateAmplitude={5}
            scaleOnHover={1.05}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="flex flex-col size-full place-content-center ">
                <p className="text-[5vh] flex w-2/3 text-center justify-center place-self-center">
                  Hi, I'm
                </p>
                <p className="text-[5vh] flex w-2/3 text-center justify-center place-self-center">
                  Jacob
                </p>
                <p className="text-[3vh] flex w-2/3 text-center justify-center place-self-center">
                  Alexander-Rothwell
                </p>
                <p className="text-[2vh] flex w-2/3 text-center justify-center place-self-center">
                  A Front-end developer
                </p>
              </div>
            }
          />
        </div>
      </div>
      {/* Content */}
      <p>About me</p>
      <p>Skills</p>
      <div className="bg-accent drop-shadow-lg h-8"></div>
      <div className="flex flex-col w-full bg-background place-items-center bg-[url(./Background2.jpg)] bg-fixed">
        <p>Portfolio</p>
        {/* portfolio */}
        <div className="grid grid-cols-2 justify-center w-4/5 p-2 gap-8">
          {profileData.website.map((site, index) => {
            return <PortfolioSite data={site} key={index} />;
          })}
        </div>
        <p>Experience</p>
      </div>
    </>
  );
}

import profile from "./data/profile.json";

const profileData = profile;

interface profile {
  website: IPortfolio[];
}

interface IPortfolio {
  imgSrc: string;
  link: string;
  siteName: string;
  tags: string[];
  description: string;
}

function PortfolioSite({ data }: { data: IPortfolio }) {
  return (
    <div className="flex flex-row size-fit bg-muted/25 shadow-md shadow-black/25 backdrop-blur-2xl p-4 gap-4 rounded-2xl">
      <div
        className="flex shrink-0 w-2/3 h-full aspect-video bg-red-200 rounded-xl drop-shadow-md drop-shadow-black/25
          hover:scale-102 transition-all duration-300 overflow-clip">
        <a href={data.link} target="_blank" rel="noreferrer noopener">
          <img
            src={data.imgSrc}
            className=" hover:scale-102 transition-all duration-300"
          />
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{data.siteName}</h1>
        <div className="flex flex-row flex-wrap gap-2 text-xl">
          {data.tags.map((tag) => {
            return (
              <p className="w-fit h-fit px-4 bg-primary rounded-2xl text-center">
                {tag}
              </p>
            );
          })}
        </div>
        <p className="text-lg line-clamp-5">{data.description}</p>
      </div>
    </div>
  );
}

export default App;
