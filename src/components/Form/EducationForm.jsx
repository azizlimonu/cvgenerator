import React from 'react'
import { useCVDispatch } from '../../contextApi/Store'
import Button from '../UI/Button'
import Input from '../UI/Input'
import InputRow from '../UI/InputRow'
import InputWrapper from '../UI/InputWrapper'

const EducationForm = ({ education }) => {
  const dispatch = useCVDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: 'CHANGE_EDUCATION',
      education: { ...education, [name]: value },
    });
  };

  const handleDelete = (e) => {
    dispatch({
      type: 'DELETE_EDUCATION',
      id: education.id
    })
  };

  return (
    <InputWrapper>
      <InputRow>
        <Input
          type="text"
          name="universityName"
          placeholder="University"
          value={education.universityName}
          onChange={(e) => handleChange(e)}
          maxLength="35"
          label="University"
        />

        <Input
          type="text"
          name="city"
          placeholder="City"
          value={education.city}
          onChange={(e) => handleChange(e)}
          maxLength="20"
          label="City"
        />
      </InputRow>

      <InputRow>
        <Input
          type="text"
          name="degree"
          placeholder="Degree"
          value={education.degree}
          onChange={(e) => handleChange(e)}
          maxLength="15"
          label="Degree"
        />
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={education.subject}
          onChange={(e) => handleChange(e)}
          maxLength="20"
          label="Subject"
        />
      </InputRow>

      <InputRow>
        <Input
          type="tel"
          name="from"
          placeholder="From"
          value={education.from}
          onChange={(e) => handleChange(e)}
          maxLength="4"
          label="From"
        />
        <Input
          type="tel"
          name="to"
          placeholder="To"
          value={education.to}
          onChange={(e) => handleChange(e)}
          maxLength="4"
          label="To"
        />
      </InputRow>

      <Button
        classes="danger"
        onClick={handleDelete}
        text='Delete'
      />
    </InputWrapper>
  )
}

export default EducationForm