import React, { useState } from "react";
import styles from "./Rechner.module.css";

const ARechner = () => {
  const [zahl1, setZahl1] = useState("");
  const [zahl2, setZahl2] = useState("");
  const [ergebnis, setErgebnis] = useState(null);
  const [operation, setOperation] = useState("");

  const handleZahlChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const berechne = (op) => {
    const zahlWert1 = parseFloat(zahl1);
    const zahlWert2 = parseFloat(zahl2);

    if (isNaN(zahlWert1) || isNaN(zahlWert2)) {
      setErgebnis("Bitte gültige Zahlen eingeben");
      return;
    }

    let resultat;
    switch (op) {
      case "+":
        resultat = zahlWert1 + zahlWert2;
        break;
      case "-":
        resultat = zahlWert1 - zahlWert2;
        break;
      case "/":
        resultat = zahlWert2 !== 0 ? zahlWert1 / zahlWert2 : "Division durch Null nicht möglich";
        break;
      case "*":
        resultat = zahlWert1 * zahlWert2;
        break;
      default:
        resultat = "Ungültige Operation";
    }

    setErgebnis(typeof resultat === "number" ? resultat.toFixed(2) : resultat);
    setOperation(op);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Arithmetic Rechner</h2>
      <div>
        <input
          type="number"
          value={zahl1}
          onChange={handleZahlChange(setZahl1)}
          placeholder="Zahl eingeben"
        />
      </div>
      <div>
        <input
          type="number"
          value={zahl2}
          onChange={handleZahlChange(setZahl2)}
          placeholder="Zahl eingeben"
        />
      </div>
      <div className={styles.op}>
        {["+", "-", "/", "*"].map((op) => (
          <button key={op} onClick={() => berechne(op)}>{op}</button>
        ))}
      </div>
      {ergebnis !== null ? (
        <p>
          Ergebnis: <span>{ergebnis}</span>
          {typeof ergebnis === "number" && ` (${zahl1} ${operation} ${zahl2})`}
        </p>
      ): (<p>Ergebnis: <span></span></p>)}
    </div>
  );
}

export default ARechner;