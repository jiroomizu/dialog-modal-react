import type { FC } from 'react';
import './Button.css';

type Props = {
  text: string;
  onClick?: () => void;
};

const Button: FC<Props> = (props) => {
  const { text, onClick } = props;

  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
