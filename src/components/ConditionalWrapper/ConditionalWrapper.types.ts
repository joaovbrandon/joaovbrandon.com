import { ReactElement } from 'react';

export interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: (children: ReactElement) => ReactElement;
  children: ReactElement;
}
