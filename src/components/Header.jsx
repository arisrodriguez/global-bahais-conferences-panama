import logo from '../assets/images/logo-bahai.svg'

export const Header = () => {
    return (
        <header className="flex items-center justify-center gap-5 h-[100px] bg-blue-light">
            <div className='flex items-center justify-center gap-5'>
                <img className='w-[50px] h-[50px]' src={logo} alt="Logo" width="50px" height="50px" />
                <h1 className="text-[20px] sm:20px md:text-[28px] font-bold uppercase text-white">Conferencias Bahá'ís de Panamá</h1>
            </div>
        </header>
    )
}
