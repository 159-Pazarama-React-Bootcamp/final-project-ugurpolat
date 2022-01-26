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
          <table>
            <thead>
              <tr>
                <th>Users</th>
                <th>Date</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td>{user.name}</td>
                  <td>{user.applicationDate}</td>
                  <td>
                    <button
                      className="button-small"
                      onClick={() => navigate(`/admin/basvuru/${user.id}`)}>
                      Show
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <h4>Users</h4>
          <ul className="application-list__items">
            {users.map((user) => (
              <li className="application-list__item" key={randomNumber(10, 1000)}>
                {user.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Date</h4>
          <ul className="application-list__items">
            {users.map((user) => (
              <li className="application-list__item" key={randomNumber(10, 1000)}>
                {user.applicationDate}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Details</h4>
          <ul className="application-list__items">
            {users.map((user) => (
              <button
                className="button-small"
                onClick={() => navigate(`/admin/basvuru/${user.id}`)}
                key={randomNumber(10, 1000)}>
                Show
              </button>
            ))}
          </ul>*/}
        </div>
      </div>
      {/* <div className="application-list__box">
        <div></div>
      </div>
      <div className="application-list__box">
        <div></div>
      </div> */}
    </section>
  );
}
