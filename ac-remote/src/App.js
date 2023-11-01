import "./App.css";
import logo from "./aclogo.png";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState("AC OFF");
  const [temp, setTemp] = useState(18);
  const [flag, setFlag] = useState(true);

  const onOffBtn = () => {
    if (flag) {
      const newStatus = temp.toString() + "°C";
      setStatus(newStatus);
    } else {
      setStatus("AC OFF");
      setTemp(18);
    }
    setFlag(!flag);
  };

  const inc = () => {
    if (!flag) {
      if (temp < 30) {
        const newTemp = temp + 1;
        setTemp(newTemp);
        const newStatus = newTemp.toString() + "°C";
        setStatus(newStatus);
      }
    }
  };

  const dec = () => {
    if (!flag) {
      if (temp > 18) {
        const newTemp = temp - 1;
        setTemp(newTemp);
        const newStatus = newTemp.toString() + "°C";
        setStatus(newStatus);
      }
    }
  };

  return (
    <div className="App">
      <div className="remote-container">
        <div className="remote-display-container">
          <div className="remote-display">{status}</div>
        </div>
        <div className="onoff">
          <button className="onoff-btn" onClick={onOffBtn}>
            ON/OFF
          </button>
        </div>
        <div className="bc">
          <button className="circlebutton" onClick={inc}>
            +
          </button>
          <button className="circlebutton" onClick={dec}>
            -
          </button>
        </div>
        <div className="logo">
          <img src={logo} className="center-image" />
        </div>
      </div>
    </div>
  );
}

export default App;
