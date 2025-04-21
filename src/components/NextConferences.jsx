import Conferencia1 from '../assets/images/mobile-card-05.webp'
import Conferencia2 from '../assets/images/mobile-card-03.webp'
import { ConferencesData } from './ConferencesData'
import { FinalQuote } from './FinalQuote'

export const NextConferences = () => {
    return (
        <div className="grid place-content-center text-center">
            <h1 className="font-bold text-3xl md:text-4xl pb-[40px] text-blue-light">Próximas Conferencias</h1>

            <article className="flex flex-col md:flex-row justify-center items-center mx-auto w-[350px] sm:w-[75%] md:w-[95%] lg:w-[1000px] md:h-[250px] bg-gray-50 shadow-xl rounded-xl overflow-hidden">
                <div className="w-full md:w-1/2 aspect-[16/9] sm:aspect-[4/3]md:aspect-auto md:h-full">
                    <img
                        src={Conferencia1}
                        alt="Conferencia en David"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center p-6">
                    <ConferencesData
                        conference="David y Alrededores"
                        place="Sede Bahá'í"
                        data="24 de noviembre de 2024"
                        time="10:00 a.m. - 6:00 p.m."
                    />
                </div>
            </article>

            <article className="flex flex-col md:flex-row-reverse justify-center items-center mx-auto w-[350px] sm:w-[75%] md:w-[95%] lg:w-[1000px] bg-gray-50 shadow-xl rounded-xl mt-10 overflow-hidden">

                <div className="w-full md:w-1/2 aspect-[16/9] sm:aspect-[4/3] md:aspect-auto md:h-full">
                    <img
                        src={Conferencia2}
                        alt="Conferencia en Panamá"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center py-6">
                    <ConferencesData
                        conference="Panamá Metropolitana"
                        place="Templo Bahá'í"
                        data="Próximamente"
                        time="10:00 a.m. - 6:00 p.m."
                    />
                </div>
            </article>

            <FinalQuote />
        </div>
    )
}

