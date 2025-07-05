import styles from "../styles/Input.module.css";

export default function Input(props) {
  return (
    <div className={styles.cvInput}>
      <label className={styles.label}> {props.label} </label>
      <input
        name={props.name}
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}
