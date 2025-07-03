import { useState } from "react";
import "./Input.css";

export default function Input(props) {
  const [value, setNewValue] = useState("");
  return (
    <div className="cv-input">
      <label className="label"> {props.label} </label>
      <input
        className="input"
        value={value}
        onChange={(e) => setNewValue(e.target.value)}
      ></input>
    </div>
  );
}
