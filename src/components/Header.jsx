import logo from '../assets/images/logo-bahai.svg'

export const Header = () => {
    return (
        <header className="flex items-center justify-center gap-5 h-[100px] bg-blue-light">
            <div className='flex items-center justify-center gap-5'>
                <img className='' src={logo} alt="Logo" />
                <h1 className="text-[20px] sm:20px md:text-[28px] font-bold uppercase text-white">CONFERENCIAS DE PANAMá</h1>
            </div>
        </header>
    )
}
