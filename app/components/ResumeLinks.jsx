'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ResumeLinks = () => {
  const [resumearr, setResumearr] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await fetch('/api/resume', { cache: 'no-store' });
        const data = await res.json();
        setResumearr(data);
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };

    fetchResume();
  }, []);

  return (
    <div className="flex gap-4">
      <Link
        href={'/#contact'}
        className="px-6 py-2 bg-red-600 text-white hover:bg-black hover:border rounded-full transition"
      >
        Hire me
      </Link>
      <Link
        href={resumearr?.downloadLink || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 border border-red-600 hover:bg-red-600 hover:text-white rounded-full transition"
      >
        Download CV
      </Link>
    </div>
  );
};

export default ResumeLinks;
