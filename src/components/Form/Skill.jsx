import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs';
import { useCVDispatch } from '../../contextApi/Store';
import Input from '../UI/Input';

const Skill = ({ skill }) => {
  const dispatch = useCVDispatch();

  const handleChangeSkill = (e) => {
    const { name, value } = e.target;
    const field = name === 'skill-name' ? 'title' : 'rating';

    dispatch({
      type: 'CHANGE_SKILL',
      skill: { ...skill, [field]: value },
    });
  };

  const handleDeleteSkill = () => {
    dispatch({
      type: 'DELETE_SKILL',
      id: skill.id,
    });
  };


  return (
    <div className='flex items-center gap-[8px]'>
      <Input
        type="text"
        name="skill-name"
        placeholder="Skill"
        // value={skill.title}
        onChange={handleChangeSkill}
        label="Skill"
      />
      <select
        name="skill-rating"
        // value={skill.rating}
        onChange={handleChangeSkill}
      >
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advance">Advance</option>
        <option value="master">Master</option>
      </select>
      <button
        onClick={handleDeleteSkill}
      >
        <BsFillTrashFill />
      </button>
    </div>
  )
}

export default Skill;