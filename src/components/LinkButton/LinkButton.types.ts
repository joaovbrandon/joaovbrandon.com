import { ReactElement } from 'react';

export interface LinkButtonProps {
  href?: string;
  icon?: ReactElement;
  internal?: boolean;
  label: string;
  noBorder?: boolean;
  onClick?: () => void;
  openInNewTab?: boolean;
  small?: boolean;
  transformHover?: boolean;
}

export interface StyledLinkButtonProps<T extends React.ElementType = 'button'> {
  as?: T;
  draggable?: string;
  href?: string;
  noBorder?: boolean;
  onClick?: () => void;
  rel?: string;
  small?: boolean;
  target?: string;
  transformHover?: boolean;
}
