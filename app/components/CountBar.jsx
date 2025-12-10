"use client";

import React, { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import { useInView } from "react-intersection-observer";

// Get current year
const currentYear = new Date().getFullYear();

// Calculate experience dynamically
const designExperienceYears = currentYear - 2018; // From 2018
const devExperienceYears = currentYear - 2021;    // From 2021

const stats = [
  { number: 40, label: "Repositories", suffix: "+" },
  { number: 200, label: "Problem Solving", suffix: "+" },
  { number: 300, label: "Designs", suffix: "+" },
  { number: designExperienceYears, label: "Years of Design Experience", suffix: "+" },
  { number: devExperienceYears, label: "Years of Learning Development", suffix: "+" },
];

const CountBar = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3,    // trigger when 30% of component is visible
  });

  return (
    <div className="sm:p-10 lg:p-0 mt-15" ref={ref}>
      <div className="bg-red-950/20  text-white py-15 px-20 rounded-xl shadow-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center items-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-white">
                {inView ? (
                  <AnimatedNumbers
                    animateToNumber={stat.number}
                    fontStyle={{ fontSize: 36 }}
                    configs={(number, index) => {
                      return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                    }}
                  />
                ) : (
                  0
                )}
                {stat.suffix}
              </h3>
              <p className="mt-2 text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountBar;
