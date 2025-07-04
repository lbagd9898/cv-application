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
    eduExperience: "",
    workExperience: "",
  });

  const [cvData, setCvData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eduExperience: "",
    workExperience: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function saveData() {
    console.log("Savnig formData: ", formData);
    console.log("saved");
    setCvData({ ...formData });
    console.log(cvData);
  }

  return (
    <>
      <section className="general-info">
        <div>
          <Input
            label="First Name:"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          ></Input>
          <Input
            label="Last Name:"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          ></Input>
        </div>
        <div>
          <Input
            label="Email:"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></Input>
          <Input
            label="Phone Number:"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          ></Input>
        </div>
      </section>
      <div className="experience">
        <section className="job-experience">
          <Textarea
            label="Work Experience:"
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
          ></Textarea>
        </section>
        <section className="edu-experience">
          <Textarea
            label="Education Experience:"
            name="eduExperience"
            value={formData.eduExperience}
            onChange={handleChange}
          ></Textarea>
        </section>
      </div>
      <button onClick={saveData}>Submit</button>
      <div id="cv">
        <div id="personal-info">
          <div id="name">
            {cvData.firstName} {cvData.lastName}
          </div>
          <div id="email">{cvData.email}</div>
          <div id="phone-number">{cvData.phoneNumber}</div>
        </div>
        <div id="work-experience">{cvData.workExperience}</div>
        <div id="education-experience">{cvData.eduExperience}</div>
      </div>
    </>
  );
}

export default App;
