import { ImUser } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.userContainer}>
        <div className={css.userName}>
          <ImUser />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.userPhone}>
          <ImPhone />
          <p className={css.phone}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}