import React, { useState } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { useCV, useCVDispatch } from '../../contextApi/Store'
import InputWrapper from '../UI/InputWrapper'
import Wrapper from '../UI/Wrapper'
import Award from './Award'
import HeaderSection from './HeaderSection'

const Awards = () => {
  const [isShown, setIsShown] = useState(false);
  const { awards } = useCV();
  const dispatch = useCVDispatch();

  const handleAward = () => {
    console.log('triggered');
  };

  const handleToggle = () => {
    setIsShown(prev => !prev);
  }

  return (
    <>
      <HeaderSection
        text='Awards'
        onToggleSection={handleToggle}
        isShown={isShown}
      />
      {isShown && (
        <Wrapper>
          <div className='flex flex-row'>
            <BsFillPlusSquareFill
              onClick={handleAward}
              className='bg-[#afb6c0] transition-all duration-200 ease-in-out mr-4'
            />
            <p>Add</p>
          </div>
          <InputWrapper>
            {awards?.map((item) => (
              <Award award={item} key={item.id} />
            ))}
          </InputWrapper>
        </Wrapper>
      )}
    </>
  )
}

export default Awards