import { useState } from "react";
import "./App.css";
import Input from "./Input.jsx";
import Textarea from "./Textarea.jsx";

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

  return (
    <>
      <section className="general-info">
        <div>
          <Input
            label="First Name:"
            value={formData.firstName}
            onChange={(e) => setFormData(e.target.data)}
          ></Input>
          <Input
            label="Last Name:"
            value={formData.lastName}
            onChange={(e) => setFormData(e.target.data)}
          ></Input>
        </div>
        <div>
          <Input
            label="Email:"
            value={formData.email}
            onChange={(e) => setFormData(e.target.data)}
          ></Input>
          <Input
            label="Phone Number:"
            value={formData.phoneNumber}
            onChange={(e) => setFormData(e.target.data)}
          ></Input>
        </div>
      </section>
      <div className="experience">
        <section className="edu-experience">
          <Textarea
            label="Education Experience:"
            value={formData.eduExperience}
            onChange={(e) => setFormData(e.target.data)}
          ></Textarea>
        </section>
        <section className="job-experience">
          <Textarea
            label="Work Experience:"
            value={formData.workExperience}
            onChange={(e) => setFormData(e.target.data)}
          ></Textarea>
        </section>
      </div>
      <button>Submit</button>
      <div id="cv">
        <div id="personal-info">
          <div id="name"></div>
          <div id="email"></div>
          <div id="phone-number"></div>
        </div>
        <div id="work-experience">blah</div>
        <div id="education-experience">blah</div>
      </div>
    </>
  );
}

export default App;
