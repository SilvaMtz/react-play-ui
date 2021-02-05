import React, { FunctionComponent, AnchorHTMLAttributes, Ref } from 'react';
import classes from './SidenavItem.module.css';
import { SvgIcon } from '../../SvgIcon';

interface SidenavItemProps {
  icon?: string;
  iconFill?: string;
  // disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  buttonRef?: Ref<HTMLButtonElement>;
  href?: string;
  target?: string;
  rel?: string;
  label: string;
  sublabel?: string;
}

export const SidenavItem: FunctionComponent<SidenavItemProps> = ({
  icon,
  iconFill = "var(--text-color)",
  label,
  href,
  target,
  buttonRef,
  sublabel,
  ...rest
}) => {

  let iconInstance;
  if (icon) {
    iconInstance = <SvgIcon icon={icon} color={iconFill} />;
  }

  const classList = [
    classes['sidenav-item']
  ]

  let labelInstance;
  if (sublabel) {
    labelInstance = (
      <div className={classes['sublabel-label-container']}>
        <p className={classes['label']}>{label}</p>
        <p className={classes['sublabel']}>{sublabel}</p>
      </div>
    )
  } else {
    labelInstance = <p className={classes['label']}>{label}</p>
  }

  const buttonInner = (
    <div className={classes['label-container']}>
      {iconInstance}
      {labelInstance}
    </div>
  );

  let button;
  // <a> elements don't respect the `disabled` attribute. So if we're disabled, we'll just pretend
  // this is a button and piggyback off its disabled styles.
  if (href) {
    button = (
      <a
        className={classList.join(' ')}
        href={href}
        target={target}
        ref={buttonRef as unknown as Ref<HTMLAnchorElement>}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {buttonInner}
      </a>
    );
  } else {
    button = (
      <button
        className={classList.join(' ')}
        type="button"
        ref={buttonRef}
        {...rest}
      >
        {buttonInner}
      </button>
    );
  }

  return button;
}