import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useParams } from "react-router-dom";

export default function AdminBasvuru() {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  return (
    <div>
      <h4>Kullanıcı Bilgisi : {id}</h4>
      <h3>Ad:</h3>
      {console.log(users)}
    </div>
  );
}
