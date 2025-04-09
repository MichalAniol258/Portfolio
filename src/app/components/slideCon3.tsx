"use client"
import SliderCards from "./SliderCards";
import Card from "./card";


interface Card {
  h1: string;
  p: string;
  img: string;
  href: string
  text: string
  lg: string[]
}



export default function SlideCon3({ cardData }: { cardData: Card[] }) {
  return (
    <>
      <div className="relative h-screen w-screen">

        {/* Tło z GIF-em */}

        <video
          src="/sigma.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="absolute inset-0 w-full h-full object-cover opacity-20 bg-cover bg-center z-1"
        />

        {/* Nagłówek z gradientem i przyciągającą typografią */}
        <div className="flex flex-col max-md:justify-start items-start text-gray-100 font-[700] md:pt-[4rem] md:pl-[6rem]">
          <h1 className='md:text-8xl max-md:text-5xl max-md:p-[1rem] bg-gradient-to-l from-[#bfdbfe] to-[#fef08a] bg-clip-text text-transparent tracking-widest'>
            SMALL PROJECTS
          </h1>

          <p className="text-sm text-gray-400 font-light max-md:pl-[1rem] mt-4 leading-relaxed max-w-lg text-start">
            A collection of personal projects crafted in my spare time — a space for exploration, learning, and bringing ideas to life.
          </p>
        </div>

        {/* Sekcja slidera i kart */}
        <div className="lg:hidden w-full h-full flex items-start justify-center mt-16">
          <SliderCards cardData={cardData}></SliderCards>
        </div>


        <div className="max-lg:hidden w-full h-full flex items-start justify-center mt-16  gap-24 ">
          {cardData.map((card, index) => (
            <Card key={index} h1={card.h1} p={card.p} img={card.img} href={card.href} lg={card.lg} text={card.text}></Card>
          ))}
        </div>

      </div>
      <div className="absolute w-screen h-screen inset-0 bg-gradient-to-t from-[#1f2937] to-[#2d3748]  opacity-20 z-1 pointer-events-none"></div>

    </>
  );
}
