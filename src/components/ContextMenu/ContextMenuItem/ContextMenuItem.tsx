import React, {
  AnchorHTMLAttributes,
  Component,
  Ref,
} from 'react';
import classes from './ContextMenuItem.module.css';
import { SvgIcon } from '../../SvgIcon/SvgIcon';

export interface ContextMenuItemProps {
  icon?: string;
  iconFill?: string;
  hasPanel?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  buttonRef?: Ref<HTMLButtonElement>;
  href?: string;
  target?: string;
  rel?: string;
  label: string;
  sublabel?: string;
  sublabelColor?: string;
  size?: string;
}

type Props = ContextMenuItemProps;


export class ContextMenuItem extends Component<Props> {
  render() {
    const {
      children,
      hasPanel,
      icon,
      iconFill,
      buttonRef,
      disabled: _disabled,
      href,
      target,
      rel,
      label,
      sublabel,
      sublabelColor = 'var(--text-color-shade)',
      size = 'medium',
      ...rest
    } = this.props;
    let iconInstance;

    if (icon) {
      iconInstance = <SvgIcon icon={icon} color={iconFill} />;
    }

    let arrow;

    if (hasPanel) {
      arrow = (
        <SvgIcon icon="chevronRight"  />
      );
    }

    const sizeToClassMap = {
      small: 'small-item',
      medium: 'medium-item',
      large: 'large-item'
    }

    const classList = [
      classes['context-menu-item'],
      classes[sizeToClassMap[size]]
    ]

    let labelInstance;
    if (sublabel) {
      labelInstance = (
        <div className={classes['sublabel-label-container']}>
          <p className={classes['label']}>{label}</p>
          <p className={classes['sublabel']} style={{color: sublabelColor}}>{sublabel}</p>
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
    if (href && !_disabled) {
      button = (
        <a
          className={classList.join(' ')}
          href={href}
          target={target}
          ref={buttonRef as unknown as Ref<HTMLAnchorElement>}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {buttonInner}
          {arrow}
        </a>
      );
    } else {
      button = (
        <button
          disabled={_disabled}
          className={classList.join(' ')}
          type="button"
          ref={buttonRef}
          {...rest}>
          {buttonInner}
          {arrow}
        </button>
      );
    }

    return button;
  }
}