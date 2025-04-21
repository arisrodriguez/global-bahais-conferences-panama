import foto from '../assets/images/foto.webp'

export const Banner = () => {
    return (
        <div className='relative pt-[30px] mx-auto'>
            <img className='w-full h-[300px] md:h-[500px] lg:h-[500px] object-cover' src={foto} alt="Banner de amigos unidos" />
            <button className='absolute bottom-[60px] left-1/2 transform -translate-x-1/2 bg-blue-light w-[350px] h-[50px] rounded-full text-white font-bold text-xl shadow-md transition duration-300 ease-in-out hover:bg-blue-verylight hover:shadow-lg hover:scale-105 md:w-[450px] md:text-2xl'><a href="https://forms.office.com/pages/responsepage.aspx?id=rkB78Au2D06-vq-0L8TcaSkTJSnRsDRJgR7uSVI6YERUNFI3M0YzNUEyUldMM0RLMUo0SEQxQlpIUS4u&route=shorturl">Registrarse a la conferencia</a></button>
        </div>
    )
}

