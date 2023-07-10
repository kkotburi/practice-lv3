import React, { useEffect, useRef, useState } from 'react';
import { ButtonContainer } from '../ButtonArea';
import { StModalBox, StModalContents } from './FirstModal';

const SecondModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const clickOutside = (event) => {
    // if (modalRef.current && modalRef.current === event.target) {
    if (modalRef.current === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, []);

  return (
    <div>
      <ButtonContainer bgcolor="lavender" color="royalblue" size="medium" onClick={openModal}>
        second
      </ButtonContainer>
      {isOpen && (
        <StModalBox ref={modalRef}>
          <StModalContents>
            <p>바깥 영역 click 시 닫히는 modal</p>
            <ButtonContainer bgcolor="lavenderblush" color="palevioletred" size="small" onClick={closeModal}>
              닫기
            </ButtonContainer>
          </StModalContents>
        </StModalBox>
      )}
    </div>
  );
};

export default SecondModal;
