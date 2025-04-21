import '@justinribeiro/lite-youtube';

export const Video = () => {
    return (
        <div className="flex justify-center items-center py-[30px] mb-[30px]">
            <div className='w-full max-w-[1000px] aspect-video">'>
                <lite-youtube
                    videoid="58e6o4kp3Eg"
                    poster="https://img.youtube.com/vi/58e6o4kp3Eg/maxresdefault.webp"
                    className="w-full h-full block"
                ></lite-youtube>
            </div>
        </div>
    )
}
