'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import bistroImg from '@/public/images/bistro.png';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects'); // relative URL works in browser
        const data = await res.json();
        setProjects(Array.isArray(data) ? data : data.projects || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  if (projects.length === 0) {
    return <p className="text-center mt-10 text-gray-400">Loading projects...</p>;
  }

  return (
    <div id='projects' className="px-10 py-16">
      <h2 className="text-4xl font-bold mb-10 text-center">My Projects & Research</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.id}`}
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
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
