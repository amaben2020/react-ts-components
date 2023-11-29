import { ReactNode } from "react";
// https://dev.to/maissenayed/conditional-react-props-with-typescript-43lg
 
type CommonProps = {
  children: ReactNode
}

type ConditionalProps = {
  componentName: string,
  variant: "element",
  message: JSX.Element,
  border?: boolean
} | {
  componentName?: never,
  variant: "number",
  message: number,
  border?:boolean
}


type Props = CommonProps & ConditionalProps

export const VariantComponent = (props: Props): JSX.Element => {
  const { message, componentName, variant = "element", border, children } = props;

  console.log(border);
  return (
    <div className={'py-4 ' + (border ? 'border-2 border-red-500' : 'border border-green-500')}>
      {message && message}
      {variant === "element" && componentName}
      {children}
    </div>
  );
};
