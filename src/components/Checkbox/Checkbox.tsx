import React, {
  Component,
  ChangeEventHandler,
  ReactNode,
  InputHTMLAttributes,
} from 'react';
import classes from './Checkbox.module.css';

const typeToClassNameMap = {
  inList: 'euiCheckbox--inList',
};

export type CheckboxType = keyof typeof typeToClassNameMap;

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  checked?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>; // overriding to make it required
  inputRef?: (element: HTMLInputElement) => void;
  label?: ReactNode;
  type?: CheckboxType;
  disabled?: boolean;
  /**
   * when `true` creates a shorter height checkbox row
   */
  compressed?: boolean;
  indeterminate?: boolean;
}

export class Checkbox extends Component<CheckboxProps> {
  static defaultProps = {
    checked: false,
    disabled: false,
    indeterminate: false,
    compressed: false,
  };

  inputRef?: HTMLInputElement = undefined;

  componentDidMount() {
    this.invalidateIndeterminate();
  }

  componentDidUpdate() {
    this.invalidateIndeterminate();
  }

  render() {
    const {
      className,
      id,
      checked,
      label,
      onChange,
      type,
      disabled,
      compressed,
      indeterminate,
      inputRef,
      ...rest
    } = this.props;

    const classList = [
      classes['checkbox-wrapper'],
      type && typeToClassNameMap[type],
      {
        'euiCheckbox--noLabel': !label,
        'euiCheckbox--compressed': compressed,
      },
      className
    ];

    let optionalLabel;

    if (label) {
      optionalLabel = (
        <label className="euiCheckbox__label" htmlFor={id}>
          {label}
        </label>
      );
    }

    return (
      <div className={classList.join(' ')}>
        <input
          className={classes['checkbox-input']}
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          ref={this.setInputRef}
          {...rest}
        />
        <div className={classes['checkbox-square']} />
        {optionalLabel}
      </div>
    );
  }

  setInputRef = (input: HTMLInputElement) => {
    this.inputRef = input;

    if (this.props.inputRef) {
      this.props.inputRef(input);
    }

    this.invalidateIndeterminate();
  };

  invalidateIndeterminate() {
    if (this.inputRef) {
      this.inputRef.indeterminate = this.props.indeterminate!;
    }
  }
}