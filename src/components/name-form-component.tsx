import React, { ChangeEvent } from "react";
import { useFormState, useFormAPI } from "../FormDataProvider";

export const NameFormComponent = () => {
  const { name } = useFormState();
  const { onNameChange } = useFormAPI();

  console.info("NameFormComponent render");

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onNameChange(e.target.value);
  };

  return (
    <div>
      Type your name here: <br />
      <input onChange={onValueChange} value={name} />
    </div>
  );
};
