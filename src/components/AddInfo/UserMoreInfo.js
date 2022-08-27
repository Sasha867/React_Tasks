import React from "react";
import styles from "./index.module.css";

export const UserMoreInfo = ({ info }) => {
  console.log(info);
  return (
    <div className={styles.container_more_info}>
      <div className={styles.user_last_name}>{info.last_name}</div>
      <div className={styles.user_email_name}>{info.email}</div>
    </div>
  );
};
