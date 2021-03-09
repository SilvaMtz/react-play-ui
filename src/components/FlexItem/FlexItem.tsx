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

import React, { CSSProperties, FunctionComponent } from 'react';
import classes from './FlexItem.module.css';

export type FlexItemGrowSize =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | true
  | false
  | null;

export interface FlexItemProps {
  grow?: FlexItemGrowSize;
  component?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
}

export const GROW_SIZES: FlexItemGrowSize[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const FlexItem: FunctionComponent<FlexItemProps> = ({
  children,
  className,
  grow = true,
  component: Component = 'div',
  style,
  ...rest
}) => {

  let classList = [
    'flexItem',
    classes['flexItem'],
    !grow ? classes['flexItem--flexGrowZero'] : undefined,
    typeof grow === 'number' ? classes[`flexItem--flexGrow${GROW_SIZES.indexOf(grow)}`] : undefined
  ];

  return (
    // @ts-ignore difficult to verify `rest` applies to `Component`
    <Component className={classList.join(' ')} style={style} {...rest}>
      {children}
    </Component>
  );
};