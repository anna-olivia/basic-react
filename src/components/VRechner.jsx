import React, { useState } from "react";
import styles from "./Rechner.module.css";

// Rechnung editieren damit auch nicht abhängig von kleiner Zahl zu großer Zahl
const VRechner = () => {
  const [kZahl, setKZahl] = useState("");
  const [gZahl, setGZahl] = useState("");
  const [verhaeltnis, setVerhaeltnis] = useState("");

  const berechnen = () => {
    const kWert = parseFloat(kZahl);
    const gWert = parseFloat(gZahl);

    if (isNaN(kWert) && isNaN(gWert)) {
      setVerhaeltnis("Bitte gültige Zahlen ohne Maßeinheit eingeben");
      return;
    }

    const verhaeltnis = kWert/gWert * 100;
    setVerhaeltnis(verhaeltnis.toFixed(2));
  };

  return (
    <div className={styles.wrapper}>
      <h2>Verhältnisrechner</h2>
      <div>
        {/* <label name="zahl">Zahlenwert angeben:</label> */}
        <input
          id="zahl"
          type="number"
          value={kZahl}
          onChange={(e) => setKZahl(e.target.value)}
          placeholder="kleinere Zahl eingeben"
        />
      </div>
      <div>
        {/* <label name="zahl">Prozentwert angeben:</label> */}
        <input
          type="number"
          value={gZahl}
          onChange={(e) => setGZahl(e.target.value)}
          placeholder="größere Zahl eingeben"
        />
      </div>
      <button onClick={berechnen}>Berechnen</button>
      <p>
        Ergebnis: <span>{verhaeltnis} %</span>
      </p>
    </div>
  );
}

export default VRechner;
