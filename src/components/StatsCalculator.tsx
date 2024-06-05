import useStats from "../hooks/useStats";

import BuildingsStats from "./BuildingsStats";
import LandStats from "./LandStats";
import InfoStats from "./InfoStats";

function StatsCalculator() {
  const [jsonStats, setJsonStats, stats] = useStats();

  return (
    <>
      <div className="flex flex-row gap-1 transition:persist">
        <textarea
          value={jsonStats}
          onChange={(e) => setJsonStats(e.target.value)}
          className="h-10 w-10 resize-none rounded-md bg-gray-800 p-2 text-white"
        />

        <button onClick={() => setJsonStats('')}
          className="bt-4 mt-2 h-10 w-10 rounded-md bg-blue-600 px-4 py-2
          text-white hover:bg-blue-700"
        >
          Clear
        </button>
      </div>
      {stats && (
        <>
          <InfoStats stats={stats} />

          <BuildingsStats stats={stats} />

          <LandStats stats={stats} />
        </>
      )}
    </>
  );
}

export default StatsCalculator;
