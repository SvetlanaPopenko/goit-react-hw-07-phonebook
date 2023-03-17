import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactsList, ContactItems } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {visibleContacts.length > 0 && (
        <ContactsList>
          {visibleContacts.map(contact => (
            <ContactItems key={contact.id}>
              <ContactItem contact={contact} />
            </ContactItems>
          ))}
        </ContactsList>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
