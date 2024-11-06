import React, { useState } from "react";
import styles from "./Rechner.module.css";


const RRechner = () => {
  const [zahl1, setZahl1] = useState("");
  const [zahl2, setZahl2] = useState("");
  const [ergebnis, setErgebnis] = useState("");

  const berechnen = () => {
    const zahlWert1 = parseFloat(zahl1);
    const zahlWert2 = parseFloat(zahl2);

    if (isNaN(zahlWert1) && isNaN(zahlWert2)) {
      setErgebnis("Bitte gültige Zahlen ohne Maßeinheit eingeben");
      return;
    }

    const resultat = zahlWert1 % zahlWert2;
    setErgebnis(resultat.toFixed(2));
  };

  return (
    <div className={styles.wrapper}>
      <h2>Restrechner</h2>
      <div>
        <input
          id="zahl"
          type="number"
          value={zahl1}
          onChange={(e) => setZahl1(e.target.value)}
          placeholder="Zahl eingeben"
        />
      </div>
      <div>
        <input
          type="number"
          value={zahl2}
          onChange={(e) => setZahl2(e.target.value)}
          placeholder="Prozent eingeben"
        />
      </div>
      <button onClick={berechnen}>Berechnen</button>
      <p>
        Ergebnis: <span>{ergebnis}  Rest </span>
      </p>
    </div>
  );
}

export default RRechner;
