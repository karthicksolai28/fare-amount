export function calculateFare({ rates, vehicle, distanceKm, waitMin, isNight }) {
  const r = rates[vehicle];

  // Base fare la mudhal konjam km already include
  const extraKm = Math.max(0, distanceKm - r.baseKm);
  const distanceCharge = extraKm * r.perKm;
  const waitingCharge = waitMin * r.waitPerMin;

  const subtotal = r.baseFare + distanceCharge + waitingCharge;
  const nightCharge = isNight ? (subtotal * rates.nightPercent) / 100 : 0;
  const total = Math.round(subtotal + nightCharge);

  return {
    baseFare: r.baseFare,
    distanceCharge: Math.round(distanceCharge),
    waitingCharge: Math.round(waitingCharge),
    nightCharge: Math.round(nightCharge),
    total,
  };
}

// Driver kettadhu vs official fare
export function compareFare(official, driverAsked) {
  const diff = driverAsked - official;
  return {
    diff,
    status: diff <= 0 ? "fair" : diff <= 10 ? "slightly-high" : "overcharge",
  };
}