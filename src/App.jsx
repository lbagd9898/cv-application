import { useState } from "react";
import "./styles/App.css";
import Input from "./componenets/Input.jsx";
import Workdiv from "./componenets/Workdiv.jsx";
import Edudiv from "./componenets/Edudiv.jsx";
import Textarea from "./componenets/Textarea.jsx";
import EducationFields from "./componenets/EducationFields.jsx";

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

  //saves work experience data user puts in form
  const workTemplate = {
    company: "",
    position: "",
    dates: "",
    location: "",
    description: "",
  };

  const [workData, setWorkData] = useState({ ...workTemplate });

  const initialCvData = {
    contact: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    education: [{ degree: "", university: "", degreeDates: "", notes: "" }],
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

  // function handleWorkChange(index, e) {
  //   console.log(workData);
  //   const { name, value } = e.target;
  //   setWorkData((prev) =>
  //     prev.map((item, i) =>
  //       i === index
  //         ? {
  //             ...item,
  //             [name]: value,
  //           }
  //         : item
  //     )
  //   );
  // }

  function saveData(e) {
    e.preventDefault();
    console.log(workData);
    setCvData({
      contact: { ...formData },
      education: [{ ...eduData }],
      work: [{ ...workData }],
    });
    console.log(cvData.work);
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
          {eduData.map((ed) => (
            <EducationFields key={ed.id} data={ed} onChange={handleEduChange} />
          ))}
        </section>
        <button>Add Education</button>
        <h2>Work Experience</h2>
        <section className="job-experience">
          <div>
            <Input
              label="Company: "
              name="company"
              value={workData.company}
              onChange={(e) => handleChange(setWorkData, e)}
            ></Input>
            <Input
              label="Position: "
              name="position"
              value={workData.position}
              onChange={(e) => handleChange(setWorkData, e)}
            ></Input>
          </div>
          <div>
            <Input
              label="Dates "
              name="dates"
              value={workData.dates}
              onChange={(e) => handleChange(setWorkData, e)}
            ></Input>
            <Input
              label="Location: "
              name="location"
              value={workData.location}
              onChange={(e) => handleChange(setWorkData, e)}
            ></Input>
          </div>
          <Textarea
            label="Description: "
            name="description"
            value={workData.description}
            onChange={(e) => handleChange(setWorkData, e)}
          ></Textarea>
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
          <Workdiv workData={cvData.work[0]}></Workdiv>
        </div>
        <div id="education-experience">
          <h3>Education</h3>
          <Edudiv eduData={cvData.education[0]}></Edudiv>
        </div>
      </div>
    </>
  );
}

export default App;
