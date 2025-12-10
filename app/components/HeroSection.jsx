import Image from "next/image";
import ashibullahimg from '@/public/images/ashibullah.png'
import AnimatedHeroText from "./AnimatedHeroText";
import Link from "next/link";


const res = await fetch(`/api/resume`, {
        cache: "no-store", // optional
    });

const resumearr = await res.json();
// console.log(resumearr);


const HeroSection = () => {
    
   return (
        <div className="max-w-7xl mx-auto">
            <div id="home" className=" grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center p-6 lg:p-16 mt-20">

            {/* Text Section */}
            <div className="lg:col-span-2 text-center lg:text-left px-2">
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-red-600">Hello, I&apos;m <br /><span className="text-white text-2xl md:text-3xl lg:text-4xl " > 
                    <AnimatedHeroText/></span></h1>
                <p className="text-base mt-4 text-gray-300 leading-relaxed">
                    Self-taught and highly motivated Full Stack Developer with hands-on experience in building full-stack web applications. Proficient in JavaScript, React, Next.js, Node.js, and MongoDB. I have also conducted research on Machine Learning and Deep Learning, enhancing my problem-solving approach and technical versatility. Additionally, I apply my graphic design skills to create visually appealing UI/UX experiences. Passionate about clean code, continuous learning, and building impactful products. Seeking opportunities to contribute in a collaborative and fast-paced environment.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
                    <Link href={'/#contact'} className="px-6 py-2 bg-red-600 text-white hover:bg-black hover:border rounded-full transition">
                        Hire me
                    </Link>
                    <Link href={resumearr?.downloadLink} target="_blank" rel="noopener noreferrer"  className="px-6 py-2 border border-red-600 hover:bg-red-600 hover:text-white rounded-full transition">
                        Download CV
                    </Link>
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
        </div>
    );
};

export default HeroSection;
