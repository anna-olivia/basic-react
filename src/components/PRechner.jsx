import React, { useState } from "react";
import styles from "./Rechner.module.css";


const PRechner = () => {
  const [zahl, setZahl] = useState("");
  const [prozent, setProzent] = useState("");
  const [ergebnis, setErgebnis] = useState("");

  const berechnen = () => {
    const zahlWert = parseFloat(zahl);
    const prozentWert = parseFloat(prozent);

    if (isNaN(zahlWert) && isNaN(prozentWert)) {
      setErgebnis("Bitte gültige Zahlen ohne Maßeinheit eingeben");
      return;
    }

    const resultat = zahlWert * (prozentWert / 100);
    setErgebnis(resultat.toFixed(2));
  };

  return (
    <div className={styles.wrapper}>
      <h2>Prozentrechner</h2>
      <div>
        {/* <label name="zahl">Zahlenwert angeben:</label> */}
        <input
          id="zahl"
          type="number"
          value={zahl}
          onChange={(e) => setZahl(e.target.value)}
          placeholder="Zahl eingeben"
        />
      </div>
      <div>
        {/* <label name="zahl">Prozentwert angeben:</label> */}
        <input
          type="number"
          value={prozent}
          onChange={(e) => setProzent(e.target.value)}
          placeholder="Prozent eingeben"
        />
      </div>
      <button onClick={berechnen}>Berechnen</button>
      <p>
        Ergebnis: <span>{ergebnis} €</span>
      </p>
    </div>
  );
}

export default PRechner;
