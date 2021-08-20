import React from "react";
import Select from "react-select";
import styles from "./SelectFilter.module.css";

const options = [
  { value: "this-month", label: "This Month" },
  { value: "this-week", label: "This Week" },
  { value: "today", label: "Today" },
];

const formatGroupLabel = (data) => (
  <div className={styles.groupStyles}>
    <span>{data.label}</span>
    <span className={styles.groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const SelectFilter = () => (
  <Select
    defaultValue={options[1]}
    options={options}
    formatGroupLabel={formatGroupLabel}
    className={styles.select_class}
  />
);

export default SelectFilter;
