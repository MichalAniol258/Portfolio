import Image from "next/image";

export default function Card({ h1, p, img }: { h1: string, p: string, img: string }) {
    return (
        <div className="p-[3px] rounded-2xl bg-gradient-to-br from-yellow-200 to-blue-200 max-w-xs w-full z-1 ">
            <div className="bg-gray-950 rounded-2xl shadow-md overflow-hidden">
                <Image
                    className="w-full h-48 object-cover opacity-60"
                    src={img}
                    width={25}
                    height={25}
                    unoptimized
                    alt="Card image"
                />
                <div className="p-6 flex flex-col justify-between h-[225px]">

                    <h2 className="text-xl font-semibold text-yellow-200 mb-2">{h1}</h2>
                    <p className="text-gray-300 text-sm flex-grow">{p}</p>

                    <button className="mt-4 inline-block px-4 py-2 bg-yellow-200 text-gray-950 text-sm font-medium rounded-lg hover:bg-blue-200 transition-colors">
                        Github
                    </button>
                </div>
            </div>
        </div>
    );
}
