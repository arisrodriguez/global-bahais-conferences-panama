import { NextConferences } from "./NextConferences"

export const Conferences = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="text-center max-w-[1000px] md:w-[90%] px-[50px] md:px-0  py-[40px] md:py-[90px]">
                <h1 className="font-extrabold text-3xl pb-[30px] text-blue-light md:text-4xl">Conferencias para la Transformación Colectiva</h1>
                <p className="pb-[40px] text-xl md:text-2xl">¡Bienvenidos a nuestras conferencias en diversas ciudades de Panamá! Este evento inclusivo reunirá a personas de todas las edades, orígenes y culturas. Las familias son especialmente bienvenidas, con programas diseñados para niños (5-11 años) y prejóvenes (12-15 años). No te pierdas la oportunidad de compartir, aprender y crecer juntos. ¡Te esperamos!</p>

                <NextConferences />
            </div>

        </div>
    )
}
