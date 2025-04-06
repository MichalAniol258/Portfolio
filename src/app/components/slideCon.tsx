

export default function SlideCon() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-950 ">
        {/* Sekcja tekstowa */}
        <div className="flex text-gray-400 items-center pl-[6rem] pt-[6rem] max-md:pl-[2rem] max-md:pt-[10rem] max-md:items-start  headerset   w-1/2">
          <h1 className="text-8xl text-blue-200 max-md:text-6xl header w-[0px] font-[850]  m-[2rem] mt-[200px] rotate-270 whitespace-nowrap ">MichalAniol</h1>
          <p className="text-[86px]  text-yellow-200 max-md:text-[50px] header2 w-[0px] font-[850] pt-[6.2rem] pl-[1rem] max-md:mt-[9.45rem] max-md:ml-[-1.5rem]  max-md:rotate-270 whitespace-nowrap">
            PORTFOLIO
          </p>
        </div>
        <div className=" flex flex-col justify-end  items-start text-gray-400 max-md:rotate-270  cosik  max-lg:height-[215px] max-md:bottom-30 max-md:max-w-[400px]  max-w-[600px]  max-md:right-0 max-md:pl-[3rem]  max-md:pb-[8rem]   absolute bottom-0 left-0 pl-[6rem] pb-[6rem] ">
          <h1 className="text-sm  font-light max-h-600:text-red-500   leading-relaxed">
            MichalAniol
          </h1>
          <p className=" text-sm font-light mt-2  leading-relaxed">
            I create with passion and precision, tailoring each line of code to your needs.
            Minimalism that appeals. Simplicity that delights.
          </p>
        </div>


        {/* Sekcja obrazu z nakładką */}
        <div className="relative w-1/2">
          <div className="absolute inset-0 bg-black"></div>

          <video
            src="/sigma.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        </div>

      </div>
      <div className="absolute w-screen h-screen inset-0 bg-gradient-to-t from-[#1f2937] to-[#2d3748]  opacity-30 z-1 pointer-events-none"></div>
    </>
  );
}
