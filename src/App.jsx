import { useState } from "react";
import "./styles/App.css";
import Input from "./componenets/Input.jsx";
import Workdiv from "./componenets/Workdiv.jsx";
import Edudiv from "./componenets/Edudiv.jsx";
import Textarea from "./componenets/Textarea.jsx";
import EducationFields from "./componenets/EducationFields.jsx";
import WorkFields from "./componenets/WorkFields.jsx";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    workExperience: "",
  });

  //saves education data user inputs in form
  const [eduData, setEduData] = useState([
    {
      id: crypto.randomUUID(),
      degree: "",
      university: "",
      degreeDates: "",
      notes: "",
    },
  ]);

  const [workData, setWorkData] = useState([
    {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      dates: "",
      location: "",
      description: "",
    },
  ]);

  const initialCvData = {
    contact: formData,
    education: [eduData],
    work: [workData],
  };

  const [cvData, setCvData] = useState(initialCvData);

  function handleEduChange(id, field, value) {
    setEduData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  }

  function handleChange(setter, e) {
    const { name, value } = e.target;
    setter((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleWorkChange(id, field, value) {
    setWorkData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  }

  function addEducationField() {
    setEduData((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        degree: "",
        university: "",
        degreeDates: "",
        notes: "",
      },
    ]);
  }

  function addWorkField() {
    setWorkData((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        dates: "",
        location: "",
        description: "",
      },
    ]);
  }

  function saveData(e) {
    e.preventDefault();
    console.log(workData);
    setCvData({
      contact: { ...formData },
      education: [...eduData],
      work: [...workData],
    });
    console.log(cvData.work);
  }

  return (
    <div>
      <header>
        <h1>Your CV Generator </h1>
      </header>
      <div id="container">
        <form onSubmit={saveData}>
          <section className="general-info">
            <h2>Personal Info</h2>
            <fieldset>
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
            </fieldset>
          </section>
          <section className="edu-experience">
            <h2>Education</h2>
            {eduData.map((ed) => (
              <EducationFields
                key={ed.id}
                data={ed}
                onChange={handleEduChange}
              />
            ))}
            <button type="button" onClick={addEducationField}>
              Add Education
            </button>
          </section>
          <h2>Work Experience</h2>
          <section className="job-experience">
            {workData.map((work) => (
              <WorkFields
                key={work.id}
                data={work}
                onChange={handleWorkChange}
              ></WorkFields>
            ))}
            <button type="button" onClick={addWorkField}>
              Add Work
            </button>
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
          <div id="work-experience">
            <h3>Work Experience</h3>
            {cvData.work.map((work) => (
              <Workdiv workData={work}></Workdiv>
            ))}
          </div>
          <div id="education-experience">
            <h3>Education</h3>
            {cvData.education.map((edu) => (
              <Edudiv eduData={edu}></Edudiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
