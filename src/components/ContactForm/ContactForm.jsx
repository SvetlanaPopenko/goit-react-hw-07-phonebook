import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import {
  ContactFormWrap,
  ContactFormButton,
  ContactInput,
  ContactText,
  Error,
} from './ContactForm.styled';
import toast from 'react-hot-toast';
import { selectContacts } from 'redux/selectors';
import { checkContact, checkNumber } from 'components/services';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  phone: yup.string().phone().required(),
});

const initialValues = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (checkContact(contacts, values)) {
      toast(`${values.name} already exists`, {
        position: 'bottom-center',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }
    if (checkNumber(contacts, values)) {
      toast(`${values.phone} already exists`, {
        position: 'bottom-center',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <ContactFormWrap autoComplete="off">
        <ContactText htmlFor="name">
          Name
          <ContactInput type="text" name="name" />
          <Error name="name" component="div" />
        </ContactText>
        <ContactText htmlFor="phone">
          Phone
          <ContactInput type="tel" name="phone" placeholder="+380XXXXXXXXX" />
          <Error name="phone" component="div" />
        </ContactText>
        <ContactFormButton type="submit">Add contact</ContactFormButton>
      </ContactFormWrap>
    </Formik>
  );
};

export default ContactForm;
