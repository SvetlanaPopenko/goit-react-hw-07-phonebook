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

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup.string().phone().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const checkContact = (contacts, values) => {
      return contacts.find(contact => contact.name === values.name);
    };
    const checkNumber = (contacts, values) => {
      return contacts.find(contact => contact.number === values.number);
    };
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
      toast(`${values.number} already exists`, {
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
        <ContactText htmlFor="number">
          Number
          <ContactInput type="tel" name="number" placeholder="+380XXXXXXXXX" />
          <Error name="number" component="div" />
        </ContactText>
        <ContactFormButton type="submit">Add contact</ContactFormButton>
      </ContactFormWrap>
    </Formik>
  );
};

export default ContactForm;
