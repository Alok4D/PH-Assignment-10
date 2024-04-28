import { useCallback, useEffect, useState } from "react";

export const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = ['https://img.freepik.com/free-photo/india-republic-day-celebration-digital-art-with-woman-portrait_23-2151070802.jpg?t=st=1714193660~exp=1714197260~hmac=53483875224ead818dee0c1678f27312c013af75f1b3c5ac75ebd5c96e976921&w=1060','https://i.pinimg.com/originals/b8/69/28/b86928cdfff186dc6c8aa7f6ffa8271b.jpg','https://i.pinimg.com/originals/3c/12/80/3c128099655f6c725389959fb1f0f5ed.jpg','https://macdndev.azureedge.net/genesis-temp/9/f/d/0/0/d/9fd00de2ba23aedbb81f87e9008b5f50ef63769b.jpg'];
  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-60 w-[80%] mx-auto border rounded-xl md:h-[470px] lg:h-[650px] relative overflow-hidden">
        {/* arrow left */}
        <button onClick={prevSlider} className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* arrow right */}
        <button onClick={nextSlider} className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {carouselImages.map((_, inx) => (
            <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-500 bg-white ${currentSlider === inx ? "w-8" : "wz-2"} h-2`}></button>
          ))}
        </div>
        {/* Carousel container */}
        <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)`}}>
          {/* sliders */}
          {carouselImages.map((slide, inx) => (
            <img key={slide} src={slide} className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[650px] object-cover" alt={`Slider - ${inx + 1}`}/>
          ))}
        </div>
    </div>
  );
};
export default Banner;