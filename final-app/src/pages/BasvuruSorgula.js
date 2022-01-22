import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { isObject, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export default function BasvuruSorgula() {
  const navigate = useNavigate();
  const { getApplication } = useContext(UserContext);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      applicationNumber: "",
    },
    onSubmit: (values) => {
      getApplication(values.applicationNumber).then((user) => {
        Number(user[0].applicationNumber) === Number(values.applicationNumber)
          ? navigate(`/basvuru/${user[0].applicationNumber}`)
          : navigate(`/basvuru/404`);
      });
    },
  });

  return (
    <div>
      <h2>Başvuru Sorgula</h2>
      <section className="page">
        <form onSubmit={handleSubmit}>
          <div className="signup-form_row">
            <div className="signup-form_group">
              <label htmlFor="tc">Application Number</label>
              <input
                id="search"
                onChange={handleChange}
                className="signup-form_field"
                name="applicationNumber"
                value={values.applicationNumber}
              />
            </div>
          </div>
          <div className="signup-form_group">
            <button className="button" name="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
