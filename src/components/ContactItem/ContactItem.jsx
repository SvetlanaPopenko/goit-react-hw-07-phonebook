import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactNumber, ContactListButton } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
    const handleDeleteContact = () => dispatch(deleteContact(id));
    
  return (
    <>
      <p>
        {name}: <ContactNumber>{phone}</ContactNumber>
      </p>
      <ContactListButton onClick={handleDeleteContact}>
        Delete
      </ContactListButton>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default ContactItem;
