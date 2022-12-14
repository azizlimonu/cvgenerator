import InputRow from '../UI/InputRow';
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';
import InputWrapper from '../UI/InputWrapper';
import { useCVDispatch } from '../../contextApi/Store';
import Button from '../UI/Button';

const ExperienceForm = ({ experience }) => {
  const dispatch = useCVDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: 'CHANGE_EXPERIENCE',
      experience: { ...experience, [name]: value },
    });
  };

  const handleDeleteExperience = () => {
    dispatch({
      type: 'DELETE_EXPERIENCE',
      id: experience.id,
    });
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        name="position"
        placeholder="Position"
        value={experience.position}
        onChange={(e) => handleChange(e)}
        maxLength="35"
        label="Position"
      />
      <InputRow>
        <Input
          type="text"
          name="company"
          placeholder="Company"
          value={experience.company}
          onChange={(e) => handleChange(e)}
          maxLength="20"
          label="Company"
        />
        <Input
          type="text"
          name="city"
          placeholder="City"
          value={experience.city}
          onChange={(e) => handleChange(e)}
          maxLength="20"
          label="City"
        />
      </InputRow>
      <TextArea
        type="text"
        name="description"
        placeholder="Description"
        value={experience.description}
        onChange={(e) => handleChange(e)}
        maxLength="350"
        label="Description"
      />
      <InputRow>
        <Input
          type="tel"
          name="from"
          placeholder="From"
          value={experience.from}
          onChange={(e) => handleChange(e)}
          maxLength="4"
          label="From"
        />
        <Input
          type="tel"
          name="to"
          placeholder="To"
          value={experience.to}
          onChange={(e) => handleChange(e)}
          maxLength="4"
          label="To"
        />
      </InputRow>
      <Button
        className='danger'
        onClick={handleDeleteExperience}
        text='Delete'
      />
    </InputWrapper>
  );
};

export default ExperienceForm;
