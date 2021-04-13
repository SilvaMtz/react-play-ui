import React, {
  FunctionComponent,
  InputHTMLAttributes,
  ChangeEventHandler,
} from "react";
import classes from "./Checkbox.module.css";

export interface CheckboxProps {
  value: any;
  label: string;
  checked: boolean;
  id: string;
  onChange?: ChangeEventHandler<any>;
  disabled?: boolean;
}

export const Checkbox: FunctionComponent<
  CheckboxProps & InputHTMLAttributes<HTMLInputElement>
> = ({
  value,
  label,
  checked = false,
  id,
  onChange,
  disabled = false,
  ...rest
}) => {
  const classList = [classes["Checkbox--wrapper"]];
  const checkboxClassList = [
    classes["Checkbox--display"],
    checked ? classes["Checkbox--displayChecked"] : null,
  ];

  return (
    <span className={classList.join(" ")}>
      <input
        className={classes["Checkbox"]}
        type="checkbox"
        value={value}
        checked={checked}
        id={id}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      <div className={checkboxClassList.join(" ")} onClick={onChange}>
        {checked ? <div className={classes["Checkbox--tick"]} /> : null}
      </div>
      <label className={classes["Checkbox--label"]} htmlFor={id}>
        {label}
      </label>
    </span>
  );
};
