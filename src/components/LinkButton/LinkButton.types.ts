import { ReactElement } from 'react';

export interface LinkButtonProps {
  onClick?: () => void;
  href?: string;
  icon?: ReactElement;
  label: string;
  openInNewTab?: boolean;
  internal?: boolean;
  small?: boolean;
  noBorder?: boolean;
  transformHover?: boolean;
}

export interface StyledLinkButtonProps {
  small?: boolean;
  noBorder?: boolean;
  transformHover?: boolean;
}
