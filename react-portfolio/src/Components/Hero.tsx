import { Link } from "react-router-dom";
import Button from "./Button";
import Button2 from "./Button2";

function Hero() {
  return (
    <>
      <div
        className="relative isolate px-6 lg:py-0 pt-28 py-10 lg:pt-14 lg:px-8 bg-gray-950 shadow-lg shadow-gray-900"
        id="top"
      >
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-l from-[#ff4500] to-[#0047ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="grid max-w-screen-2xl px-8 py-8 mx-auto xl:px-16 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 md:-mr-20 -mr-5 font-extrabold tracking-tight leading-none text-4xl sm:text-5xl lg:text-5xl xl:text-6xl dark:text-white">
              Hi, I'm Dawson Adams
            </h1>
            <p className="max-w-2xl mb-6 font-light text-justify text-gray-500 lg:mb-8 xl:pr-20 lg:pr-10 text-lg dark:text-gray-400">
              Professional web developer and aspiring software engineer with
              skills ranging from React.js to C++. I recently graduated from
              Texas A&M University - Corpus Christi with a Bachelor of Computer
              Science.
            </p>
            <Link to="/about">
              <Button> Learn More </Button>
            </Link>
            <Link to="/portolio">
              <div className="inline-flex px-5 py-3 mr-3 font-medium hover:scale-[1.15] transition duration-500 ease-in-out">
                <Button2>View My Work</Button2>
              </div>
            </Link>
          </div>
          <div className="hidden -z-10 lg:col-span-5 lg:flex xl:-ml-[27%] lg:-ml-[20%] lg:pt-0 lg:mt-16 md:-mb-16 xl:h-[33vw] lg:h-[30vw] xl:w-[50vw] lg:w-[45vw]">
            <img src="dawson.png" alt="Dawson Adams Photo"></img>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-30 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/378] -translate-x-1/2 bg-gradient-to-r from-[#0047ff] to-[#ff4500] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
