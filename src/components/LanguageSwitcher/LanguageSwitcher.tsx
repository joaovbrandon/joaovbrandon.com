import { useState } from 'react';
import { MdOutlineLanguage } from 'react-icons/md';
import { LanguageSwitcher as NextLanguageSwitcher } from 'next-export-i18n';
import * as S from './LanguageSwitcher.styles';

const LanguageSwitcher = () => {
  const [showLanguageSwitcher, toggleLanguageSwitcher] = useState(false);

  return (
    <>
      <S.LanguageSwitcherWrapper>
        <MdOutlineLanguage
          onClick={() => toggleLanguageSwitcher(!showLanguageSwitcher)}
          size={20}
        />
        {showLanguageSwitcher && (
          <S.LanguageSwitcher onClick={() => toggleLanguageSwitcher(false)}>
            <NextLanguageSwitcher lang="en">English</NextLanguageSwitcher>
            <NextLanguageSwitcher lang="pt">Português</NextLanguageSwitcher>
          </S.LanguageSwitcher>
        )}
      </S.LanguageSwitcherWrapper>
      {showLanguageSwitcher && (
        <S.LanguageSwitcherOverlay
          onClick={() => toggleLanguageSwitcher(false)}
        />
      )}
    </>
  );
};

export default LanguageSwitcher;
