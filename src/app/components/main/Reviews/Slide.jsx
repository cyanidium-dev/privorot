import Image from "next/image";

export default function Slide({ slide, i, videoIndex, setVideoIndex }) {
  return (
    <div className="flex rounded-2xl overflow-hidden bg-[#A61F2C] w-full">
      {videoIndex === i ? (
        <div className="relative w-[291px] h-[274px]">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${slide.video}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
            className="top-0 right-0 w-full h-full"
          ></iframe>
        </div>
      ) : (
        <>
          <div className="w-[110px] h-[274px]  shrink-0 relative">
            <Image
              src="/icons/quotes.svg"
              alt="icon"
              width="36"
              height="40"
              className="absolute top-[58px] right-[-20px]"
            />

            <button
              onClick={() => setVideoIndex(i)}
              className="absolute top-[111px] right-[-25px]"
            >
              <Image src="/icons/play.svg" alt="icon" width="44" height="44" />
            </button>

            <div className="rounded-l-2xl overflow-hidden h-full w-full">
              <Image
                src={slide.img}
                alt={slide.author}
                width="110"
                height="274"
                className="w-full h-full object-cover"
                quality={100}
              />
            </div>
          </div>
          <div className="pt-[61px] pr-[20px] pl-9">
            <h4 className="text-[16px] font-forum uppercase mb-2">
              {slide.title}
            </h4>
            <p className="text-[10px] mb-[29px] font-light leading-[1.2]">
              {slide.descr}
            </p>
            <p className="text-[12px] font-forum text-right">{slide.author}</p>
          </div>
        </>
      )}
    </div>
  );
}
