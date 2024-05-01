import { useDispatch } from "react-redux";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const deleteContactFunc = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={css.listItem}>
      <div>
        <p className={css.info}>
          <FaUserLarge />
          {name}
        </p>
        <p className={css.info}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => deleteContactFunc(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
