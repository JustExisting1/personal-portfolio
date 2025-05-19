import TiltedCard from "./components/TiltedCard/TiltedCard";
import {
  AnimatePresence,
  motion,
  type Variant,
  type Variants,
} from "motion/react";

function App() {
  return (
    <>
      {/* Landing Area */}
      <div className="w-full h-dvh flex bg-cover bg-center bg-[url(./Background1.webp)] bg-fixed place-content-center place-items-center">
        <div className="w-full h-full place-content-center place-items-center backdrop-brightness-90">
          <TiltedCard
            imageSrc="./Frame.webp"
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
      <div className="bg-foreground backdrop-blur-2xl drop-shadow-lg h-16"></div>
      <div className="flex flex-col w-full bg-cover bg-[url(./Background3.webp)] bg-fixed p-2">
        {/* About Me */}
        <AnimatePresence>
          <motion.div
            className="place-items-center outline"
            variants={parent}
            viewport={viewrange}
            initial="exit"
            whileInView="enter">
            <motion.h1
              className="text-6xl font-bold pt-16"
              variants={animations}>
              About me
            </motion.h1>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-4/5 2xl:w-2/5 gap-8 p-4 my-16
            bg-muted/25 backdrop-blur-2xl rounded-2xl"
              variants={animations}>
              <div className="flex flex-col gap-4">
                <p className="whitespace-pre-line text-xl text-pretty">
                  I'm a UK based front-end developer and recent graduate.
                  <br />
                  I love turning stunning desings into fully functional
                  websites.
                  <br />I started out coding and developing games. This quickly
                  turned into a passion and I learnt all the basics, from 3D
                  modelling and art, to programming. Now I mainly focus on web
                  development, using React and Typescript.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {profile.tech.map((data, index) => {
                    return <TechTag data={data} key={index} />;
                  })}
                </div>
              </div>
              <div className="order-1">Big image or something</div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="bg-foreground backdrop-blur-2xl drop-shadow-lg h-16"></div>
      <div className="flex flex-col w-full bg-background bg-[url(./Background2.webp)] bg-fixed">
        <AnimatePresence>
          <motion.div
            className="place-items-center"
            variants={parent}
            viewport={viewrange}
            initial="exit"
            whileInView="enter">
            <motion.h1
              className="text-6xl font-bold pt-16"
              variants={animations}>
              Portfolio
            </motion.h1>
            {/* portfolio */}
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center w-full sm:w-4/5 my-16 p-2 gap-8">
              {profileData.website.map((site, index) => {
                return <PortfolioSite data={site} key={index} />;
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

interface ViewportOptions {
  root?: RefObject<Element | null>;
  once?: boolean;
  margin?: string;
  amount?: "some" | "all" | number;
}

const viewrange: ViewportOptions = {
  amount: "some",
  margin: "-300px 0px -300px 0px",
  once: false,
};

const parent: Variants = {
  enter: {
    transition: { staggerChildren: 0.3 },
  },
  exit: {
    transition: { staggerChildren: 1.0, staggerDirection: -1 },
  },
};

const animations: Variants = {
  exit: { opacity: 0, y: "1vh" },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

import profile from "./data/profile.json";
import type { RefObject } from "react";

const profileData = profile;

interface profile {
  website: IPortfolio[];
  tech: ITechTag[];
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
    <div className="flex flex-col 2xl:flex-row size-fit bg-muted/25 shadow-md shadow-black/25 backdrop-blur-2xl p-4 gap-4 rounded-2xl">
      <div
        className="flex shrink-0 w-full 2xl:w-2/3 h-full aspect-video rounded-xl drop-shadow-md drop-shadow-black/25
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
              <p className="w-fit h-fit text-[1.75vh] px-4 bg-primary rounded-2xl text-center">
                {tag}
              </p>
            );
          })}
        </div>
        <p className="text-[1.5vh] line-clamp-5">{data.description}</p>
      </div>
    </div>
  );
}

interface ITechTag {
  imgSrc: string;
  name: string;
}

function TechTag({ data }: { data: ITechTag }) {
  return (
    <div className="flex flex-row place-items-center gap-2 text-xl">
      <img src={data.imgSrc} width={32} />
      <label>{data.name}</label>
    </div>
  );
}

export default App;
