import regions from "./regions.json";
import destinations from "./destinations.json";

export type Red = "even" | "odd";
export type Total = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Region = keyof typeof destinations;

export const REGIONS = Object.keys(destinations) as Region[];

export const getRegion = (red: Red, total: Total) =>
  regions[red][total] as Region;

export const getDestination = (region: Region, red: Red, total: Total) =>
  destinations[region][red][total];
