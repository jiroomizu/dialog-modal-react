// testing dialog tags
// modal component with dialog tag and additional div for backdrop alternative

import type { FC, ReactNode } from 'react';
import { useRef, useState, useEffect } from 'react';
import Button from './Button';
import './DialogWithBackdrop.css';

type Props = {
  children: ReactNode;
  triggerText: string;
};

const Dialog: FC<Props> = (props) => {
  const { children, triggerText } = props;
  const modal = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const activeClass = isOpen ? 'active' : '';

  const toggleDialog = () => {
    if (!modal.current) return;
    const target = modal.current as HTMLDialogElement;
    if (!target.open) {
      target.showModal();
    } else {
      target.close();
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'DIALOG') {
        (e.target as HTMLDialogElement).close();
        setIsOpen(false);
      }
    };

    if (!!window) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('click', handleClick);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, [setIsOpen]);

  return (
    <>
      <div className={`backdrop ${activeClass}`}></div>
      <dialog
        className={`dialog--w-backdrop ${activeClass}`}
        ref={modal}
        role="dialog"
      >
        <div className="container">
          {children}
          <Button text="close" onClick={toggleDialog} />
        </div>
      </dialog>
      <button onClick={toggleDialog}>{triggerText}</button>
    </>
  );
};

export default Dialog;
