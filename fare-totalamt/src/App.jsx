import { useState } from "react";
import { useRates } from "./context/RatesContext";
import useLocalStorage from "./hooks/useLocalStorage";
import { calculateFare, compareFare } from "./utils/calculateFare";
import TripForm from "./components/TripForm";
import FareResult from "./components/FareResult";
import RateSettings from "./components/RateSettings";
import TripHistory from "./components/TripHistory";
import "./App.css";
import { useEffect } from "react";
import CitySelect from "./components/CitySelect";

function App() {
  const { rates } = useRates();
  const [theme, setTheme] = useLocalStorage("fk-theme", "light");

useEffect(() => {
  document.documentElement.dataset.theme = theme;
}, [theme]);
  const [tab, setTab] = useState("calculator");
  const [trips, setTrips] = useLocalStorage("fk-trips", []);
  const [trip, setTrip] = useState({
    vehicle: "auto",
    distanceKm: 5,
    waitMin: 0,
    driverAsked: 0,
    isNight: false,
  });

  const fare = calculateFare({
    rates,
    vehicle: trip.vehicle,
    distanceKm: Number(trip.distanceKm),
    waitMin: Number(trip.waitMin),
    isNight: trip.isNight,
  });

  const driverAsked = Number(trip.driverAsked);
  const comparison = compareFare(fare.total, driverAsked);

  const saveTrip = () => {
    const newTrip = {
      id: Date.now(),
      date: new Date().toLocaleString("en-IN"),
      vehicle: trip.vehicle,
      distanceKm: Number(trip.distanceKm),
      official: fare.total,
      driverAsked,
      diff: comparison.diff,
    };
    setTrips([newTrip, ...trips]); // latest trip mela varum
  };

  return (
    <div className="app">
      <header className="header">
  <h1>Fare Kanakku</h1>
  <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
    {theme === "light" ? "🌙" : "☀️"}
  </button>
</header>

<CitySelect />

      <nav className="tabs">
        <button className={tab === "calculator" ? "active" : ""} onClick={() => setTab("calculator")}>Calculator</button>
        <button className={tab === "rates" ? "active" : ""} onClick={() => setTab("rates")}>Rates</button>
        <button className={tab === "history" ? "active" : ""} onClick={() => setTab("history")}>History ({trips.length})</button>
      </nav>

      {tab === "calculator" && (
        <>
          <TripForm trip={trip} setTrip={setTrip} />
          <FareResult fare={fare} comparison={comparison} driverAsked={driverAsked} />
          <button className="save-btn" onClick={saveTrip}>Trip save pannu</button>
        </>
      )}
      {tab === "rates" && <RateSettings />}
      {tab === "history" && <TripHistory trips={trips} setTrips={setTrips} />}
    </div>
  );
}

export default App;