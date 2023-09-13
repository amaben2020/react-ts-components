import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ItemBase {
  id: string;
  content: string;
}
// That's the native div element type definition.
type NativeContainerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
// Here we removed the "children" property with "Omit".
// It's because we're using our own - the function
// passed as a child!
interface ListContainerProps extends Omit<NativeContainerProps, "children"> {}

export interface ListItemInjectedProps<T extends ItemBase> {
  item: T;
  index: number;
  ListItem: (props: ItemBase) => ReactNode;
}
// Here we merge our own properties with native ones!
export interface ListProps<T extends ItemBase> extends ListContainerProps {
  items: T[];
  children: (props: ListItemInjectedProps<T>) => ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}
