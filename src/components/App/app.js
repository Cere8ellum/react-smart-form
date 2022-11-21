import React from "react";
import Form from "../Form/form";
import SmartForm from "../SmartForm/smartForm";
import FormInput from "../FormInput/formInput";
import styles from "./app.scss";

function App() {
  const onFormSubmit = (e) => {
    console.log("Form", e);
  };
  const onSmartFormSubmit = (e) => {
    console.log("Smart Form", e);
  };

  return (
    <div className={styles.container}>
      <h2>Form</h2>
      <Form onSubmit={onFormSubmit} />
      <h2>Smart Form</h2>
      <SmartForm onSubmit={onSmartFormSubmit}>
        <FormInput
          name="email"
          placeholder="Email"
          rules={{
            required: "Field email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          }}
        />
        <FormInput
          name="password"
          placeholder="Пароль"
          type="password"
          rules={{
            required: "Field password is required.",
            minLength: {
              value: 8,
              message: "At least 8 symbols",
            },
          }}
        />
      </SmartForm>
    </div>
  );
}

export default App;
