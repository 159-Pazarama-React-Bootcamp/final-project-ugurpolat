import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import UserContext from "../context/UserContext";

export default function AdminBasvuru() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { users, updateUser } = useContext(UserContext);

  const { handleSubmit, handleChange, values } = useFormik({
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
    }
  });

  return (
    <section className="page">
      <form onSubmit={handleSubmit} className="signup-form">
        <h3>Kullanıcı Bilgisi: {id}</h3>
        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="name">Name:</label>
            <input name="name" value={values.name} onChange={handleChange} />
          </div>
          <div className="signup-form_group">
            <label htmlFor="surname">Surname:</label>
            <input name="surname" value={values.surname} onChange={handleChange} />
          </div>
        </div>

        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="address">Address:</label>
            <input name="address" value={values.address} onChange={handleChange} />
          </div>
        </div>

        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="age">Age:</label>
            <input name="age" value={values.age} onChange={handleChange} />
          </div>
          <div className="signup-form_group">
            <label htmlFor="tc">TC:</label>
            <input name="tc" value={values.tc} onChange={handleChange} />
          </div>
        </div>

        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="reasonOfApp">Reason of Application:</label>
            <input name="reasonOfApp" value={values.reasonOfApp} onChange={handleChange} />
          </div>

          <div className="signup-form_group">
            <label htmlFor="attach">File:</label>
            <input name="attach" onChange={handleChange} value={values.attach} text="file" />
          </div>
        </div>

        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="reasonOfApp">Application Number:</label>
            <input
              name="applicationNumber"
              value={values.applicationNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="reasonOfApp">Application Date:</label>
            <input name="applicationDate" value={values.applicationDate} onChange={handleChange} />
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
              <option value="çözüldü">Çözüldü</option>
              <option value="iptaledildi">İptal Edildi</option>
              <option value="bekliyor">Bekliyor</option>
            </select>
          </div>
        </div>

        <div className="signup-form_group">
          <div className="signup-form_group__button-box">
            <button className="button" type="submit">
              Update
            </button>
            <button className="button">Delete User</button>
            <button onClick={() => navigate("/admin/basvuru-listesi")} className="button">
              User List
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
