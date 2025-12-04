import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A modern portfolio built with Next.js and Tailwind CSS.",
        image: "/images/bistro.png",
    },
    {
        id: 2,
        title: "E-Commerce App",
        description: "A full-stack ecommerce store with Stripe payments.",
        image: "/images/bistro.png",
    },
    {
        id: 3,
        title: "ML DL",
        description: "A real-time chat app using Firebase & React.",
        image: "/images/bistro.png",
    },
    {
        id: 4,
        title: "Calculator",
        description: "A real-time chat app using Firebase & React.",
        image: "/images/bistro.png",
    },
    {
        id: 5,
        title: "XYZ",
        description: "A real-time chat app using Firebase & React.",
        image: "/images/bistro.png",
    },
];

const MyProject = () => {
    return (
        <div className="px-10 py-16">
            <h2 className="text-4xl font-bold mb-10 text-center">My Projects & Research</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
                    >
                        <div className="w-full h-52 relative">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProject;
