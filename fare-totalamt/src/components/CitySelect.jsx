import { useRates } from "../context/RatesContext";
import { cityRates } from "../data/cityRates";

function CitySelect() {
  const { city, setCity } = useRates();

  return (
    <label className="city">
      Ooru
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        {Object.entries(cityRates).map(([key, c]) => (
          <option key={key} value={key}>{c.name}</option>
        ))}
      </select>
    </label>
  );
}

export default CitySelect;