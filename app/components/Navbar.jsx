import Image from "next/image";
import ashibullahimg from '@/public/images/ashibullah.png'

const Navbar = () => {
    return (
        <div className="grid grid-cols-3 justify-center items-center p-10 mt-2 ">
            <div className=" grid col-span-2 p-4 ">
                <h1 className="font-bold text-3xl lg:text-6xl">I'm Ashib Ullah</h1>
                <p className="text-xl mt-3 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quod minima tenetur accusantium deleniti voluptatem nostrum suscipit debitis sint quae, officia, aspernatur animi adipisci id excepturi sed? Omnis, ipsa corrupti.</p>
            </div>
            <div>
                <Image src={ashibullahimg} alt="Ashib Ullah" width={400} />
            </div>
        </div>
    );
};

export default Navbar;