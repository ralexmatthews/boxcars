import {
  REGIONS,
  Red,
  Region,
  Total,
  getDestination,
  getRegion,
} from "@/utils/destinations";
import { useState } from "react";
import SelectList from "../select_list";
import Toggle from "../toggle";

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
    <div className="space-y-8">
      {/* Result Display */}
      <div className="hidden md:block text-center bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
        <p className="text-sm text-blue-700 mb-2 font-medium">
          Your destination is
        </p>
        <div className="text-4xl font-bold text-blue-700">{destination}</div>
        <p className="text-sm text-blue-600 mt-1 font-medium">
          Region: <span className="font-bold">{region}</span>
        </p>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Region Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Region Selection
          </h3>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Red Die (Even/Odd)
              </label>
              <Toggle
                options={["even", "odd"]}
                selected={regionRed}
                onSelected={(v) => {
                  setRegionRed(v);
                  setManualOverrideRegion(null);
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Roll
              </label>
              <Toggle
                options={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                selected={regionTotal}
                onSelected={(v) => {
                  setRegionTotal(v);
                  setManualOverrideRegion(null);
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Override Region
              </label>
              <SelectList
                options={REGIONS}
                selected={region}
                onSelected={setManualOverrideRegion}
              />
            </div>
          </div>
        </div>

        {/* Destination Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Destination Selection
          </h3>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Red Die (Even/Odd)
              </label>
              <Toggle
                options={["even", "odd"]}
                selected={destinationRed}
                onSelected={setDestinationRed}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Roll
              </label>
              <Toggle
                options={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                selected={destinationTotal}
                onSelected={setDestinationTotal}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden text-center bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
        <p className="text-sm text-blue-700 mb-2 font-medium">
          Your destination is
        </p>
        <div className="text-4xl font-bold text-blue-700">{destination}</div>
        <p className="text-sm text-blue-600 mt-1 font-medium">
          Region: <span className="font-bold">{region}</span>
        </p>
      </div>
    </div>
  );
};

export default Destination;
