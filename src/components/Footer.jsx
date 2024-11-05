import Facebook from '../assets/images/facebook.svg'
import Instagram from '../assets/images/instagram.svg'
import Bahai from '../assets/images/logo-bahai.svg'


export const Footer = () => {
    return (
        <footer className="text-white bg-blue-light">
            <div className="flex flex-col items-center justify-center h-[190px] md:text-center md:flex-row md:max-w-[1000px] mx-auto">
                <div className="social flex gap-5 p-4 md:flex-1 justify-center">
                    <a href="https://www.facebook.com/groups/123144634424360" target="_blank" rel="noopener noreferrer">
                        <img src={Facebook} alt="Facebook" className="w-[40px] h-[40px] transform hover:scale-110 hover:rotate-6 hover:-translate-y-1 transition duration-300" />
                    </a>
                    <a href="https://www.instagram.com/templobahaipanama/" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" className="w-[40px] h-[40px] transform hover:scale-110 hover:rotate-6 hover:-translate-y-1 transition duration-300" />
                    </a>
                    <a href="https://www.bahai.org/" target="_blank" rel="noopener noreferrer">
                        <img src={Bahai} alt="Bahai.org" className="w-[40px] h-[40px] transform hover:scale-110 hover:rotate-6 hover:-translate-y-1 transition duration-300" />
                    </a>
                </div>
                <div className="copy md:flex-1 md:flex md:items-center md:justify-center">
                    <p className="font-OpenSans font-semibold text-xl mt-4 md:mt-0 md:text-2xl">2024 © Conferencias Panamá</p>
                </div>
            </div>
        </footer>
    )
}
