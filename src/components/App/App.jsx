import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contactsSlice.js";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps.js";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import css from "./App.module.css";

export default function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Please, try again later!</Error>}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Create your first contact!</p>
      )}
    </div>
  );
}