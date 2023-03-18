export const checkContact = (contacts, values) => {
  return contacts.find(contact => contact.name === values.name.trim());
};
export const checkNumber = (contacts, values) => {
  return contacts.find(contact => contact.phone === values.phone.trim());
};
