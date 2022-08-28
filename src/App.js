import React, { useEffect, useState } from "react";
import { User } from "./components/User/User";
import styles from "./components/User/index.module.css";
import { Preloaedr } from "./components/PreLoader/Preloader";
import { Form } from "./components/Form/Form";

export const App = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((data) => data.json())
      .then((user) =>
        setTimeout(() => {
          setUsers((users) => user.data);
        }, 1500)
      );
  }, []);

  const addUser= ()=>{
    console.log(("useradd"));
  } 

  return (
    <>
    <Form onFormSubmit = {addUser}/>
      <div className={styles.wrapper}>
        {users.length > 0 ? (
          users.map((user) => <User key={user.id} user={user} fs={users} />)
        ) : (
          <Preloaedr />
        )}
      </div>
    </>
  );
};
