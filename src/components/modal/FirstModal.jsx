import React, { useState } from 'react';
import { styled } from 'styled-components';
import { ButtonContainer } from '../ButtonArea';

const FirstModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <ButtonContainer bgcolor="lavender" color="royalblue" size="medium" onClick={openModal}>
        first
      </ButtonContainer>
      {isOpen && (
        <StModalBox>
          <StModalContents>
            <p>닫기와 확인 button 2개가 있고, 외부 영역을 눌러도 modal이 닫히지 않음</p>
            <ButtonContainer bgcolor="lavender" color="royalblue" size="small">
              확인
            </ButtonContainer>
            <ButtonContainer bgcolor="lavenderblush" color="palevioletred" size="small" onClick={closeModal}>
              닫기
            </ButtonContainer>
          </StModalContents>
        </StModalBox>
      )}
    </div>
  );
};

export default FirstModal;

export const StModalBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StModalContents = styled.div`
  background-color: #fff;
  width: 70%;
  height: 50%;
  border-radius: 12px;
  padding: 20px;
`;
