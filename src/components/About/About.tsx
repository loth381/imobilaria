import Image from "next/image";
import { Transition } from "../Transition";

export function About() {
    return (
        <Transition className="grid gap-4 px-4 py-8 md:py-44 md:px-36 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center max-w-xl mb-7">
                <h4 className="text-secondary">Sobre nosotros</h4>
                <h2 className="my-4 text-3xl font-semibold">Mas de 1000 viviendas para vender y comprar en todo el mundo</h2>
              <p className="mb-10 mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem praesentium aliquam odio repellendus culpa fugiat dolor nesciunt. Magni necessitatibus fuga nemo iusto perferendis commodi, id quis placeat aspernatur velit!</p>
              <button className="px-4 py-3  text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-black">Cargar mas</button>
            </div>
            <div className=" flex items-center justify-center">
                <Image src="/assets/house.jpeg" alt="About" width={350} height={450} className="w-auto h-auto" priority />
            </div>

        </Transition>
    )
}
