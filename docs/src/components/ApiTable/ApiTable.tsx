import React, { FunctionComponent, HTMLAttributes } from "react";
import classes from "./ApiTable.module.css";
import classNames from "classnames";
import { CommonProps } from "react-play-ui";
import { CodeLine } from "../CodeLine";

export type PropListItemType = {
  id: number | string;
  name: string;
  description?: string;
  valueTypes: Array<string | number>;
  defaultValue?: string;
};

export type PropListType = PropListItemType[];

export interface ApiTableProps {
  title?: string;
  caption?: string;
  propList: PropListType;
  hasClassName?: boolean;
  hasStyle?: boolean;
}

export type ApiTableType = CommonProps &
  HTMLAttributes<HTMLTableElement> &
  ApiTableProps;

export const ApiTable: FunctionComponent<ApiTableType> = ({
  title,
  caption,
  propList,
  hasClassName = true,
  hasStyle = true,
  className,
  ...rest
}) => {
  const classList = classNames(classes["ApiTable"], className);

  const tableRows = propList.map((prop: PropListItemType) => {
    return (
      <tr key={prop.id} className={classes["Body--Row"]}>
        <td className={classes["BodyRow__Cell"]}>
          <h4 className={classes["PropName"]}>{prop.name}</h4>
          <h5 className={classes["PropDescription"]}>{prop.description}</h5>
        </td>
        <td className={classes["BodyRow__Cell"]}>
          <CodeLine>
            {prop.valueTypes.map((val: string | number, idx: number) => {
              const value =
                typeof val === "string" ? (
                  <span>
                    <span style={{ color: "rgb(200, 80, 60)" }}>"{val}"</span>
                    {idx + 1 !== prop.valueTypes.length ? ", " : null}
                  </span>
                ) : typeof val === "number" ?(
                  <span>
                    <span style={{ color: "rgb(60, 240, 80)" }}>{val}</span>
                    {idx + 1 !== prop.valueTypes.length ? ", " : null}
                  </span>
                ) : (
                  <span>
                    {val}
                    {idx + 1 !== prop.valueTypes.length ? ", " : null}
                  </span>
                );
              return value;
            })}
          </CodeLine>
        </td>
        <td className={classes["BodyRow__Cell"]}>{prop.defaultValue}</td>
      </tr>
    );
  });

  return (
    <div className={classes["TableWrapper"]}>
      <div className={classes["TableTitle--Wrapper"]}>
        <h2 className={classes["Table--Title"]}>{title}</h2>
        <p className={classes["Table--Caption"]}>{caption}</p>
      </div>
      <table className={classList} {...rest}>
        <thead className={classes["ApiTable--Head"]}>
          <tr className={classes["Head--Row"]}>
            <th className={classes["HeadRow__Cell"]}>Prop</th>
            <th className={classes["HeadRow__Cell"]}>Type</th>
            <th className={classes["HeadRow__Cell"]}>Default Value</th>
          </tr>
        </thead>
        <tbody className={classes["ApiTable--Body"]}>
          {tableRows}
          {hasClassName ? (
            <tr className={classes["Body--Row"]}>
              <td className={classes["BodyRow__Cell"]}>
                <h4 className={classes["PropName"]}>className</h4>
              </td>
              <td className={classes["BodyRow__Cell"]}>
                <CodeLine color="success">string</CodeLine>
              </td>
              <td className={classes["BodyRow__Cell"]}></td>
            </tr>
          ) : null}
          {hasStyle ? (
            <tr className={classes["Body--Row"]}>
              <td className={classes["BodyRow__Cell"]}>
                <h4 className={classes["PropName"]}>style</h4>
              </td>
              <td className={classes["BodyRow__Cell"]}>
                <CodeLine>CSSProperties</CodeLine>
              </td>
              <td className={classes["BodyRow__Cell"]}></td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
};
