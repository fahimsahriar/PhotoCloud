import React from "react";
import styles from "./Help.module.css";
import { Link } from "react-router-dom";

function Help() {
  return (
    <div className={styles.floating_container}>
      <Link to='/info'>
        <div className={styles.floating_button}>
          i
        </div>
      </Link>
    </div>
  );
}

export default Help;
