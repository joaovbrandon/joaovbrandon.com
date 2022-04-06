import { ConditionalWrapperProps } from './ConditionalWrapper.types';

const ConditionalWrapper = ({
  children,
  condition,
  wrapper,
}: ConditionalWrapperProps) => (condition ? wrapper(children) : children);

export default ConditionalWrapper;
