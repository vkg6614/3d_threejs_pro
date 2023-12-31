import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[20px] max-w-7xl mx-auto items-start`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5"></div> */}
        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient ml-2" />
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
