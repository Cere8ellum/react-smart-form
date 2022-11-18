import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../App/app.scss";

export default function Form({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /*const onSubmit = (e) => {
    console.log(e);
  };*/

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: "This is required." })} />
      {errors?.["email"] && (
        <div className={styles.error}>{errors.email.message}</div>
      )}
      <input {...register("password", { required: "This is required." })} />
      {errors?.["password"] && (
        <div className={styles.error}>{errors.password.message}</div>
      )}
      <input type="submit" />
    </form>
  );
}
