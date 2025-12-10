"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

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

  const contentArray = activeTab?.content
    ? activeTab.content.split(",").map((item) => item.trim())
    : [];

  return (
    <div className="mt-5">

      {/* ================= TAB BUTTONS WITH UNDERLINE ANIMATION ================= */}
      <div className="flex gap-6 mb-6 relative border-b border-gray-700 pb-2">
        {tabs.map((tab) => (
          <motion.button
            key={tab.slug}
            onClick={() => setActive(tab.slug)}
            className={`relative pb-2 transition ${
              active === tab.slug ? "text-red-500" : "text-gray-300"
            }`}
            initial={false}
          >
            {tab.name}

            {/* Animated underline */}
            {active === tab.slug && (
              <motion.div
                layoutId="underline"
                className="absolute rounded-3xl bottom-0 left-0 right-0 h-[2px] bg-red-500"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* ================= CONTENT WITH FADE ANIMATION ================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="flex flex-wrap gap-2"
        >
          {contentArray.length > 0 ? (
            contentArray.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm hover:bg-red-600 transition"
              >
                {item}
              </span>
            ))
          ) : (
            <p className="text-gray-400">Loading...</p>
          )}
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default AboutTabs;
