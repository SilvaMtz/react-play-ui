import React, { FunctionComponent, HTMLAttributes } from 'react';
import classes from './LoadingContent.module.css';

export type LineRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const LoadingContent: FunctionComponent<
    HTMLAttributes<HTMLDivElement> & {
      lines?: LineRange;
    }
> = ({ lines = 3, ...rest }) => {
  const classList = [
    classes['loadingContent--loader']
  ];
  const lineElements = [];

  for (let i = 0; i < lines; i++) {
    lineElements.push(
      <span key={i} className={classes['loadingContent--singleLine']}>
        <span className={classes['loadingContent--singleLineBackground']} />
      </span>
    );
  }

  return (
    <span className={classList.join(' ')} {...rest}>
      {lineElements}
    </span>
  );
};