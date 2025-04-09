"use client"

import Link from 'next/link';



export default function SlideCon4() {
  return (
    <>
      <div className="relative h-screen w-screen bg-gray-950">

        {/* Background Video */}
        <video
          src="/sigma.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="absolute inset-0 w-full h-full object-cover opacity-20 bg-cover bg-center z-1"
        />


        <div className="relative   flex flex-col items-start justify-start h-full pt-[2.5rem] px-6 md:px-12 lg:pt-[4rem] lg:pl-[6rem]  text-white">
          <h1 className='text-6xl md:text-8xl font-extrabold bg-gradient-to-l from-[#bfdbfe] to-[#fef08a] bg-clip-text text-transparent tracking-wide'>
            ABOUT ME
          </h1>
          <p className="text-sm text-gray-400 font-light mt-4 leading-relaxed max-w-lg">
            A passion for simplicity and excellence. I strive for perfection, blending creativity with precision in everything I do.
          </p>

          <div className="grid grid-flow-row-dense grid-cols-3 max-sm:grid-cols-2 gap-4 mt-8 z-10 opacity-85">
            <Link
              className="bg-gradient-to-r from-[#ffdd6e] to-[#ff7f50] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:scale-105 transition transform text-center"
              href="https://github.com/MichalAniol258"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              className="bg-gradient-to-r from-[#1DA1F2] to-[#0076B6] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:scale-105 transition transform text-center"
              href="#"
              target="_blank"
            >
              Twitter
            </Link>
            <Link
              className="bg-gradient-to-r from-[#4B6A92] to-[#2A3E57] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:scale-105 transition transform text-center"
              href="#"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>





          <div className="hidden lg:flex items-center justify-center mt-16 gap-6 opacity-85 z-1">
            <span className="text-xl text-gray-400">More about my projects</span>
            <Link className="z-1 bg-gradient-to-r from-[#fef08a] to-[#60a5fa] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:scale-105 transition transform" href="https://github.com/MichalAniol258" target="_blank">

              GitHub

            </Link>
          </div>
        </div>
      </div>
      <div className="absolute w-screen h-screen inset-0 bg-gradient-to-t from-[#1f2937] to-[#2d3748]  opacity-20 z-1 pointer-events-none"></div>
    </>
  );
}
