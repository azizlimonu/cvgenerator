import React, { useContext, useState } from 'react'
import { useCV, useCVDispatch } from '../../contextApi/Store'
import HeaderSection from './HeaderSection'
import Input from '../UI/Input'
import InputRow from '../UI/InputRow'
import InputWrapper from '../UI/InputWrapper'
import TextArea from '../UI/TextArea'
import Wrapper from '../UI/Wrapper'

const GeneralInfo = () => {
  const [isShown, setIsShown] = useState(true);
  const { generalInfo } = useCV();
  const dispatch = useCVDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    dispatch({
      type: 'CHANGE_GENERAL_INFO',
      name,
      value,
    });
  };

  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <div>
      <HeaderSection
        text='Personal Information'
        onToggleSection={handleToggle}
        isShown={isShown}
      />
      {isShown && (
        <Wrapper>
          <InputWrapper>
            <InputRow>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value='firstname'
                onChange={(e) => handleChange(e)}
                maxLength="15"
                label="First Name"
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={generalInfo.lastName}
                onChange={(e) => handleChange(e)}
                maxLength="15"
                label="Last Name"
              />
            </InputRow>

            <Input
              type="text"
              name="title"
              placeholder="Title"
              value={generalInfo.title}
              onChange={(e) => handleChange(e)}
              maxLength="50"
              label="Title"
            />

            <InputRow>
              <Input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                value={generalInfo.phoneNumber}
                onChange={(e) => handleChange(e)}
                maxLength="20"
                label="Phone"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={generalInfo.email}
                onChange={(e) => handleChange(e)}
                maxLength="25"
                label="Email"
              />
            </InputRow>

            <Input
              type="text"
              name="address"
              placeholder="Address"
              value={generalInfo.address}
              onChange={(e) => handleChange(e)}
              maxLength="40"
              label="Address"
            />

            <InputRow>
              <Input
                type="text"
                name="linkedIn"
                placeholder="LinkedIn"
                value={generalInfo.linkedIn}
                onChange={(e) => handleChange(e)}
                maxLength="40"
                label="LinkedIn"
              />
              <Input
                type="text"
                name="facebook"
                placeholder="Facebook"
                value={generalInfo.facebook}
                onChange={(e) => handleChange(e)}
                maxLength="40"
                label="Facebook"
              />
            </InputRow>

            <TextArea
              name="description"
              placeholder="Description"
              value={generalInfo.description}
              onChange={(e) => handleChange(e)}
              maxLength="600"
            />
          </InputWrapper>
        </Wrapper>
      )}
    </div>
  )
}

export default GeneralInfo