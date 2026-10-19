function TripHistory({ trips, setTrips }) {
  const deleteTrip = (id) => setTrips(trips.filter((t) => t.id !== id));

  const totalOfficial = trips.reduce((sum, t) => sum + t.official, 0);
  // driver kettu official-ah vida jaasthi irundha mattum extra-ah count pannum
  const totalExtra = trips.reduce(
    (sum, t) => sum + (t.driverAsked > 0 && t.diff > 0 ? t.diff : 0),
    0
  );

  if (trips.length === 0) return <p>Innum trip save pannala.</p>;

  return (
    <div className="history">
      <h2>Trip History</h2>
      <p>Total official fare: ₹{totalOfficial}</p>
      <p>Jaasthi kettadhu (total): ₹{totalExtra}</p>

      {trips.map((t) => (
        <div key={t.id} className="trip-item">
          <div>
            <strong>{t.vehicle === "auto" ? "🛺" : "🏍️"} {t.distanceKm} km</strong>
            <small>{t.date}</small>
            <p>Official ₹{t.official}{t.driverAsked > 0 && ` | Driver ₹${t.driverAsked}`}</p>
          </div>
          <button onClick={() => deleteTrip(t.id)}>🗑️</button>
        </div>
      ))}

      <button onClick={() => setTrips([])}>Ellam clear pannu</button>
    </div>
  );
}

export default TripHistory;