import React from "react";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // fetch users
  const fetchUsers = async () => {
    const response = await fetch("https://61e2ed2c3050a10017682308.mockapi.io/api/users");
    const data = await response.json();
    setUsers(data);

    // setIsLoading(false);
  };

  //get user applicationNumber
  const getApplication = async (aplicatioNumber) => {
    const response = await fetch(
      `https://61e2ed2c3050a10017682308.mockapi.io/api/users?applicationNumber=${aplicatioNumber}`
    );
    const searchData = await response.json();
    return searchData;
  };

  //get user
  const getUser = async (userId) => {
    const response = await fetch(`https://61e2ed2c3050a10017682308.mockapi.io/api/users/${userId}`);
    const searchData = await response.json();
    return searchData;
  };

  // Add user
  const addUser = async (newUser) => {
    const response = await fetch("https://61e2ed2c3050a10017682308.mockapi.io/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });

    const data = await response.json();

    // newTodo.id = uuidv4();
    setUsers([data, ...users]);
  };

  // update user
  const updateUser = async (id, updUser) => {
    const response = await fetch(`https://61e2ed2c3050a10017682308.mockapi.io/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updUser)
    });

    const data = await response.json();
    setUsers(users.map((user) => (user.id === id ? { ...user, ...data } : user)));
    console.log(data);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        updateUser,
        getApplication,
        getUser
      }}>
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};
export default UserContext;
