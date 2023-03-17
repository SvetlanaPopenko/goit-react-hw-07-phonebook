import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'components/service';
import { ContactsList, ContactItems } from './ContactList.styled';
import { selectContacts, selectFilter } from 'redux/selectors';


const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(filter, contacts);

  return (
    <ContactsList>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactItems key={id}>
          <ContactItem name={name} number={number} />
        </ContactItems>
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
