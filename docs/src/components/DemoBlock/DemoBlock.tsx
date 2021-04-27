import classNames from "classnames";
import classes from "./DemoBlock.module.css";
import { FunctionComponent, useState } from "react";
import { HTMLAttributes } from "react";
import { CommonProps, Tab, TabPanel, Tabs } from "react-play-ui";
import { CodeBlock } from "../CodeBlock";

export type DemoBlockType = CommonProps & HTMLAttributes<HTMLDivElement> & {
  snippet?: string;
  codeBlock?: string;
}

export const DemoBlock: FunctionComponent<DemoBlockType> = ({
  snippet,
  codeBlock,
  className,
  children,
  ...rest
}) => {

  const [activeTab, setActiveTab] = useState(-1);

  const classList = classNames(
    classes["DemoBlock"],
    className
  )

  const handleTabChange: (tabId:number) => void = (tabId: number) => {
    if (tabId === activeTab) {
      setActiveTab(-1);
    } else {
      setActiveTab(tabId);
    }
  }

  return (
    <div className={classList} {...rest}>
      <div className={classes["DemoBlock--Showcase"]}>
        {children}
      </div>
      <div className={classes["DemoBlock--Actions"]}>
        <Tabs activeTab={activeTab} stretch>
          <Tab onClick={() => handleTabChange(0)} tabId={0} label="Demo" />
          <Tab onClick={() => handleTabChange(1)} tabId={1} label="Snippet" />
        </Tabs>
        <TabPanel tabId={0} activeTab={activeTab}>
          <CodeBlock
            className={classes["CodeBlock"]}
            snippet={codeBlock}
          />
        </TabPanel>
        <TabPanel tabId={1} activeTab={activeTab}>
          <CodeBlock
            className={classes["CodeBlock"]}
            snippet={snippet}
          />
        </TabPanel>
      </div>
    </div>
  )
}