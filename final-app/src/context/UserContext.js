import React from "react";
import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // fetch users
  const fetchUsers = async () => {
    const response = await fetch(
      "https://61e2ed2c3050a10017682308.mockapi.io/api/users"
    );
    const data = await response.json();
    setUsers(data);

    // setIsLoading(false);
  };

  // Add user

  // update user
  const updateUser = async (id, updUser) => {
    const response = await fetch(
      `https://61e2ed2c3050a10017682308.mockapi.io/api/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updUser),
      }
    );

    const data = await response.json();
    setUsers(
      users.map((user) => (user.id === id ? { ...user, ...data } : user))
    );
    console.log(data);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

{
  /* <h4>Kullanıcı Bilgisi : {id}</h4>
      <h3>Ad:{users[id - 1].name}</h3>

      <h3>Soyad:{users[id - 1].surname}</h3>
      <h3>Age:{users[id - 1].age}</h3>
      <h3>Adress:{users[id - 1].address}</h3>
      <h3>Reason of Application:{users[id - 1].reasonOfApp}</h3>
      <h3>Application Status:{users[id - 1].applicationStatus}</h3>
      <h3>Application Date:{users[id - 1].applicationDate}</h3>
      <h3>Application Number:{users[id - 1].applicationNumber}</h3>
      <h3>Attach File:{users[id - 1].attach}</h3> */
}
{
  /* <button onClick={handleUpdate} className="button">
        Güncelle
      </button>
      <button
        className="button"
        onClick={() => navigate("/admin/basvuru-listesi")}
      >
        Kapat
      </button> */
}
