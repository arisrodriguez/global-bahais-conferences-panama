export const Video = () => {
    return (
        <div className="flex justify-center items-center py-[30px]">
            <iframe
                className="w-full h-[300px] sm:h-[300px] md:h-[500px] lg:h-[500px]"
                src="https://www.youtube.com/embed/58e6o4kp3Eg"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
            ></iframe>
        </div>
    )
}
