import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Basvuru() {
  let userId;

  const [newUser, setUser] = useState({});
  const { id } = useParams();
  const { getApplication, getUser } = useContext(UserContext);

  getApplication(id).then((data) => {
    userId = data[0].id;

    userId &&
      getUser(userId).then((user) => {
        setUser(user);
      });
  });

  return (
    <section className="user-page">
      <div className="user-page__user">
        <h3>{id} Application Number</h3>
        <div className="user-page__info">
          <img className="user-img" src={newUser.attach} alt="user-picture" />
          <h4>Name: {newUser.id} </h4>
          <h4>Surname: {newUser.surname}</h4>
          <h4>Age: {newUser.age}</h4>
          <h4>TC: {newUser.age}</h4>
          <h4>Address: {newUser.address}</h4>
          <h4>Reason Of Application: {newUser.reasonOfApp}</h4>
          <h4>Application Date : {newUser.applicationDate}</h4>
          <h4>Application Status: {newUser.applicationStatus}</h4>
        </div>
      </div>
    </section>
  );
}
