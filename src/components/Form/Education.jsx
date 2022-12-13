import React, { useState } from 'react'
import Wrapper from '../UI/Wrapper';
import HeaderSection from './HeaderSection'
import EducationForm from './EducationForm';
import { useCV, useCVDispatch } from '../../contextApi/Store';
import { BsFillPlusSquareFill } from 'react-icons/bs';

const Education = () => {
  const [isShown, setIsShown] = useState(false);
  const { education } = useCV();
  const dispatch = useCVDispatch();

  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  const handleEducation = () => {
    dispatch({
      type: 'ADD_EDUCATION',
    });
  };

  return (
    <>
      <HeaderSection
        text='Education or Degree'
        onToggleSection={handleToggle}
        isShown={isShown}
      />
      {isShown && (
        <Wrapper>
          <BsFillPlusSquareFill
            onClick={handleEducation}
            className='bg-[#afb6c0] transition-all duration-200 ease-in-out'
          />
          {education?.map((item, idx) => (
            <EducationForm key={idx} education={item} />
          ))}
        </Wrapper>
      )}
    </>
  )
}

export default Education