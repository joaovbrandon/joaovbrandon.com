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
  onClick,
  openInNewTab = false,
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
        onClick={onClick}
        rel="noreferrer"
        target={openInNewTab ? '_blank' : '_self'}
      >
        {Icon}
        {label}
      </S.LinkButton>
    </ConditionalWrapper>
  );
};

export default LinkButton;
