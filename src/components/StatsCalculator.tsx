import useStats from "../hooks/useStats";

import BuildingsStats from "./BuildingsStats";
import LandStats from "./LandStats";
import InfoStats from "./InfoStats";

function StatsCalculator() {
  const [jsonStats, setJsonStats, stats] = useStats();

  return (
    <>
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
