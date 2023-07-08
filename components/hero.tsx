import Image from "next/image";
import floating1 from "@/public/floating1.svg";
import floating2 from "@/public/floating2.svg";

const Hero = () => {
  const marqueeContent = "A man can’t have enough base­ment swag  — ".repeat(
    10
  );

  return (
    <section className="relative">
      <h1 className="uppercase text-[13.5vw] tracking-wide leading-none text-center">
        Basement <span className="block stroke supply relative">Supply</span>{" "}
      </h1>
      <div className="border-t border-b border-white marquee mt-2">
        <p className="my-1 move-left tracking-[1px] text-xl lg:text-2xl">
          {marqueeContent}
        </p>
      </div>
      <div>
        <Image
          className="hidden absolute -bottom-5 left-10 asterisk lg:block"
          src={floating1}
          width={100}
          alt="asterisk figure"
        ></Image>
      </div>
      <div>
        <Image
          className="hidden absolute bottom-10 right-10 asterisk lg:block"
          src={floating2}
          width={100}
          alt="asterisk figure"
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
