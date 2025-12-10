"use client";

import { useState, useEffect } from "react";

const AboutTabs = ({ apiUrl }) => {
  const [tabs, setTabs] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setTabs(data.tabs);
        setActive(data.tabs[0]?.slug); 
      } catch (error) {
        console.error("Failed to load tabs:", error);
      }
    };

    getData();
  }, [apiUrl]);

  const activeTab = tabs.find((tab) => tab.slug === active);

  // Split content into array if it exists
  const contentArray = activeTab?.content
    ? activeTab.content.split(",").map((item) => item.trim())
    : [];

  return (
    <div className="mt-5">
      {/* Dynamic buttons */}
      <div className="flex gap-6 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.slug}
            onClick={() => setActive(tab.slug)}
            className={`hover:text-red-600 ${
              active === tab.slug ? "text-red-600 font-semibold" : "text-gray-300"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Dynamic content */}
      <div className="flex flex-wrap gap-1 text-gray-300">
        {contentArray.length > 0 ? (
          contentArray.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-red-600 transition"
            >
              {item}
            </span>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default AboutTabs;
