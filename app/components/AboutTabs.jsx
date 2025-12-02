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

    const activeContent =
        tabs.find((tab) => tab.slug === active)?.content || "";

    return (
        <div className="mt-5">

            {/* Dynamic buttons */}
            <div className="flex gap-6 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.slug}
                        onClick={() => setActive(tab.slug)}
                        className={`hover:text-red-600 ${
                            active === tab.slug
                                ? "text-red-600 font-semibold"
                                : "text-gray-300"
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* Dynamic content */}
            <div className="text-gray-300">
                {active ? activeContent : "Loading..."}
            </div>

        </div>
    );
};

export default AboutTabs;
