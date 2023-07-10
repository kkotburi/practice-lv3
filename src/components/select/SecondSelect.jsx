import React, { useState } from 'react';
import { DropdownHeader, DropdownItem, DropdownWrapper } from './FirstSelect';
import { styled } from 'styled-components';

const SecondSelect = () => {
  const options = ['Javascript', 'Java', 'React', 'Node', 'Spring'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handelOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <DropdownWrapper>
        <DropdownHeader
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <span>{selectedOption || '선택하시오.'}</span>
          <span>▼</span>
        </DropdownHeader>
        {isOpen && (
          <DropdownList>
            {options.map((option) => (
              <DropdownItem
                key={option}
                onClick={() => {
                  handelOptionClick(option);
                }}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownWrapper>
    </div>
  );
};

export default SecondSelect;

export const DropdownList = styled.div`
  width: 200px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-top: 1px solid #ccc;

  /* position: absolute; */
`;
