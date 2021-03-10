/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { HTMLAttributes, Ref, forwardRef } from 'react';
import classes from './FlexGroup.module.css';

export type FlexGroupAlignItems = keyof typeof alignItemsToClassNameMap;
export type FlexGroupComponentType = 'div' | 'span';
export type FlexGroupDirection = keyof typeof directionToClassNameMap;
export type FlexGroupGutterSize = keyof typeof gutterSizeToClassNameMap;
export type FlexGroupJustifyContent = keyof typeof justifyContentToClassNameMap;

export interface FlexGroupProps {
  alignItems?: FlexGroupAlignItems;
  component?: FlexGroupComponentType;
  direction?: FlexGroupDirection;
  gutterSize?: FlexGroupGutterSize;
  justifyContent?: FlexGroupJustifyContent;
  responsive?: boolean;
  wrap?: boolean;
}

const gutterSizeToClassNameMap = {
  none: '',
  xs: 'FlexGroup--gutterExtraSmall',
  s: 'FlexGroup--gutterSmall',
  m: 'FlexGroup--gutterMedium',
  l: 'FlexGroup--gutterLarge',
  xl: 'FlexGroup--gutterExtraLarge',
};

const alignItemsToClassNameMap = {
  stretch: '',
  flexStart: 'FlexGroup--alignItemsFlexStart',
  flexEnd: 'FlexGroup--alignItemsFlexEnd',
  center: 'FlexGroup--alignItemsCenter',
  baseline: 'FlexGroup--alignItemsBaseline',
};


const justifyContentToClassNameMap = {
  flexStart: '',
  flexEnd: 'FlexGroup--justifyContentFlexEnd',
  center: 'FlexGroup--justifyContentCenter',
  spaceBetween: 'FlexGroup--justifyContentSpaceBetween',
  spaceAround: 'FlexGroup--justifyContentSpaceAround',
  spaceEvenly: 'FlexGroup--justifyContentSpaceEvenly',
};

const directionToClassNameMap = {
  row: 'FlexGroup--directionRow',
  rowReverse: 'FlexGroup--directionRowReverse',
  column: 'FlexGroup--directionColumn',
  columnReverse: 'FlexGroup--directionColumnReverse',
};

const isValidElement = (
  component: string
): component is FlexGroupComponentType => {
  return ['div', 'span'].includes(component);
};

export const FlexGroup = forwardRef<
  HTMLDivElement | HTMLSpanElement,
    HTMLAttributes<HTMLDivElement | HTMLSpanElement> &
    FlexGroupProps
>(
  (
    {
      children,
      className,
      gutterSize = 'l',
      alignItems = 'stretch',
      responsive = true,
      justifyContent = 'flexStart',
      direction = 'row',
      wrap = false,
      component = 'div',
      ...rest
    },
    ref: Ref<HTMLDivElement> | Ref<HTMLSpanElement>
  ) => {
    const classList = [
      'FlexGroup',
      classes['FlexGroup'],
      classes[gutterSizeToClassNameMap[gutterSize as FlexGroupGutterSize]],
      classes[alignItemsToClassNameMap[alignItems as FlexGroupAlignItems]],
      classes[justifyContentToClassNameMap[justifyContent as FlexGroupJustifyContent]],
      classes[directionToClassNameMap[direction as FlexGroupDirection]],
      responsive ? [classes['FlexGroup--responsive'], 'flexGroup--responsive'].join(' ') : undefined,
      wrap ? classes['FlexGroup--wrap'] : undefined,
      className
    ];

    if (!isValidElement(component)) {
      throw new Error(
        `${component} is not a valid element type. Use \`div\` or \`span\`.`
      );
    }

    return component === 'span' ? (
      <span
        className={classList.join(' ')}
        ref={ref as Ref<HTMLSpanElement>}
        {...(rest as HTMLAttributes<HTMLSpanElement>)}>
        {children}
      </span>
    ) : (
      <div
        className={classList.join(' ')}
        ref={ref as Ref<HTMLDivElement>}
        {...(rest as HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }
);
FlexGroup.displayName = 'FlexGroup';