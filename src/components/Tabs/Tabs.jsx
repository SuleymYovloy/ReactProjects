import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.scss";

const Tabs = () => {
  const location = useLocation();
  console.log(window.location);
  return (
    <div className={styles.tabs}>
      {location.pathname !== "/users" && (
        <Link className={styles.tab} to={"/users"}>
          Users
        </Link>
      )}
      {location.pathname !== "/counter" && (
        <Link className={styles.tab} to={"/counter"}>
          Counter
        </Link>
      )}

      {location.pathname !== "/modal" && (
        <Link className={styles.tab} to={"/modal"}>
          Modal
        </Link>
      )}

      {location.pathname !== "/quiz" && (
        <Link className={styles.tab} to={"/quiz"}>
          Quiz
        </Link>
      )}

      {location.pathname !== "/convertor" && (
        <Link className={styles.tab} to={"/convertor"}>
          Convertor
        </Link>
      )}

      {location.pathname !== "/collections" && (
        <Link className={styles.tab} to={"/collections"}>
          Collections
        </Link>
      )}
    </div>
  );
};

export default Tabs;
