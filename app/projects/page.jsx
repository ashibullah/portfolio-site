import Image from "next/image";
import bistroImg from '@/public/images/bistro.png'
import Link from "next/link";

const res = await fetch(`/api/projects`, {
    // cache: "no-store", // optional
});

const projects = await res.json();

const AllProjects = () => {
    return (
        <div id='projects' className="px-10 py-16">
            <h2 className="text-4xl font-bold mb-10 text-center">My Projects & Research</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project) => (
                    <Link href={`/projects/${project.id}`}
                        key={project.id}
                        className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
                    >
                        <div className="w-full h-52 relative">
                            <Image
                                src={project.img?.trim() || bistroImg}
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
                    </Link>
                ))}
            </div>
            
        </div>
    );
};

export default AllProjects;
