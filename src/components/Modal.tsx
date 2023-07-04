// testing dialog tags
// modal component without dialog tag

import type { FC, ReactNode } from 'react';
import { useRef, useState, useEffect } from 'react';
import Button from './Button';
import './Modal.css';

type Props = {
  children: ReactNode;
  triggerText: string;
};

const Modal: FC<Props> = (props) => {
  const { children, triggerText } = props;
  const modal = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const activeClass = isOpen ? 'active' : '';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (!!window) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]);

  return (
    <>
      <div
        className={`backdrop backdrop--modal ${activeClass}`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <div className={`modal ${activeClass}`} ref={modal} role="dialog">
        <div className="container">
          {children}
          <Button text="close" onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>{triggerText}</button>
    </>
  );
};

export default Modal;
