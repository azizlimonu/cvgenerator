import React, { useState } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useCV, useCVDispatch } from '../../contextApi/Store';
import InputWrapper from '../UI/InputWrapper';
import Wrapper from '../UI/Wrapper';
import HeaderSection from './HeaderSection';
import Skill from './Skill';

const Skills = () => {
  const [isShown, setIsShown] = useState(false);
  const { skills } = useCV();
  const dispatch = useCVDispatch();

  const handleAddNewSkill = () => {
    dispatch({
      type: 'ADD_SKILL',
    });
  };

  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <>
      <HeaderSection
        text='Skills'
        onToggleSection={handleToggle}
        isShown={isShown}
      />
      {isShown && (
        <Wrapper>
          <BsFillPlusSquareFill
            onClick={handleAddNewSkill}
            className='bg-[#afb6c0] transition-all duration-200 ease-in-out'
          />
          <InputWrapper>
            {skills?.map((skil) => (
              <Skill skill={skil} key={skil.id} />
            ))}
          </InputWrapper>
        </Wrapper>
      )}
    </>
  )
}

export default Skills