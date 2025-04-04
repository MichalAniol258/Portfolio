import Image from 'next/image';

export default function SlideCon2() {
  return (
    <div className="flex min-h-screen bg-gray-950">
      {/* Sekcja tekstowa */}
      <div className="flex text-gray-400 items-center pl-[6rem] pb-[42rem]  w-1/2">
        <h1 className="text-8xl w-[0px] font-[850] ] mt-[200px]  whitespace-nowrap"></h1>
        <p className="text-[86px] w-[200px]  font-[850] mb-9  whitespace-nowrap">
          MY HOBBY
        </p>
      </div>
      <div className="flex flex-col justify-end items-start max-w-[600px] text-gray-400 absolute bottom-0 left-0 pl-[6rem] pb-[6rem]">
        <h1 className="text-sm font-light  leading-relaxed">
          MichalAniol
        </h1>
        <p className=" text-sm font-light mt-2  leading-relaxed">
          Tworzę z pasją i precyzją, dostosowując każdą linię kodu do Twoich potrzeb.
          Minimalizm, który przemawia. Prostota, która zachwyca.
        </p>
      </div>


      {/* Sekcja obrazu z nakładką */}
      <div className="relative w-1/2">
        <div className="absolute inset-0 bg-black"></div>
        <Image
          src="/sigma.gif"
          alt="Sigma"
          layout="fill"
          className="object-cover opacity-50"
          quality={100}
        />
      </div>
    </div>
  );
}
