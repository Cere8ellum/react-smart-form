import styles from "./formInput.scss";
import React, { useEffect } from "react";

export default function FormInput({ register, name, rules, errors, ...rest }) {
  return (
    <>
      <input {...register(name, rules)} {...rest} className={styles.input} />
      {errors && <div className={styles.error}>{errors.message}</div>}
    </>
  );
}
