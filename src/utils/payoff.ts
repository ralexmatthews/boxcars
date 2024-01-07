import { City } from "./cities";
import payoffs from "./payoffs.json";

export const getPayoff = (origin: City, destination: City): number =>
  payoffs[origin][destination];
