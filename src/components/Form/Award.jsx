import React from 'react'
import { BsFillFileMinusFill } from 'react-icons/bs'
import Input from '../UI/Input'
import InputRow from '../UI/InputRow'

const Award = ({ award }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
  }

  const handleDelete = () => {
    console.log('triggered');
  }

  return (
    <InputRow>
      <Input
        type="text"
        name="title"
        placeholder="Award"
        value={award.title}
        onChange={handleChange}
        maxLength="25"
        label="Award"
      />
      <Input
        type="text"
        name="organization"
        placeholder="Organization"
        value={award.organization}
        onChange={handleChange}
        maxLength="25"
        label="Organization"
      />
      <Input
        type="tel"
        name="year"
        placeholder="Year"
        value={award.year}
        onChange={handleChange}
        maxLength="4"
        label="Year"
      />

      <button
        onClick={handleDelete}
        className="bg-red-500"
        
      >
        <BsFillFileMinusFill className='bg-red-500'/>
      </button>
    </InputRow>
  )
}

export default Award