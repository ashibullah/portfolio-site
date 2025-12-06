import Image from "next/image";
import bistroImg from "@/public/images/bistro.png";

const ProjectDetails = async ({ params }) => {
    const id = (await params).productid;

    // Fetch project from API
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`, {
        // cache: "no-store", // ensures server-side fetch
    });

    if (!res.ok) return <p>Project not found.</p>;

    const project = await res.json();

    return (
        <div className="p-6 sm:p-10 mx-auto mt-10 max-w-6xl flex flex-col md:flex-row gap-8 items-start mt-20 mb-20">
            {/* Project Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative rounded-md overflow-hidden">
                <Image
                    src={project.img?.trim() || bistroImg}
                    alt={project.title}
                    width={600}
                    className="object-cover rounded-md"
                />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-start">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">{project.title}</h1>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-500 capitalize">
                    <strong>Category:</strong> {project.category}
                </p>
            </div>
        </div>

    );
};

export default ProjectDetails;
