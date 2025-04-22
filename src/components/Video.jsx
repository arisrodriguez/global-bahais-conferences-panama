import '@justinribeiro/lite-youtube';

export const Video = () => {
    return (
        <div className="flex justify-center items-center py-[30px] mb-[30px]">
            <div className='w-full max-w-[1000px] aspect-video">'>
                <lite-youtube
                    videoid="58e6o4kp3Eg"
                    posterquality="maxresdefault" // O usa maxresdefault para calidad
                >
                    {/* Fallback: Enlace a YouTube si la imagen no carga */}
                    <a className="lite-youtube-fallback" href="https://www.youtube.com/watch?v=58e6o4kp3Eg">
                        Ver en YouTube
                    </a>
                </lite-youtube>
            </div>
        </div>
    )
}
