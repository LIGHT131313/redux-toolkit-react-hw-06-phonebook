import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledField,
  ErrorMsg,
  AddBtn,
} from './ContactForm.styled';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const nameRegExpMsg = `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`;
const phoneRegExpMsg = `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`;

const PhonebookSchema = Yup.object().shape({
  name: Yup.string().required('Required').matches(nameRegExp, nameRegExpMsg),
  number: Yup.string()
    .required('Required')
    .matches(phoneRegExp, phoneRegExpMsg),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={PhonebookSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledField name="name" type="text" placeholder="Name" />
        <ErrorMsg name="name" component="div" />
        <StyledField name="number" type="tel" placeholder="Phone number" />
        <ErrorMsg name="number" component="div" />
        <AddBtn type="submit">Add contact</AddBtn>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
