import styles from "../styles/Textarea.module.css";

export default function Textarea(props) {
  return (
    <div className={styles.input}>
      <label className={styles.lable}> {props.label} </label>
      <textarea
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
}
