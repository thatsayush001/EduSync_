import styles from "../../style";
import { discount, robot } from "../../assets";
import GetStarted from "./GetStarted";
import { logo } from "../../assets";

const Hero = () => {
  return (
    <section id="hom" className={`flex md:flex-row flex-col pt-0 mt-0`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <img src={logo} alt="hoobank" className="w-[80px] h-[80px] mb-60 ml-80" />

        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-5`}>
            <span className="text-white">Let's Connect together and become Successful</span> 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            IIIT Lucknow<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Alumni's</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        "Connect, network, and inspire with IIIT Lucknow alumni. 
        Discover opportunities, share your success, 
        and make a difference in your field."
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
