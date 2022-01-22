import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export default function BasvuruOlustur() {
  const { addUser } = useContext(UserContext);
  const navigate = useNavigate();
  const randomNumber = (minNumber, maxNumber) => {
    let rndNum = Math.floor(
      Math.random() * (maxNumber - minNumber + 1) + minNumber
    );
    return rndNum;
  };

  const d = new Date();
  let dateSave = d.toLocaleDateString();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      tc: "",
      reasonOfApp: "",
      aplicationStatus: "",
      applicationNumber: "",
      applicationDate: "",
      address: "",
      // attach: "",
    },
    onSubmit: (values) => {
      const newUser = {
        name: values.name,
        surname: values.surname,
        age: values.age,
        tc: values.tc,
        reasonOfApp: values.reasonOfApp,
        aplicationStatus: "Bekliyor",
        applicationNumber: randomNumber(Math.pow(10, 5), Math.pow(10, 8)),
        applicationDate: dateSave,
        address: values.address,
        // attach: values.attach,
      };
      addUser(newUser);
      navigate("/basvuru-basarılı");
    },
  });
  return (
    <div>
      <h1>Başvuru Oluştur</h1>

      <section id="signup-page">
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="signup-form_row">
            <div className="signup-form_group">
              <label htmlFor="name">Name:</label>
              <input
                onChange={handleChange}
                className="signup-form_field"
                name="name"
                value={values.name}
              />
            </div>
            <div className="signup-form_group">
              <label htmlFor="surname">Surname:</label>
              <input
                onChange={handleChange}
                className="signup-form_field"
                name="surname"
                value={values.surname}
              />
            </div>
          </div>

          <div className="signup-form_row">
            <div className="signup-form_group">
              <label htmlFor="address">Address:</label>
              <input
                onChange={handleChange}
                className="signup-form_field"
                name="address"
                value={values.adress}
              />
            </div>
          </div>

          <div className="signup-form_row">
            <div className="signup-form_group">
              <label htmlFor="age">Age:</label>
              <input
                onChange={handleChange}
                className="signup-form_field"
                name="age"
                value={values.age}
              />
            </div>
            <div className="signup-form_group">
              <label htmlFor="tc">TC:</label>
              <input
                onChange={handleChange}
                className="signup-form_field"
                name="tc"
                value={values.tc}
              />
            </div>
          </div>

          <div className="signup-form_row">
            <div className="signup-form_group">
              <label htmlFor="reasonOfApp">Reason of Application:</label>
              <input
                onChange={handleChange}
                name="reasonOfApp"
                placeholder="Job applications"
                value={values.reasonOfApp}
              />
            </div>

            {/* <div className="signup-form_group">
              <label htmlFor="attach">File:</label>
              <input
                className="signup-form_field"
                id="attach"
                name="attach"
                type="file"
              />
            </div> */}
          </div>

          <div className="signup-form_group">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
