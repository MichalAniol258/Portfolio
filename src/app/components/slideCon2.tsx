import Image from 'next/image';

export default function SlideCon2() {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0 bg-[url('/sigma.gif')] opacity-25 bg-cover bg-center"></div>
      <div className="relative z-10 w-fit text-gray-400 font-[850] pt-[4rem] pl-[6rem]">
        <h1 className='text-8xl  bg-gradient-to-l from-[#bfdbfe]  to-[#fef08a] bg-clip-text text-transparent'>BIG PROJECTS</h1>


      </div>
    </div>

  );
}
