import { createContext, useContext } from "react";
import { cityRates } from "../data/cityRates";
import useLocalStorage from "../hooks/useLocalStorage";

const RatesContext = createContext();

export function RatesProvider({ children }) {
  // Pudhu key, so pazhaya "fk-rates" data-oda conflict aagaadhu
  const [allRates, setAllRates] = useLocalStorage("fk-all-rates", cityRates);
  const [city, setCity] = useLocalStorage("fk-city", "chennai");

  const rates = allRates[city] ?? cityRates[city] ?? cityRates.chennai;

  // Edit panna current city-ku mattum save aagum
  const setRates = (newRates) => setAllRates({ ...allRates, [city]: newRates });
  const resetRates = () => setRates(cityRates[city]);

  return (
    <RatesContext.Provider value={{ rates, setRates, resetRates, city, setCity }}>
      {children}
    </RatesContext.Provider>
  );
}

export const useRates = () => useContext(RatesContext);