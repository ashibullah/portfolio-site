import React from "react";

// Get current year
const currentYear = new Date().getFullYear();

// Calculate experience dynamically
const designExperienceYears = currentYear - 2018; // From 2018
const devExperienceYears = currentYear - 2022;    // From 2022

const stats = [
    { number: "40+", label: "Repositories" },
    { number: "200+", label: "Problem Solving" },
    { number: "300+", label: "Designs" },
    { number: `${designExperienceYears}+`, label: "Years of Design Experience" },
    { number: `${devExperienceYears}+`, label: "Years of Learning Development" },
];

const CountBar = () => {
    return (
        <div className="sm:p-10 lg:p-0 mt-15">
            <div className="bg-gray-900 text-white py-12 px-10 rounded-xl shadow-lg">
                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center items-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <h3 className="text-4xl font-bold text-red-600">{stat.number}</h3>
                            <p className="mt-2 text-gray-300">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CountBar;
