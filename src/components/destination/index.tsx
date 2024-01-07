import { useState } from "react";
import Toggle from "../toggle";
import {
  REGIONS,
  Red,
  Region,
  Total,
  getDestination,
  getRegion,
} from "@/utils/destinations";
import Select from "../select";

const Destination = () => {
  const [regionRed, setRegionRed] = useState<Red>("even");
  const [regionTotal, setRegionTotal] = useState<Total>(2);
  const [manualOverrideRegion, setManualOverrideRegion] =
    useState<Region | null>(null);

  const [destinationRed, setDestinationRed] = useState<Red>("even");
  const [destinationTotal, setDestinationTotal] = useState<Total>(2);

  const region = manualOverrideRegion ?? getRegion(regionRed, regionTotal);
  const destination = getDestination(region, destinationRed, destinationTotal);

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 mb-8">
      <div className="flex flex-col items-center gap-4">
        <Toggle
          options={["even", "odd"]}
          selected={regionRed}
          onSelected={(v) => {
            setRegionRed(v);
            setManualOverrideRegion(null);
          }}
        />
        <Toggle
          options={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          selected={regionTotal}
          onSelected={(v) => {
            setRegionTotal(v);
            setManualOverrideRegion(null);
          }}
        />
        <Select
          options={REGIONS}
          selected={region}
          onSelected={setManualOverrideRegion}
        />
      </div>

      <div className="flex flex-col items-center gap-4">
        <Toggle
          options={["even", "odd"]}
          selected={destinationRed}
          onSelected={setDestinationRed}
        />
        <Toggle
          options={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          selected={destinationTotal}
          onSelected={setDestinationTotal}
        />
        <h2 className="text-2xl text-green-700 font-bold">{destination}</h2>
      </div>
    </div>
  );
};

export default Destination;
