export const CITIES = [
  "Albany",
  "Atlanta",
  "Baltimore",
  "Billings",
  "Birmingham",
  "Boston",
  "Buffalo",
  "Butte",
  "Casper",
  "Charleston",
  "Charlotte",
  "Chattenooga",
  "Chicago",
  "Cincinnati",
  "Cleveland",
  "Columbus",
  "Dallas",
  "Denver",
  "Des Moines",
  "Detroit",
  "El Paso",
  "Fargo",
  "Fort Worth",
  "Houston",
  "Indianapolis",
  "Jacksonville",
  "Kansas City",
  "Knoxville",
  "Las Vegas",
  "Little Rock",
  "Los Angeles",
  "Louisville",
  "Memphis",
  "Miami",
  "Milwaukee",
  "Minneapolis",
  "Mobile",
  "Nashville",
  "New Orleans",
  "New York",
  "Norfolk",
  "Oakland",
  "Oklahoma City",
  "Omaha",
  "Philadelphia",
  "Phoenix",
  "Pittsburgh",
  "Pocatello",
  "Portland, ME",
  "Portland, OR",
  "Pueblo",
  "Rapid City",
  "Reno",
  "Richmond",
  "Sacramento",
  "Salt Lake City",
  "San Antonio",
  "San Diego",
  "San Francisco",
  "Seattle",
  "Shreveport",
  "Spokane",
  "St. Louis",
  "St. Paul",
  "Tampa",
  "Tucumcari",
  "Washington",
] as const;

export type City = (typeof CITIES)[number];
