"use client";
import { useState } from "react";
import Payoff from "@/components/payoff";

export default function Home() {
  const [fn, setFn] = useState<"payoff" | "destination">("payoff");

  return (
    <main>
      {fn === "payoff" && <Payoff />}
      {fn === "destination" && <Payoff />}
    </main>
  );
}
