import Input from "./Input.jsx";
import Textarea from "./Textarea";

export default function WorkFields({ data, onChange }) {
  const handle = (field) => (e) => {
    onChange(data.id, field, e.target.value);
  };
  return (
    <fieldset>
      <div>
        <Input
          label="Company: "
          name="company"
          value={data.company}
          onChange={handle("company")}
        ></Input>
        <Input
          label="Position: "
          name="position"
          value={data.position}
          onChange={handle("position")}
        ></Input>
      </div>
      <div>
        <Input
          label="Dates "
          name="dates"
          value={data.dates}
          onChange={handle("dates")}
        ></Input>
        <Input
          label="Location: "
          name="location"
          value={data.location}
          onChange={handle("location")}
        ></Input>
      </div>
      <Textarea
        label="Description: "
        name="description"
        value={data.description}
        onChange={handle("description")}
      ></Textarea>
    </fieldset>
  );
}
