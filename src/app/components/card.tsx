import Image from "next/image";
import Link from "next/link";

export default function Card({
    h1,
    p,
    img,
    href,
    text,
    lg
}: {
    h1: string;
    p: string;
    img: string;
    href: string;
    text: string;
    lg: string[]

}) {
    return (
        <div className="relative  p-[3px] rounded-2xl bg-gradient-to-br from-yellow-200 to-blue-200  max-w-xs w-9/12 z-1 opacity-85 group">
            <div className="bg-gray-950 rounded-2xl shadow-md overflow-hidden">
                <Image
                    className="w-full h-48 object-cover"
                    src={img}
                    width={25}
                    height={25}
                    unoptimized
                    alt="Card image"
                />
                {/* Kontener dla tekstu pojawiającego się na hover */}
                <div className="absolute top-2 flex justify-center p-2 text-center w-full gap-3  opacity-0 max-lg:opacity-100  group-hover:opacity-100  transition-opacity duration-300 z-1">
                    {lg.map((tech, index) => (
                        <p key={index} className="bg-gray-950 text-red-200 p-2 rounded-xs">{tech}</p>
                    )
                    )}

                </div>
                <div className="p-6 flex flex-col justify-between h-[225px]">
                    <h2 className="text-xl max-lg:text-xl max-xl:text-sm font-semibold text-yellow-200 mb-2">{h1}</h2>
                    <p className="text-gray-300 text-sm max-lg:text-sm max-xl:text-xs flex-grow">{p}</p>

                    <button className="mt-4 inline-block px-4 py-2 bg-yellow-200 text-gray-950 text-sm max-xl:text-xs max-lg:text-sm text-nowrap font-medium rounded-lg cursor-pointer hover:bg-blue-200 transition-colors">
                        <Link href={href}>{text}</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
