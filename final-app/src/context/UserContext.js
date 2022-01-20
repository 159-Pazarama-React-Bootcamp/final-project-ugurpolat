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

  return (
    <UserContext.Provider
      value={{
        users,
        // todoEdit,
        // isLoading,
        // deleteTodo,
        // addTodo,
        // editTodo,
        // updateTodo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
