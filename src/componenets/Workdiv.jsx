import "../styles/Workdiv.css";

export default function Workdiv({ workData }) {
  return (
    <div className="workDiv">
      <section className="info">
        <div>
          <strong>{workData.company}</strong>
          <i>{workData.position}</i>
        </div>
        <div>{workData.location}</div>
      </section>
      <section>{workData.dates}</section>
      <section>{workData.description}</section>
      <br></br>
    </div>
  );
}
