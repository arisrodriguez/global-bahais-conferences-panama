import foto from '../assets/images/foto.webp'

export const Banner = () => {
    return (
        <div className='relative pt-[30px] mx-auto'>
            <img className='w-full h-[432px] md:h-[675px] lg:h-[675px] object-cover' src={foto} alt="Banner de amigos unidos" />

            <a
                href="https://forms.office.com/pages/responsepage.aspx?id=rkB78Au2D06-vq-0L8TcaSkTJSnRsDRJgR7uSVI6YERUNFI3M0YzNUEyUldMM0RLMUo0SEQxQlpIUS4u&route=shorturl"
                className='absolute bottom-[60px] left-1/2 transform -translate-x-1/2 bg-blue-light w-[350px] h-[50px] rounded-full text-white font-bold text-xl shadow-md transition duration-300 ease-in-out hover:bg-blue-verylight hover:shadow-lg hover:scale-105 md:w-[450px] md:text-2xl flex items-center justify-center'
            >
                Registrarse a la conferencia
            </a>
        </div>
    )
}