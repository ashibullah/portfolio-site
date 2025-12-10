import Image from "next/image";

export default function GitHubGraph() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 mb-20">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-3 text-gray-200">
        Contributions in the last year
      </h2>

      {/* GitHub style wrapper */}
      <div className="rounded-lg border border-[#30363d]  p-4">
         <Image
          src="https://ghchart.rshah.org/c62cac/ashibullah"
          alt="Ashib Ullah GitHub Contribution Chart"
          width={896}
          height={112}
          className="w-full h-auto invert"
          unoptimized
        />

        {/* Legend (GitHub style) */}
        <div className="flex justify-end items-center gap-2 mt-3 text-xs text-gray-400">
          <span>Less</span>
          <div className="w-3 h-3 bg-[#161b22] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#0e4429] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#006d32] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#26a641] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#39d353] rounded-sm"></div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
