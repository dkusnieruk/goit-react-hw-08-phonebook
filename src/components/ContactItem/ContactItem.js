import { deleteContact } from 'Redux/ContactsSlice';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

import propTypes from 'prop-types';

import css from '../ContactItem/contactItem.module.css';
function ContactItem({ contact }) {
  const dispatch = useDispatch();
  return (
    <>
      <li className={css.singleItem} key={contact.id}>
        {contact.name}: {contact.number}
        <IconButton
          className={css.removeButton}
          type="button"
          id={contact.id}
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          <Delete />
        </IconButton>
        {/* <button
          className={css.removeButton}
          type="button"
          id={contact.id}
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          X
        </button> */}
      </li>
    </>
  );
}
ContactItem.propTypes = {
  deleteContact: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      name: propTypes.string,
      number: propTypes.number,
    })
  ),
};

export default ContactItem;
