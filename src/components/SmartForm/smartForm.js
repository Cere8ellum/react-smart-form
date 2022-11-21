import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function SmartForm({ defaultValues, children, onSubmit }) {
  const methods = useForm(defaultValues);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                errors: errors[child.props.name],
                key: child.props.name,
              },
            })
          : child;
      })}

      <input type="submit" />
    </form>
  );
}
