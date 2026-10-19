import { useRates } from "../context/RatesContext";

const fields = [
  { key: "baseFare", label: "Base fare (₹)" },
  { key: "baseKm", label: "Base km" },
  { key: "perKm", label: "Per km (₹)" },
  { key: "waitPerMin", label: "Waiting per min (₹)" },
];

function RateSettings() {
  const { rates, setRates, resetRates } = useRates();

  const updateVehicle = (vehicle, field, value) => {
    const num = Math.min(Math.max(Number(value), 0), 1000);
    setRates({ ...rates, [vehicle]: { ...rates[vehicle], [field]: num } });
  };

  return (
    <div className="settings">
      <h2>Rate Settings</h2>

      {["auto", "bike"].map((vehicle) => (
        <div key={vehicle} className="rate-card">
          <h3>{vehicle === "auto" ? "🛺 Auto" : "🏍️ Bike"}</h3>
          {fields.map((f) => (
            <label key={f.key}>
              {f.label}
              <input
                type="number"
                min="0"
                value={rates[vehicle][f.key]}
                onChange={(e) => updateVehicle(vehicle, f.key, e.target.value)}
              />
            </label>
          ))}
        </div>
      ))}

      <label>
        Night charge (%)
        <input
          type="number"
          min="0"
          max="100"
          value={rates.nightPercent}
          onChange={(e) =>
            setRates({ ...rates, nightPercent: Math.min(Math.max(Number(e.target.value), 0), 100) })
          }
        />
      </label>

      <button onClick={resetRates}>Default-ku reset pannu</button>
    </div>
  );
}

export default RateSettings;