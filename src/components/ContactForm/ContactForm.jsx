import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const UserSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Maximum 30 characters!")
    .required("Required!"),
  userNumber: Yup.string().min(3, "Too Short!").required("Required!"),
});

export default function ContactForm() {
  const fieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contactDetails = {
      name: values.userName,
      number: values.userNumber,
    };
    dispatch(addContact(contactDetails));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ userName: "", userNumber: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <div>
            <label htmlFor={`${fieldId}-userName`}>Name</label>
            <Field
              className={css.formInput}
              type="text"
              name="userName"
              id={`${fieldId}-userName`}
            />
            <ErrorMessage
              className={css.error}
              name="userName"
              component="span"
            />
          </div>
          <div>
            <label htmlFor={`${fieldId}-userNumber`}>Number</label>
            <Field
              className={css.formInput}
              type="text"
              name="userNumber"
              id={`${fieldId}-userNumber`}
            />
            <ErrorMessage
              className={css.error}
              name="userNumber"
              component="span"
            />
          </div>
        </div>
        <div className={css.btnContainer}>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}