import classes from './CodeBlock.module.css';
import { Light as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import atomOneDarkReasonable from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark-reasonable';
import { FunctionComponent } from "react";
import { CommonProps } from "react-play-ui";
import classNames from 'classnames';

SyntaxHighlighter.registerLanguage('javascript', js);

export type CodeBlockProps = CommonProps & Omit<SyntaxHighlighterProps, "language" | "style"> & {
  snippet?: Text | string;
};

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({
  language = "typescript",
  style = "monokai-sublime",
  className,
  snippet,
  ...rest
}) => {

  const classList = classNames(
    classes["CodeBlock"],
    className
  )

  return (
    <SyntaxHighlighter className={classList} language="javascript" style={atomOneDarkReasonable} {...rest} >
      {snippet}
    </SyntaxHighlighter>
  )
}