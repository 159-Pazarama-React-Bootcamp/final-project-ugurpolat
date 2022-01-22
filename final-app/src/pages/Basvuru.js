import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Basvuru() {
  let userId;
  let userSearch = [{}];

  const { id } = useParams();
  const { getApplication, getUser } = useContext(UserContext);

  getApplication(id).then((data) => {
    userId = data[0].id;

    userId &&
      getUser(userId).then((user) => {
        userSearch = user;
        console.log(userSearch.name);
      });
  });

  return (
    <div>
      <h3>{id} sayılı başvuru</h3>
      <h4>Name:{userSearch.name}</h4>
      {}
    </div>
  );
}
