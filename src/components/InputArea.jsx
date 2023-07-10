import React, { useState } from 'react';
import { styled } from 'styled-components';
import { ButtonContainer } from './ButtonArea';

const InputArea = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const changeEnteredNum = (event) => {
    const value = event.target.value;
    const removedCommaValue = Number(value.replaceAll(',', ''));
    setPrice(removedCommaValue.toLocaleString());
  };

  return (
    <>
      <h2>InputArea</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const plainPrice = price.replaceAll(',', '');
          alert(`이름: ${name}, 가격: ${plainPrice}`);
          setName('');
          setPrice('');
        }}
      >
        <label>이름</label>
        <StInput
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>가격</label>
        <StInput
          type="text"
          value={price}
          onChange={(event) => {
            changeEnteredNum(event);
          }}
        />
        <ButtonContainer bgcolor="lavenderblush" color="palevioletred" size="small" type="submit">
          submit
        </ButtonContainer>
      </form>
    </>
  );
};

export default InputArea;

const StInput = styled.input`
  height: 40px;
  width: 200px;
  padding: 0px 12px;
  outline: none;
  border: 1px solid #333333;
  border-radius: 16px;
`;
