import React from 'react';
import FirstSelect from './select/FirstSelect';
import SecondSelect from './select/SecondSelect';
import { styled } from 'styled-components';

const SelectArea = () => {
  return (
    <>
      <h2>SelectArea</h2>
      <StBox>
        <FirstSelect />
        <SecondSelect />
      </StBox>
    </>
  );
};

export default SelectArea;

const StBox = styled.div`
  display: flex;
  border: 1px solid black;
  width: 500px;
  height: 150px;
  overflow: hidden;
`;
