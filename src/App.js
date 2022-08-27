import React, { useEffect, useState } from "react";
import { User } from "./components/User/User";
import styles from "./components/User/index.module.css";

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((data) => data.json())
      .then((user) => setUsers((users) => user.data));
  }, []);

  return (
    <div className={styles.wrapper}>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};
