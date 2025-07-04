import "../styles/Input.css";

export default function Textarea(props) {
  return (
    <div className="cv-input">
      <label className="label"> {props.label} </label>
      <textarea
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
}
