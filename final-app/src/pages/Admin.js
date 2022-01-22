import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  return (
    <div>
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
          <section className="page">
            <form onSubmit={handleSubmit} className="signup-form">
              <h3>Admin Giriş</h3>
              <div className="signup-form_row">
                <div className="signup-form_group">
                  <label htmlFor="adminName">Name:</label>
                  <input
                    id="adminName"
                    name="adminName"
                    placeholder="..."
                    onChange={handleChange}
                    className="signup-form_field"
                  />
                </div>
              </div>
              <div className="signup-form_row">
                <div className="signup-form_group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="..."
                    onChange={handleChange}
                    className="signup-form_field"
                  />
                </div>
              </div>

              <button className="button" type="submit">
                Log In
              </button>
            </form>
          </section>
        )}
      </Formik>
    </div>
  );
}
