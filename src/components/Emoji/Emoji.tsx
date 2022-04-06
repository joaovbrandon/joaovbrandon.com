import { EmojiProps } from './Emoji.types';

const Emoji = ({ label, symbol }: EmojiProps) => (
  <span
    aria-hidden={label ? 'false' : 'true'}
    aria-label={label || ''}
    role="img"
  >
    {symbol}
  </span>
);

export default Emoji;
