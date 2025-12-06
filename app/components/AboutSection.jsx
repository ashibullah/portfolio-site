import aboutashib from '@/public/images/aboutashib.png';
import Image from 'next/image';
import AboutTabs from './AboutTabs';

const AboutSection = () => {
    return (
        <section id='about' className="px-6 md:px-10 py-10">
            <div className="flex flex-col lg:flex-row items-center gap-10">

                {/* Image */}
                <div className="flex justify-center w-full lg:w-1/2">
                    <Image 
                        src={aboutashib} 
                        width={600} 
                        alt="About Ashib Ullah" 
                        className="w-72 md:w-96 lg:w-[600px] object-cover rounded-xl"
                    />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                        About Me
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Quasi autem beatae suscipit illum nihil nam recusandae tempora,
                        in voluptas illo velit sint molestias saepe nulla quis unde error 
                        quia placeat!
                    </p>
                    <div className='flex gap-4 mt-5 '>
                        <AboutTabs apiUrl='/api/portfolioInfo' />

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
