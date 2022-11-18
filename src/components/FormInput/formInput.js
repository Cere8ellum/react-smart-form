import styles from "./formInput.scss";
import React from "react";

export default function FormInput({ register, rules, name, error, ...rest }) {
  return (
    <>
      <input
        {...register(name, { required: "This is required." })}
        {...rest}
        className={styles.input}
      />
      {error?.name && <div className={styles.error}>{error.name.message}</div>}
    </>
  );
}
