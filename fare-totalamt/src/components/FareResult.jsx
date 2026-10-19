function FareResult({ fare, comparison, driverAsked }) {
  const messages = {
    fair: "✅ Sariyaana fare, paera pesa vendaam",
    "slightly-high": "⚠️ Konjam jaasthi, konjam bargain pannu",
    overcharge: "❌ Romba jaasthi, bargain pannu",
  };

  return (
    <div className="result">
      <h2>Official Fare: ₹{fare.total}</h2>

      <table>
        <tbody>
          <tr><td>Base fare</td><td>₹{fare.baseFare}</td></tr>
          <tr><td>Distance</td><td>₹{fare.distanceCharge}</td></tr>
          <tr><td>Waiting</td><td>₹{fare.waitingCharge}</td></tr>
          <tr><td>Night charge</td><td>₹{fare.nightCharge}</td></tr>
        </tbody>
      </table>

      {driverAsked > 0 && (
        <div className={`badge ${comparison.status}`}>
          <p>{messages[comparison.status]}</p>
          <p>Difference: ₹{comparison.diff}</p>
        </div>
      )}
    </div>
  );
}

export default FareResult;