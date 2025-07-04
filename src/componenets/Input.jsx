import "../styles/Input.css";

export default function Input(props) {
  return (
    <div className="cv-input">
      <label className="label"> {props.label} </label>
      <input
        name={props.name}
        className="input"
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}
