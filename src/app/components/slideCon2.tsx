"use client"
import SliderCards from "./SliderCards";
import Card from "./card";


interface Card {
  h1: string;
  p: string;
  img: string;
}



export default function SlideCon2({ cardData }: { cardData: Card[] }) {
  return (
    <>
      <div className="relative h-screen w-screen">

        {/* Tło z GIF-em */}
        <div className="absolute inset-0 bg-[url('/sigma.gif')] opacity-25 bg-cover bg-center z-0"></div>

        {/* Nagłówek z gradientem i przyciągającą typografią */}
        <div className="flex flex-col max-md:justify-start items-start text-gray-100 font-[700] md:pt-[4rem] md:pl-[6rem]">
          <h1 className='md:text-8xl max-md:text-5xl max-md:p-[1rem] bg-gradient-to-l from-[#bfdbfe] to-[#fef08a] bg-clip-text text-transparent tracking-widest'>
            BIG PROJECTS
          </h1>

          <p className="text-sm text-gray-400 font-light max-md:pl-[1rem] mt-4 leading-relaxed max-w-lg text-start">
            Here, I present projects that, in my view, deserve attention. Each reflects my commitment to quality and thoughtful design.
          </p>
        </div>

        {/* Sekcja slidera i kart */}
        <div className="lg:hidden w-full h-full flex items-start justify-center mt-16 z-1">
          <SliderCards cardData={cardData}></SliderCards>
        </div>

        <div className="max-lg:hidden w-full h-full flex items-start justify-center mt-16  gap-24 z-1">
          {cardData.map((card, index) => (
            <Card key={index} h1={card.h1} p={card.p} img={card.img}></Card>
          ))}
        </div>

      </div>
      <div className="absolute w-screen h-screen inset-0 bg-gradient-to-t from-[#1f2937] via-[#2d3748] to-transparent  opacity-50 z-1 pointer-events-none"></div>

    </>
  );
}
