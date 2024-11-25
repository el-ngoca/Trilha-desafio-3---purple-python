import React from "react";
import { ErrorInput, IconContainer, InputContainer, InputText } from "./Styles";
import { IInput } from "./types";
import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control, errorMessage, ...rest }: IInput) => {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <InputText
            {...rest}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
          />
        )}
        name={`${name}`}
      />
      {errorMessage ? <ErrorInput>{errorMessage}</ErrorInput> : null}
    </InputContainer>
  );
};

export { Input };
