// SAMPLE rates. Real rates check panni maathikko
const autoBike = (auto, bike) => ({ auto, bike });

export const cityRates = {
  chennai: {
    name: "Chennai",
    ...autoBike(
      { baseFare: 50, baseKm: 1.8, perKm: 18, waitPerMin: 1.5 },
      { baseFare: 25, baseKm: 1.5, perKm: 8, waitPerMin: 1 }
    ),
    nightPercent: 50,
  },
  coimbatore: {
    name: "Coimbatore",
    ...autoBike(
      { baseFare: 40, baseKm: 1.8, perKm: 16, waitPerMin: 1.5 },
      { baseFare: 20, baseKm: 1.5, perKm: 7, waitPerMin: 1 }
    ),
    nightPercent: 50,
  },
  madurai: {
    name: "Madurai",
    ...autoBike(
      { baseFare: 40, baseKm: 1.8, perKm: 15, waitPerMin: 1.5 },
      { baseFare: 20, baseKm: 1.5, perKm: 7, waitPerMin: 1 }
    ),
    nightPercent: 50,
  },
};