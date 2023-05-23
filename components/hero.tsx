import Image from "next/image";
import hero from "@/public/hero.svg";

const Hero = () => {
  return (
    <section>
      <Image src={hero} alt="Hero image" />
      {/* <div className='mt-4 relative h-[45px] lg:mt-10'>
            <div className='absolute inset-0 border-y border-white flex items-center'>
                <span className='overflow-auto text-2xl font-bold tracking-[1px]'>A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag</span>
            </div>

        </div> */}
      <article>
        <p className="example-left">
            A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag
        </p>
      </article>
    </section>
  );
};

export default Hero;
