import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactNumber, ContactListButton } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
    const handleDeleteContact = () => dispatch(deleteContact(id));
    
  return (
    <>
      <p>
        {name}: <ContactNumber>{number}</ContactNumber>
      </p>
      <ContactListButton onClick={handleDeleteContact}>
        Delete
      </ContactListButton>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
