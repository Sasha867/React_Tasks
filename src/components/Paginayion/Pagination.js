import React from "react";
import styles from "./pagination.module.css";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";

export const Pagination = ({ choicePage, page }) => {
 

  return (
    <>
      {
        <button className={styles.btn_wrapper} onClick={choicePage}>
          {page}
        </button>
      }
    </>
  );
};
