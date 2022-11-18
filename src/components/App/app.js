import React from "react";
import Form from "../Form/form";
import SmartForm from "../Form/form";
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
          rules={{ required: "This is required." }}
        />
        <FormInput
          name="password"
          placeholder="Пароль"
          type="password"
          rules={{ required: "This is required." }}
        />
      </SmartForm>
    </div>
  );
}

export default App;
