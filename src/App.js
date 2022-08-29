import React, { useEffect, useState } from "react";
import { User } from "./components/User/User";
import styles from "./components/User/index.module.css";
import { Preloaedr } from "./components/PreLoader/Preloader";
import { Form } from "./components/Form/Form";
import { Pagination } from "./components/Paginayion/Pagination";

export const App = () => {
  const [isPreloader, setIsPreloader] = useState(false);
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

 

  useEffect(() => {
    setIsPreloader(true);
    fetch(`https://reqres.in/api/users?page`)
      .then((data) => data.json())
      .then((user) =>
        setTimeout(() => {
          setUsers((users) => user.data);
          // setPages((pages) => user.page);
          setIsPreloader(false);
        }, 1000)
      );
  }, []);

  const addUser = (event) => {
    const userData = new FormData(event.target);
    event.preventDefault();
    console.log(userData);
    setUsers((users) => [
      ...users,
      {
        last_name: userData.get("last_name"),
        avatar: userData.get("avatar"),
        first_name: userData.get("first_name"),
        email: userData.get("email"),
      },
    ]);
  };

  const arr = [1, 2, 3, 4, 5];

  function choicePage(page) {
    // const num = arr.map((el) => el === page);
    // return setPages((pages) => num);
    // console.log(pages);
  }

  return (
    <>
      {isPreloader && <Preloaedr />}
      {!isPreloader && (
        <div>
          <Form onFormSubmit={addUser} />
          <div className={styles.wrapper}>
            {users.map((user) => (
              <User key={user.id} user={user} fs={users} />
            ))}
          </div>
          <div className={styles.pagination_wrapper}>
            {arr.map((page) => (
              <Pagination choicePage={choicePage} page={page} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
