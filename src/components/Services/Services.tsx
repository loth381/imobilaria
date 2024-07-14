"use client"

import { Transition } from "../Transition"
import { Slider } from "./Slider"

export function Services() {
    return (
        <Transition className="grid px-4 py-8 md:py-46 md:px-36 md:grid-cols-2 md:gap-28">
            <div className="max-w-xl mb-7">
                <h4 className="text-secondary">Servicios</h4>
                <h2 className="my-4 text-3xl font-semibold">Promociona  tu vivenda para alquilar o venderla al mejor precio</h2>
                <p className="mb-10 mt-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam omnis soluta nesciunt at quibusdam, ullam itaque animi aliquam optio hic. Voluptatibus sunt aperiam nobis velit quidem! Alias doloribus aliquid autem.</p>
            </div>
            <div className="flex items-center justify-center">
                <Slider />

            </div>

        </Transition>
    )
}
