"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        My node validator<span className="text-purple"> projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mt-0">
        {projects.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
            className="block"
          >
            <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl rounded-2xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img
                      src="/bg.png"
                      alt="bgimg"
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="absolute inset-0 w-full h-full object-cover z-10 rounded-2xl border-4 border-white/20"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{ color: "#BEC1DD", margin: "1vh 0" }}
                >
                  {item.des}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.iconLists?.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center overflow-hidden"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                    <img
                      src={icon}
                      alt="icon"
                      className="w-full h-full object-cover rounded-full"
                    />
                    </div>
                    ))}
                  </div>

                  <div className="flex justify-start items-center w-full ml-4">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      See the node installation guide
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
