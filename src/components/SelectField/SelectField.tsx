import React, { FunctionComponent, SelectHTMLAttributes, ReactNode } from 'react';
import classes from './SelectField.module.css';
import ReactSelect from 'react-select';
import { SvgIcon } from '../SvgIcon';

// interface FieldSelectProps {
//   icon?: string;
//   label?: string;
// }

export const SelectField = (props:any) => {
  const customStyles:any = {
    control: (provided:any, state:any) => ({
      width: '100%',
      height: 36,
      backgroundColor: 'rgba(var(--interactable-shade-1))',
      borderRadius: 10,
      display: 'flex',
      border: state.menuIsOpen ? '2px solid var(--accent-blue)' : 'none',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border 0.2s',
      color: 'var(--text-color)',
      padding: props.icon ? '4px 14px 4px 38px' : '4px 14px',
      fontSize: '0.95rem',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'var(--interactable-shade-1-hover)',
      },
      ':focus': {
        backgroundColor: 'var(--interactable-shade-1-hover)',
      },
      ':active': {
        backgroundColor: 'var(--interactable-shade-1-hover)'
      },
    }),
    placeholder: () => ({
      color: 'var(--text-color-shade)',
    }),
    indicatorSeparator: (provided:any) => ({
      ...provided,
      backgroundColor: 'var(--text-color-shade)',
    }),
    dropdownIndicator: (provided:any) => ({
      ...provided,
      paddingRight: 0,
      color: 'var(--text-color-shade)',
    }),
    menu: (provided:any) => ({
      ...provided,
      backgroundColor: 'var(--palette-shade-2)',
      borderRadius: 12,
      border: '1px solid var(--palette-shade-5)',
      boxShadow: '0px 0px 8px var(--text-color-opaque)',
      zIndex: 2
    }),
    menuList: (provided:any) => ({
      ...provided,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      padding: '8px 12px',
      boxSizing: 'border-box',
    }),
    option: (provided:any, state:any) => ({
      ...provided,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: 42,
      padding: 12,
      boxSizing: 'border-box',
      margin: '4px 8px',
      fontSize: '0.98rem',
      fontWeight: 600,
      textDecoration: 'none',
      outline: 'none',
      border: 'none',
      color: state.isSelected ? 'var(--accent-blue)' : 'var(--text-color)',
      cursor: 'pointer',
      transition: 'background-color 0.1s',
      borderRadius: 8,
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: 'var(--interactable-shade-1-hover)',
      },
    }),
    singleValue: (provided:any) => ({
      ...provided,
      color: 'var(--text-color)',
    }),
    valueContainer: (provided:any) => ({
      ...provided,
      padding: 0,
    }),
  };

  let svgIcon = null;
  if (props.icon) {
    svgIcon = (
      <SvgIcon
        className={classes['select-icon']}
        icon={props.icon}
        color="var(--text-color-shade)"
        size="small"
      />
    )
  }

  let wrapperClassList= [
    classes['react-select-wrapper'],
    props.icon ? classes['wrapper--hasIcon'] : null
  ]

  return (
    <div className={wrapperClassList.join(' ')}>
      <label className={classes['react-select-label']}>{props.label}</label>
      {svgIcon}
      <ReactSelect styles={customStyles} {...props} />
    </div>
  );
};