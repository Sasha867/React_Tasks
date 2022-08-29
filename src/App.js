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
  const [arrPages, setArrPages] = useState([]);

  useEffect(() => {
    setIsPreloader(true);
    fetch(`https://reqres.in/api/users?page=${totalPages}`)
      .then((data) => data.json())
      .then((user) =>
        setTimeout(() => {
          setUsers((users) => user.data);
          setTotalPages((totalPages) => user.total_pages)
          setIsPreloader(false);
        }, 1000)
      );
  }, []);
console.log(totalPages);
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

  // new Array(2).map((_, index)=>)
 

  function choicePage() {
   

   return setArrPages((arrPages)=> new Array(totalPages));
    
  }
console.log(arrPages);
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
            {arrPages.map((page) => (
              <Pagination choicePage={choicePage} page={totalPages} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
