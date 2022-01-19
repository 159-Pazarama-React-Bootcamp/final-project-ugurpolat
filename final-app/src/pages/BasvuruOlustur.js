import React from "react";
import { Formik, Field, Form } from "formik";

export default function BasvuruOlustur() {
  return (
    <div>
      <h1>Başvuru Oluştur</h1>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          age: "",
          tc: "",
          reasonOfApp: "",
          address: "",
          attach: "",
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <section id="signup-page">
          <Form className="signup-form">
            <div className="signup-form_row">
              <div className="signup-form_group">
                <label htmlFor="name">Name:</label>
                <Field
                  className="signup-form_field"
                  id="name"
                  name="name"
                  placeholder="Ugur"
                />
              </div>
              <div className="signup-form_group">
                <label htmlFor="surname">Surname:</label>
                <Field
                  className="signup-form_field"
                  id="surname"
                  name="surname"
                  placeholder="Polat"
                />
              </div>
            </div>

            <div className="signup-form_row">
              <div className="signup-form_group">
                <label htmlFor="address">Address:</label>
                <Field
                  className="signup-form_field"
                  id="address"
                  name="address"
                  placeholder="12. Kennedy Square 17NG Trade Tower New York/USA"
                />
              </div>
            </div>

            <div className="signup-form_row">
              <div className="signup-form_group">
                <label htmlFor="age">Age:</label>
                <Field
                  className="signup-form_field"
                  id="age"
                  name="age"
                  placeholder="21"
                />
              </div>
              <div className="signup-form_group">
                <label htmlFor="tc">TC:</label>
                <Field
                  className="signup-form_field"
                  id="tc"
                  name="tc"
                  placeholder="98745632906"
                />
              </div>
            </div>

            <div className="signup-form_row">
              <div className="signup-form_group">
                <label htmlFor="reasonOfApp">Reason of Application:</label>
                <Field
                  className="signup-form_field"
                  id="reasonOfApp"
                  name="reasonOfApp"
                  placeholder="Job applications"
                />
              </div>

              <div className="signup-form_group">
                <label htmlFor="attach">File:</label>
                <Field
                  className="signup-form_field"
                  id="attach"
                  name="attach"
                  type="file"
                />
              </div>
            </div>

            <div className="signup-form_group">
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </section>
      </Formik>
    </div>
  );
}
