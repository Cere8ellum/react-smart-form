import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        const error = get(errors, child.props.name, null);
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

      <input type="submit" />
    </form>
  );
}
