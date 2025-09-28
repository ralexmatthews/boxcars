import { useState } from "react";
import { CITIES, City } from "@/utils/cities";
import { getPayoff } from "@/utils/payoff";
import SelectList from "../select_list";

const Payoff = () => {
  const [origin, setOrigin] = useState<City>("Albany");
  const [destination, setDestination] = useState<City>("Albany");

  const payoff = getPayoff(origin, destination);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center ">
        <p>
          {origin} to {destination} pays
        </p>
        <h2 className="text-2xl text-green-700 font-bold">
          ${payoff.toLocaleString()}
        </h2>
      </div>
      <div className="flex flex-col items-center gap-4 min-[400px]:flex-row min-[400px]:items-start">
        <div>
          <p>Origin</p>
          <SelectList
            options={CITIES}
            selected={origin}
            onSelected={setOrigin}
          />
        </div>
        <div>
          <p>Destination</p>
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
