import React, { useState, useContext } from "react";
import useEditProfile from "../../hooks/useEditProfile";
import { FaRegWindowClose } from "react-icons/fa";
import { UserContext } from "../../contexts/UserContext";
import {
  Overlay,
  Card,
  CloseButton,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormRow,
  FormButtonWrap,
} from "./PopupElements";

function PopupCard({ onClose }) {
  const [initialValues, setInitialValues] = useState({});
  const [updatedValues, setUpdatedValues] = useState({});
  const { onChangeProfile } = useEditProfile();
  const { user } = useContext(UserContext);

  if (JSON.stringify(initialValues) !== JSON.stringify(user)) {
    setInitialValues(user);
    setUpdatedValues(user);
  }

  const handleChange = (e) => {
    setUpdatedValues({ ...updatedValues, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, age, gender } = updatedValues;
    onChangeProfile(name, email, age, gender);
    onClose(true);
  };

  return (
    <>
      <Overlay>
        <Card>
          <FormH1>แก้ไขบัญชี</FormH1>
          <FormContent>
            <Form onSubmit={onSubmit}>
              <FormRow>
                <FormContent>
                  <FormLabel htmlFor="name">ชื่อ</FormLabel>
                  <FormInput
                    type="text"
                    name="name"
                    value={updatedValues.name || ""}
                    onChange={handleChange}
                  />
                  <FormLabel htmlFor="email">อีเมล</FormLabel>
                  <FormInput
                    type="email"
                    name="email"
                    value={updatedValues.email || ""}
                    onChange={handleChange}
                  />
                  <FormLabel htmlFor="age">อายุ</FormLabel>
                  <FormInput
                    type="number"
                    name="age"
                    value={updatedValues.age || ""}
                    onChange={handleChange}
                  />
                  <FormLabel htmlFor="gender">เพศ</FormLabel>
                  <FormInput
                    type="text"
                    name="gender"
                    value={updatedValues.gender || ""}
                    onChange={handleChange}
                  />
                </FormContent>
              </FormRow>
              <FormButtonWrap>
                <FormButton type="submit">บันทึก</FormButton>
              </FormButtonWrap>
            </Form>
          </FormContent>
          <CloseButton onClick={onClose}>
            <FaRegWindowClose size={"1.5rem"} />
          </CloseButton>
        </Card>
      </Overlay>
    </>
  );
}

export default PopupCard;
