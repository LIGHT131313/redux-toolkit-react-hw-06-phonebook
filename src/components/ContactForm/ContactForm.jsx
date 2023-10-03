import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledField,
  ErrorMsg,
  AddBtn,
} from './ContactForm.styled';
import { getContacts } from 'redux/selectors';

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

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onAdd = newContact => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
  };

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
