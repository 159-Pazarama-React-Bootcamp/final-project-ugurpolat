import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function UsersList() {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <section className="admin-page">
      <div className="application-list__box">
        <div>
          <h4>Users</h4>
        </div>

        <ul className="application-list__items">
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div className="application-list__box">
        <div>
          <h4>Date</h4>
        </div>

        <ul className="application-list__items">
          {users.map((user) => (
            <li key={user.id}>{user.applicationDate}</li>
          ))}
        </ul>
      </div>
      <div className="application-list__box">
        <div>
          <h4>Details</h4>
        </div>

        <ul className="application-list__items">
          {users.map((user) => (
            <button onClick={() => navigate(`/admin/basvuru/${user.id}`)} key={user.id}>
              Görüntüle
            </button>
          ))}
        </ul>
      </div>
    </section>
  );
}
