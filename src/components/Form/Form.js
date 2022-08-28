import React from "react";
import styles from "./form.module.css";

export const Form = ({onFormSubmit})=>{
 
const submitHandler =(event)=>{
    event.preventDefault();
    console.log(("form submit"));
}

    return(
        <form onSubmit={submitHandler}  className={styles.form_wrapper}>
            <input className={styles.form} placeholder="Enter the letters or full name" />
            <input className={styles.form} placeholder="Enter the letters or full name" />
            <input className={styles.form} placeholder="Enter the letters or full name" />
            <input className={styles.form} placeholder="Enter the letters or full name" />
            <button>add user</button>
        </form>
    )
}
