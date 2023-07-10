import React from 'react';
import { css, styled } from 'styled-components';

const ButtonArea = () => {
  return (
    <>
      <h2>ButtonArea</h2>
      <div>
        <ButtonContainer bgcolor="lavender" color="royalblue" size="large" outline={true} rightIcon="(rightIcon)">
          test
        </ButtonContainer>
        <ButtonContainer bgcolor="lavender" color="royalblue" size="medium">
          test
        </ButtonContainer>
        <ButtonContainer bgcolor="lavender" color="royalblue" size="small">
          test
        </ButtonContainer>
      </div>
      <div>
        <ButtonContainer bgcolor="lavenderblush" color="palevioletred" size="large" outline={true}>
          test
        </ButtonContainer>
        <ButtonContainer bgcolor="lavenderblush" color="palevioletred" size="medium">
          test
        </ButtonContainer>
        <ButtonContainer bgcolor="lavenderblush" color="palevioletred" size="small">
          test
        </ButtonContainer>
      </div>
    </>
  );
};

export default ButtonArea;

export const ButtonContainer = ({ children, ...rest }) => {
  return (
    <>
      <StButton {...rest}>
        {children}
        {rest.rightIcon}
      </StButton>
    </>
  );
};

const StButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 6px;

  background-color: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  font-weight: 0;
  margin: 5px;

  /* width: ${({ size }) => {
    switch (size) {
      case 'large':
        return '200px';
      case 'medium':
        return '130px';
      case 'small':
        return '100px';
      default:
        break;
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'large':
        return '50px';
      case 'medium':
        return '45px';
      case 'small':
        return '40px';
      default:
        break;
    }
  }}; */

  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          width: 200px;
          height: 50px;
        `;
      case 'medium':
        return css`
          width: 130px;
          height: 45px;
        `;
      case 'small':
        return css`
          width: 100px;
          height: 40px;
        `;
      default:
        break;
    }
  }};

  ${({ outline, bgcolor }) => {
    if (outline) {
      return css`
        border: 3px solid ${bgcolor};
        background-color: white;
        font-weight: 600;
      `;
    }
  }};
`;
