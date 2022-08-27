import React, { useState } from "react";
import styles from "./index.module.css";
import { UserMoreInfo } from "../AddInfo/UserMoreInfo";

export const User = ({ user }) => {
  const [addInfo, setAddInfo] = useState(false);
  console.log(addInfo);

  function moreInfo() {
    return setAddInfo((addInfo) => !addInfo);
  }

  console.log(user);
  return (
    <div className={styles.user_wrapper}>
      <div className={styles.user}>
        <img className={styles.user_img} src={user.avatar} alt="" />
        <div className={styles.user_first_name}>{user.first_name}</div>
        <div className={styles.button_wrapper}>
          <button
            onClick={moreInfo}
            className={`${styles.button_more}  ${
              addInfo && styles.button_more_active
            }`}
          >
            more {">"}
          </button>
        </div>
      </div>
      {addInfo && <UserMoreInfo info={user} />}
    </div>
  );
};
