import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Admin Giriş</h3>
      <Formik
        initialValues={{
          adminName: "",
          password: "",
        }}
        onSubmit={(values) => {
          if (values.adminName === "kodluyoruz") {
            if (values.password === "bootcamp109") {
              navigate("/admin/basvuru-listesi");
            }
          }
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="adminName">Name:</label>
            <input
              id="adminName"
              name="adminName"
              placeholder="..."
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              placeholder="..."
              onChange={handleChange}
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
