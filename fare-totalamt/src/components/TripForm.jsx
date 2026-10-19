function TripForm({ trip, setTrip }) {
  // oru input maarina, trip object-la andha field mattum update aagum
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTrip({ ...trip, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="form">
      <div className="toggle">
        <button
          className={trip.vehicle === "auto" ? "active" : ""}
          onClick={() => setTrip({ ...trip, vehicle: "auto" })}
        >
          🛺 Auto
        </button>
        <button
          className={trip.vehicle === "bike" ? "active" : ""}
          onClick={() => setTrip({ ...trip, vehicle: "bike" })}
        >
          🏍️ Bike
        </button>
      </div>

      <label>
        Distance (km)
        <input type="number" name="distanceKm" value={trip.distanceKm} onChange={handleChange} />
      </label>

      <label>
        Waiting time (min)
        <input type="number" name="waitMin" value={trip.waitMin} onChange={handleChange} />
      </label>

      <label>
        Driver kettadhu (₹)
        <input type="number" name="driverAsked" value={trip.driverAsked} onChange={handleChange} />
      </label>

      <label className="check">
        <input type="checkbox" name="isNight" checked={trip.isNight} onChange={handleChange} />
        Night charge (10 PM - 5 AM)
      </label>
    </div>
  );
}

export default TripForm;