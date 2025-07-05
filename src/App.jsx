import { useState } from "react";
import "./styles/App.css";
import Input from "./componenets/Input.jsx";
import Textarea from "./componenets/Textarea.jsx";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    workExperience: "",
  });

  //saves education data user inputs in form
  const [eduData, setEduData] = useState({
    degree: "",
    university: "",
    degreeDates: "",
    notes: "",
  });

  //saves work experience data user puts in form
  const workTemplate = {
    company: "",
    position: "",
    dates: "",
    description: "",
  };

  const [workData, setWorkData] = useState([{ ...workTemplate }]);

  const initialCvData = {
    contact: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    education: [{ degree: "", university: "", degreeDates: "", notes: "" }],
    work: [],
  };

  const [cvData, setCvData] = useState(initialCvData);

  function handleChange(setter, e) {
    const { name, value } = e.target;
    setter((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleWorkChange(index, e) {
    console.log(workData);
    const { name, value } = e.target;
    setWorkData((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              [name]: value,
            }
          : item
      )
    );
  }

  function saveData(e) {
    e.preventDefault();
    setCvData({ contact: { ...formData }, education: [{ ...eduData }] });
    console.log(cvData);
  }

  return (
    <>
      <form onSubmit={saveData}>
        <section className="general-info">
          <h2>Personal Info</h2>
          <div>
            <Input
              label="First Name:"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange(setFormData, e)}
            ></Input>
            <Input
              label="Last Name:"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange(setFormData, e)}
            ></Input>
          </div>
          <div>
            <Input
              label="Email:"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(setFormData, e)}
            ></Input>
            <Input
              label="Phone Number:"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => handleChange(setFormData, e)}
            ></Input>
          </div>
        </section>
        <section className="edu-experience">
          <h2>Education</h2>
          <div>
            <Input
              label="Degree:"
              name="degree"
              value={eduData.degree}
              onChange={(e) => handleChange(setEduData, e)}
            ></Input>
            <Input
              label="University:"
              name="university"
              value={eduData.university}
              onChange={(e) => handleChange(setEduData, e)}
            ></Input>
          </div>
          <div>
            <Input
              label="Dates:"
              name="degreeDates"
              value={eduData.degreeDates}
              onChange={(e) => handleChange(setEduData, e)}
            ></Input>
            <Input
              label="Notes:"
              name="notes"
              value={eduData.notes}
              onChange={(e) => handleChange(setEduData, e)}
            ></Input>
          </div>
        </section>
        <h2>Work Experience</h2>
        <section className="job-experience">
          <div>
            <Input
              label="Company: "
              name="company"
              value={workData[0].company}
              onChange={(e) => handleWorkChange(0, e)}
            ></Input>
            <Input
              label="Position: "
              name="position"
              value={workData[0].position}
              onChange={(e) => handleWorkChange(0, e)}
            ></Input>
          </div>
        </section>
        <button type="submit">Submit</button>
      </form>
      <div id="cv">
        <div id="personal-info">
          <div id="name">
            {cvData.contact.firstName} {cvData.contact.lastName}
          </div>
          <div id="email">{cvData.contact.email}</div>
          <div id="phone-number">{cvData.phoneNumber}</div>
        </div>
        <div id="work-experience"></div>
        <div id="education-experience">
          <h3>Education</h3>
          <strong>
            {cvData.education[0].degree} {cvData.education[0].university}
          </strong>
          <i>{cvData.education[0].degreeDates}</i>
          <div>{cvData.education[0].notes}</div>
        </div>
      </div>
    </>
  );
}

export default App;
