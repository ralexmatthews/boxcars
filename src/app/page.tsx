"use client";
import Destination from "@/components/destination";
import HomeBases from "@/components/home_bases";
import Payoff from "@/components/payoff";
import Toggle from "@/components/toggle";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [fn, setFn] = useState<"Payoff" | "Destination" | "Home Bases">(
    "Payoff",
  );

  return (
    <main>
      <div className="px-4 py-2 bg-amber-50 shadow flex items-end gap-4 border-b justify-center sm:justify-start">
        <Image src="/train.png" alt="boxcars" width={48} height={48} />
        <p className="text-3xl leading-6">Boxcar Assistant</p>
      </div>
      <div className="flex flex-col items-center mt-8 gap-8 max-w-lg mx-auto px-8">
        <Toggle
          options={["Payoff", "Destination", "Home Bases"]}
          selected={fn}
          onSelected={setFn}
        />
        {fn === "Payoff" && <Payoff />}
        {fn === "Destination" && <Destination />}
        {fn === "Home Bases" && <HomeBases />}
      </div>
    </main>
  );
}
