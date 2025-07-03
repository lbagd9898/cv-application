import { useState } from "react";
import "./Input.css";

export default function Textarea({ label }) {
  const [value, setNewValue] = useState("");
  return (
    <div className="cv-input">
      <label className="label"> {label} </label>
      <textarea
        value={value}
        onChange={(e) => setNewValue(e.target.value)}
      ></textarea>
    </div>
  );
}
