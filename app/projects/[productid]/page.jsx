'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLink } from 'react-icons/fa';
import bistroImg from '@/public/images/bistro.png';

const ProjectDetails = () => {
  const { productid } = useParams(); // get the dynamic route param
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${productid}`);
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [productid]);

  if (loading) return <p className="text-center mt-10 text-gray-400">Loading project...</p>;
  if (error || !project) return <p className="text-center mt-10 text-red-500">Project not found.</p>;

  return (
    <div className="p-6 sm:p-10 mx-auto max-w-6xl flex flex-col md:flex-row gap-8 items-start mt-20 mb-20">
      {/* Project Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto relative rounded-md">
        <Image
          src={project.img?.trim() || bistroImg}
          alt={project.title}
          width={600}
          height={600}
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

        {project.livelink && (
          <Link
            href={project.livelink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-blue-400 mt-5 flex items-center gap-2"
          >
            <FaLink /> Live Link
          </Link>
        )}

        {project.repolink && (
          <Link
            href={project.repolink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-blue-400 mt-2 flex items-center gap-2"
          >
            <FaGithub /> Repo Link
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
