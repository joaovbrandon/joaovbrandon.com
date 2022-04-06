import { useCallback } from 'react';
import Link from 'next/link';
import ConditionalWrapper from '@components/ConditionalWrapper';
import * as S from './LinkButton.styles';
import { LinkButtonProps } from './LinkButton.types';

const LinkButton = ({
  href = '',
  icon: Icon,
  internal = false,
  label,
  noBorder,
  onClick,
  openInNewTab = false,
  small,
  transformHover,
}: LinkButtonProps) => {
  const LinkWrapper = useCallback(
    children => (
      <Link href={href} passHref>
        {children}
      </Link>
    ),
    [href]
  );

  return (
    <ConditionalWrapper condition={internal && !onClick} wrapper={LinkWrapper}>
      <S.LinkButton
        draggable="false"
        href={onClick ? undefined : href}
        noBorder={noBorder}
        onClick={onClick}
        rel="noreferrer"
        small={small}
        target={openInNewTab ? '_blank' : '_self'}
        transformHover={transformHover}
      >
        {Icon}
        {label}
      </S.LinkButton>
    </ConditionalWrapper>
  );
};

export default LinkButton;
