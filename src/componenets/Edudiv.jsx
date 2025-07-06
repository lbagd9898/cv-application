import "../styles/Edudiv.css";

export default function Edudiv({ eduData }) {
  return (
    <div id="parent">
      <div>
        <strong>{eduData.university}</strong>
        <i>{eduData.degreeDates}</i>
      </div>
      <div>
        <div>{eduData.degree}</div>
        <div>{eduData.notes}</div>
      </div>
    </div>
  );
}
