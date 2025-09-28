import { CITIES, City } from "@/utils/cities";
import { getPayoff } from "@/utils/payoff";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import SelectList from "../select_list";

const Payoff = () => {
  const [origin, setOrigin] = useState<City>("Albany");
  const [destination, setDestination] = useState<City>("Albany");

  const payoff = getPayoff(origin, destination);

  return (
    <div className="space-y-6">
      {/* Result Display */}
      <div className="text-center bg-green-50 rounded-xl p-6 border-2 border-green-200">
        <div className="flex justify-center items-center gap-1 text-lg text-green-800 font-bold">
          {origin}
          <MoveRight />
          {destination}
        </div>
        <div className="text-4xl font-bold text-green-700">
          ${payoff.toLocaleString()}
        </div>
      </div>

      {/* City Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Origin City
          </label>
          <SelectList
            options={CITIES}
            selected={origin}
            onSelected={setOrigin}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Destination City
          </label>
          <SelectList
            options={CITIES}
            selected={destination}
            onSelected={setDestination}
          />
        </div>
      </div>
    </div>
  );
};

export default Payoff;
