/*import React from "react";
import { useForm, get } from "react-hook-form";

export default function SmartForm({
  defaultValues,
  register,
  children,
  ...rest
}) {
  const props = { ...rest };
  const methods = useForm(defaultValues);
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <>
      <form onSubmit={handleSubmit}>
        {React.Children.map(children, (child) => {
          return child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  register: methods.register,
                  key: child.props.name,
                },
              })
            : child;
        })}
        {Object.values(errors)}

        <input type="submit"></input>
      </form>
    </>
  );
}

import React from "react";
import SmartForm from "../SmartModalForm/smartModalForm";
import FormInput from "./FormInput/formInput";

export default function LoginForm(props) {

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <SmartForm
      title="Авторизация"
      handleClose={handleClose}
      handleSubmit={onSubmit}
    >
      <FormInput
        name="email"
        rules={{ required: "This is required." }}
      />
      <FormInput
        name="password"
        rules={{ required: "This is required." }}
      />
    </SmartForm>
  );
}


import React from "react";

export default function FormInput({ register, rules, name, error, ...rest }) {

  return (
    <>
      <input
        {...register(
          name,
          rules
        )}
        {...rest}
        className={styles.input}
      />
      {error?.name && <div className={styles.error}>{error.name.message}</div>}
    </>
  );
}
*/
