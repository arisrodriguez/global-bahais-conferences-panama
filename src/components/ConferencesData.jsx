import location from '../assets/images/location.svg'
import calendar from '../assets/images/calendar-days.svg'
import clock from '../assets/images/clock.svg'

export const ConferencesData = ({ conference, place, data, time }) => {
    return (
        <div>
            <h1 className="font-bold text-center text-xl  md:text-2xl">{conference}</h1>
            <div className="flex gap-5 pt-5">
                <img src={location} alt="icon-Location" className="w-[25px] h-[25px] text-blue-light" />
                <p className='font-normal text-xl md:text-2xl'>{place}</p>
            </div>
            <div className="flex gap-5 pt-5">
                <img src={calendar} alt="icon-Calendar" className="w-[25px] h-[25px] text-blue-light" />
                <p className='font-normal text-xl md:text-2xl'>{data}</p>
            </div>
            <div className="flex gap-5 pt-5">
                <img src={clock} alt="icon-Clock" className="w-[25px] h-[25px] text-blue-light" />
                <p className='font-normal text-xl md:text-2xl'>{time}</p>
            </div>
        </div>
    )
}
