
import Conferencia1 from '../assets/images/mobile-card-05.png'
import Conferencia2 from '../assets/images/mobile-card-03.png'
import { ConferencesData } from './ConferencesData'
import { FinalQuote } from './FinalQuote'

export const NextConferences = () => {
    return (
        <div className="grid place-content-center">
            <h1 className="font-extrabold text-[30px] md:text-[35px] pb-[40px] text-blue-light">Próximas Conferencias</h1>

            <article className="flex flex-col md:flex-row justify-center items-center mx-auto w-[350px] sm:w-[75%] md:w-[95%] lg:w-[1000px] h-[200px] sm:h-[230px] md:h-[250px] bg-gray-50 shadow-xl rounded-xl">
                <div className="hidden md:block w-full md:w-1/2 h-full">
                    <img
                        src={Conferencia1}
                        alt="Conferencia en David"
                        className="w-full h-full object-cover rounded-l-xl"
                    />
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <ConferencesData
                        conference="David y Alrededores"
                        place="Sede Bahá'í"
                        data="24 de noviembre de 2024"
                        time="10:00 a.m. - 6:00 p.m."
                    />
                </div>
            </article>

            <article className="flex flex-col md:flex-row justify-center items-center mx-auto w-[350px] sm:w-[75%] md:w-[95%] lg:w-[1000px] h-[200px] sm:h-[230px] md:h-[250px] bg-gray-50 shadow-xl rounded-xl mt-10">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <ConferencesData
                        conference="Panamá Metropolitana"
                        place="Templo Bahá'í"
                        data="Próximamente"
                        time="10:00 a.m. - 6:00 p.m."
                    />
                </div>

                <div className="hidden md:block w-full md:w-1/2 h-full">
                    <img
                        src={Conferencia2}
                        alt="Conferencia en Panamá"
                        className="w-full h-full object-cover rounded-r-xl"
                    />
                </div>
            </article>

            <FinalQuote />
        </div>
    )
}

