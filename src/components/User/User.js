import React, { memo, useState } from "react";
import styles from "./index.module.css";
import { UserMoreInfo } from "../AddInfo/UserMoreInfo";
import { BiUpArrowAlt } from "react-icons/bi";
import { FiArrowDown } from "react-icons/fi";


 const UserTeamePlate = ({ user,  fs}) => {
  const [addInfo, setAddInfo] = useState(false);
  console.log(addInfo);
console.log(1222,fs);
  function moreInfo() {
    return setAddInfo((addInfo) => !addInfo);
  }

  console.log(121, user.first_name);
  return (
    <div className={styles.user_wrapper}>
      {/* <InputFindUsers/> */}
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
            more {addInfo ? <FiArrowDown /> : <BiUpArrowAlt />}
          </button>
        </div>
      </div>
      {addInfo && <UserMoreInfo info={user} />}
    </div>
  );
};

export const User = memo(UserTeamePlate);