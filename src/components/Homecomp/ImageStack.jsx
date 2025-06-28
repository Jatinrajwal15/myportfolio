import React from 'react';
import Image from 'next/image';

const images = [
  {
    src: 'images/stackimg/1.jpg',
    top: 'top-0 right-0 rotate-6',
    zIndex: 10,
  },
  {
    src: '/images/stackimg/2.jpg',
    top: 'top-10 right-10 rotate-3',
    zIndex: 20,
  },
  {
    src: '/images/stackimg/3.jpg',
    top: 'top-20 right-20',
    zIndex: 30,
  },
];


const ImageStack = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Top Heading Section */}
      <div className="px-8 pt-20 flex flex-col md:flex-row justify-between items-center md:items-start md:pl-32 relative z-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-gray-900">
            <span className="">Passionate</span>
            <br />
            <span className="text-emerald-500 font-normal italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Frontend
            </span>
            {' '}
            Developer
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl text-gray-700 font-medium">
            I’m Jatin Rajwal, a frontend developer & UI/UX designer crafting
            <span className="text-emerald-500 italic"> unique</span> and
            <span className="text-gray-900 font-semibold">intuitive</span> user experiences that seamlessly blend function with form — for both web and mobile platforms.
          </p>
        </div>

        {/* Image Stack Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative z-10">
          <div className="relative w-[300px] sm:w-[400px] md:w-[500px] h-[400px] sm:h-[500px] md:h-[600px] group">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute ${img.top} z-[${img.zIndex}] transition-transform duration-300 group-hover:z-0 hover:z-50 hover:-translate-y-4`}
              >
                <Image
                  src={img.src}
                  alt={`Stacked image ${idx + 1}`}
                  width={300}
                  height={400}
                  className="object-cover rounded-xl shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curved background at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-[520px]" preserveAspectRatio="none">
          <path
            fill="#f9fafb"
            d="M0,160L60,144C120,128,240,96,360,96C480,96,600,128,720,154.7C840,181,960,203,1080,197.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ImageStack;
