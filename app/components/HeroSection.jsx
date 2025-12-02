'use client'
import Image from "next/image";
import ashibullahimg from '@/public/images/ashibullah.png'
import { TypeAnimation } from "react-type-animation";



const HeroSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center p-6 lg:p-16 mt-20">

            {/* Text Section */}
            <div className="lg:col-span-2 text-center lg:text-left px-2">
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-red-600">Hello, I&apos;m <br /><span className="text-white text-2xl md:text-3xl lg:text-4xl " > <TypeAnimation
                    sequence={[
                        'Ashib Ullah',
                        1000,
                        'Full stack Developer',
                        1000,
                        'Graphics Designer',
                        1000,
                        'UI UX Designer',
                        1000,
                        'Video Editor',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                /></span></h1>
                <p className="text-base md:text-lg lg:text-xl mt-4 text-gray-400 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae quod minima tenetur accusantium deleniti voluptatem nostrum suscipit
                    debitis sint quae, officia, aspernatur animi adipisci id excepturi sed?
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
                    <button className="px-6 py-2 bg-red-600 text-white hover:bg-black hover:border rounded-full transition">
                        Hire me
                    </button>
                    <button className="px-6 py-2 border border-red-600 hover:bg-red-600 hover:text-white rounded-full transition">
                        Download CV
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
                <Image
                    src={ashibullahimg}
                    alt="Ashib Ullah"
                    width={600}
                    className="w-60 md:w-72 lg:w-[800px] object-cover"
                />
            </div>

        </div>
    );
};

export default HeroSection;
