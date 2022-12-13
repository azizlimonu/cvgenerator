import { useState } from 'react';
import { useCV, useCVDispatch } from '../../contexts/CVContext';
import ExperienceForm from './ExperienceForm';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import HeaderSection from './HeaderSection';
import Wrapper from '../UI/Wrapper';

const Experience = () => {
  const [isShown, setIsShown] = useState(false);
  const { experience } = useCV();
  const dispatch = useCVDispatch();

  const handleAddExperience = () => {
    dispatch({
      type: 'ADD_EXPERIENCE',
    });
  };

  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <>
      <HeaderSection
        text="Experience"
        onToggleSection={handleToggle}
        isShown={isShown}
      />
      {isShown && (
        <Wrapper>
          <BsFillPlusSquareFill
            onClick={handleAddExperience}
            className='bg-[#afb6c0] transition-all duration-200 ease-in-out'
          />
          {experience?.map((exp) => (
            <ExperienceForm experience={exp} key={exp.id} />
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default Experience;
