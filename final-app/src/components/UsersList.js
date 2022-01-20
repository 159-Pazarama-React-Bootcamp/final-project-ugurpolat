import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function UsersList() {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className="aplication-list">
        <div className="aplication-list__user">
          <h4>Başvuruda Bulunanlar</h4>
          <ul className="aplication-list__items">
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
        <div className="aplication-list__date">
          <h4>Başvuru Zamanı</h4>
          <ul className="aplication-list__items">
            {users.map((user) => (
              <li key={user.id}>{user.applicationDate}</li>
            ))}
          </ul>
        </div>
        <div className="aplication-list__info">
          <h4>Ayrıntı</h4>
          <ul className="aplication-list__items">
            {users.map((user) => (
              <button
                onClick={() => navigate(`/admin/basvuru/${user.id}`)}
                className="button"
                key={user.id}
              >
                Görüntüle
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
