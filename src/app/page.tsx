"use client";
import Destination from "@/components/destination";
import Payoff from "@/components/payoff";
import Players from "@/components/players";
import Toggle from "@/components/toggle";
import { useState } from "react";

export default function Home() {
  const [fn, setFn] = useState<"Payoff" | "Destination" | "Players">("Payoff");

  return (
    <main
      className="min-h-screen"
      style={{
        background: "rgb(170, 209, 217)",
      }}
    >
      <div
        className="w-full min-h-screen"
        style={{
          background:
            'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url("/boxcars-map.jpeg")',
          backgroundSize: "100% 100%, 1280px auto",
          backgroundPosition: "center center, top",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        {/* Header */}
        <header>
          <div className="px-4 py-4 flex items-center gap-3">
            {/*<div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
            <Image src="/train.png" alt="boxcars" width={28} height={28} />
          </div>*/}
            <div className="flex">
              <div className="flex flex-col mt-2 items-end">
                <div className="bg-yellow-50 rounded-tl-xl rounded-bl-xl border-3 border-r-0 border-amber-600 h-5 w-16" />
                <div className="bg-yellow-50 rounded-bl-xl border-t-0 border-3 border-r-0 border-amber-600 h-5 w-12" />
                <div className="bg-yellow-50 rounded-bl-xl border-t-0 border-3 border-r-0 border-amber-600 h-5 w-8" />
              </div>
              <div className="p-2 rounded-xl border-3 bg-yellow-50 border-amber-600">
                <h1 className="p-2 text-2xl font-bold text-primary leading-tight rounded-lg border-3 bg-yellow-50 border-amber-600">
                  Boxcars Assistant
                </h1>
              </div>
              <div className="flex flex-col mt-2 items-start">
                <div className="rounded-tr-xl rounded-br-xl border-3 border-l-0 bg-yellow-50 border-amber-600 h-5 w-16" />
                <div className="rounded-br-xl border-t-0 border-3 border-l-0 bg-yellow-50 border-amber-600 h-5 w-12" />
                <div className="rounded-br-xl border-t-0 border-3 border-l-0 bg-yellow-50 border-amber-600 h-5 w-8" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 py-6 max-w-5xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Toggle
              options={["Payoff", "Destination", "Players"]}
              selected={fn}
              onSelected={setFn}
            />
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {fn === "Payoff" && <Payoff />}
            {fn === "Destination" && <Destination />}
            {fn === "Players" && <Players />}
          </div>
        </div>
      </div>
    </main>
  );
}
