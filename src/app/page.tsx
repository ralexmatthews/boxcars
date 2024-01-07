"use client";
import { useState } from "react";
import Payoff from "@/components/payoff";
import Toggle from "@/components/toggle";
import Destination from "@/components/destination";

export default function Home() {
  const [fn, setFn] = useState<"Payoff" | "Destination">("Payoff");

  return (
    <main>
      <div className="flex flex-col items-center mt-4 gap-4">
        <Toggle
          options={["Payoff", "Destination"]}
          selected={fn}
          onSelected={setFn}
        />
        {fn === "Payoff" && <Payoff />}
        {fn === "Destination" && <Destination />}
      </div>
    </main>
  );
}
