import React, { useState } from "react";
import styles from "./form.module.css";
import {AiOutlineForm} from 'react-icons/ai';
import {BiMailSend} from 'react-icons/bi';

export const Form = ({ onFormSubmit }) => {
    const [isAddNewUser, setIsAddNewUser] = useState(false); 

   const AddNewUser = ()=>{
      return setIsAddNewUser((isAddNewUser)=>!isAddNewUser);
   }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button_AddUser} onClick={AddNewUser}>Add new user<AiOutlineForm/></button>
      {isAddNewUser && <form onSubmit={onFormSubmit} className={styles.form_container}>
        <input name="first_name" className={styles.form_input} placeholder="Enter first name" />
        <input name="last_name" className={styles.form_input} placeholder="Enter last name" />
        <input name="avatar" className={styles.form_input} placeholder="Enter url your photo"/>
        <input name="email" className={styles.form_input} placeholder="Enter your email" />
        <button className={styles.btn_send}>send <BiMailSend/></button>
      </form>}
    </div>
  );
};
