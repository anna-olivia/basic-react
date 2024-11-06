import React from "react";
import PRechner from "./components/PRechner";
import VRechner from "./components/VRechner";
import styles from "./App.module.css";
import ARechner from "./components/ARechner";
import RRechner from "./components/RRechner";


const App = () => {
  return (
    <div className={styles.main}>
   <ARechner />
   <PRechner />
   <RRechner />
   <VRechner />
    </div>
  );
};

export default App;
