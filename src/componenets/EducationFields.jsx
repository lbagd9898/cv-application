import Input from "./Input";
import "../styles/EducationField.css";

export default function EducationFields({ data, onChange }) {
  const handle = (field) => (e) => onChange(data.id, field, e.target.value);

  return (
    <fieldset>
      <div>
        <Input
          label="University:"
          name="university"
          value={data.university}
          onChange={handle("university")}
        ></Input>
        <Input
          label="Degree:"
          name="degree"
          value={data.degree}
          onChange={handle("degree")}
        ></Input>
      </div>
      <div>
        <Input
          label="Dates:"
          name="degreeDates"
          value={data.degreeDates}
          onChange={handle("degreeDates")}
        ></Input>
        <Input
          label="Notes:"
          name="notes"
          value={data.notes}
          onChange={handle("notes")}
        ></Input>
      </div>
    </fieldset>
  );
}
