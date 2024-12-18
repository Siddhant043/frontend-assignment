import React from "react";
import styles from "./tablepage.module.css";
import Heading from "../components/Heading";
import Table from "../components/Table";

const TablePage = () => {
  return (
    <div className={styles.container}>
      <Heading />
      <Table />
    </div>
  );
};

export default TablePage;
