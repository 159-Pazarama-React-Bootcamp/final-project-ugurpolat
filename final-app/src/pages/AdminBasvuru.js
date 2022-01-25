import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import UserContext from "../context/UserContext";
import validationSchema from "../components/validations/Validation_SignUp";

export default function AdminBasvuru() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { users, updateUser, deleteUser } = useContext(UserContext);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      name: `${users[id - 1].name}`,
      surname: `${users[id - 1].surname}`,
      age: `${users[id - 1].age}`,
      tc: `${users[id - 1].tc}`,
      reasonOfApp: `${users[id - 1].reasonOfApp}`,
      applicationStatus: `${users[id - 1].applicationStatus}`,
      applicationNumber: `${users[id - 1].applicationNumber}`,
      applicationDate: `${users[id - 1].applicationDate}`,
      address: `${users[id - 1].address}`,
      attach: `${users[id - 1].attach}`
    },

    onSubmit: (values) => {
      const updUser = {
        name: values.name,
        surname: values.surname,
        age: values.age,
        tc: values.tc,
        reasonOfApp: values.reasonOfApp,
        applicationStatus: values.aplicationStatus,
        applicationNumber: values.applicationNumber,
        applicationDate: values.applicationDate,
        address: values.address,
        attach: values.attach
      };
      updateUser(id, updUser);
      navigate("/admin/basvuru-listesi");
      console.log(id);
    },
    validationSchema
  });

  return (
    <section className="page">
      <form onSubmit={handleSubmit} className="signup-form">
        <h3>Kullanıcı Bilgisi: {id}</h3>
        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="name">Name:</label>
            <input name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
            {errors.name && touched.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="signup-form_group">
            <label htmlFor="surname">Surname:</label>
            <input
              name="surname"
              value={values.surname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.surname && touched.surname && <div className="error">{errors.surname}</div>}
          </div>
        </div>

        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="address">Address:</label>
            <input
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.address && touched.address && <div className="error">{errors.address}</div>}
          </div>
        </div>

        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="age">Age:</label>
            <input name="age" value={values.age} onChange={handleChange} onBlur={handleBlur} />
            {errors.age && touched.age && <div className="error">{errors.age}</div>}
          </div>
          <div className="signup-form_group">
            <label htmlFor="tc">TC:</label>
            <input name="tc" value={values.tc} onChange={handleChange} onBlur={handleBlur} />
            {errors.tc && touched.tc && <div className="error">{errors.tc}</div>}
          </div>
        </div>

        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="reasonOfApp">Reason of Application:</label>
            <input
              name="reasonOfApp"
              value={values.reasonOfApp}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.reasonOfApp && touched.reasonOfApp && (
              <div className="error">{errors.reasonOfApp}</div>
            )}
          </div>

          <div className="signup-form_group">
            <label htmlFor="attach">File:</label>
            <input
              disabled
              name="attach"
              onChange={handleChange}
              value={values.attach}
              text="file"
            />
          </div>
        </div>

        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="reasonOfApp">Application Number:</label>
            <input
              disabled
              name="applicationNumber"
              value={values.applicationNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="reasonOfApp">Application Date:</label>
            <input
              disabled
              name="applicationDate"
              value={values.applicationDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="signup-form_row">
          <div className="signup-form_group">
            {/* <label htmlFor="aplicationStatus">Application Status:</label>
                <input name="aplicationStatus" onChange={handleChange} /> */}
            <label htmlFor="applicationStatus">Choose a status</label>
            <select
              name="aplicationStatus"
              value={values.applicationStatus}
              onChange={handleChange}>
              <option value="Çözüldü.">Çözüldü</option>
              <option value="İptal edildi.">İptal Edildi</option>
              <option value="Bekliyor.">Bekliyor</option>
            </select>
          </div>
        </div>

        <div className="signup-form_group">
          <div className="signup-form_group__button-box">
            <button className="button-middle" type="submit">
              Update
            </button>
            <button onClick={() => deleteUser(id)} className="button-middle">
              Delete User
            </button>
            <button className="button-middle" onClick={() => navigate("/admin/basvuru-listesi")}>
              User List
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
