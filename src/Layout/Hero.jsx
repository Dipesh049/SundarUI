import man from "../assets/hero/man.png";
import women from "../assets/hero/women.png";

import { Orange, Yellow } from "../Components/Button";

const Hero = () => {
  return (
    <section className="padding-px gradient">
      <div className="flex items-center maxWidth m-auto py-44 flex-col sm:flex-col md:flex-row">
        <div className="flex-1 text-white">
          <p className="my-2 text-3xl font-medium text-yellow">
            Presented Raj Patel and Dipesh Patel
          </p>
          <h1 className="my-10 font-bold text-5xl md:text-6xl sm:text-7xl leading-tight">
            Use prebuilt components for your next project
          </h1>
          <p className="text-3xl leading-normal">
            Get attractively designed components built with Tailwind CSS, XML,
            and XSL for your websites and mobile applications.
          </p>
          <div className="mt-10">
            <Orange text={"Components"} />
            <Yellow text={"Contribute"} />
          </div>
        </div>
        <div className="flex flex-1 justify-end mt-20 sm:mt-0 md:mt-0">
          <div className="">
            <img className="w-full" src={man} alt="man" />
          </div>
          <div className="w-96">
            <img className="w-full" src={women} alt="women" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;