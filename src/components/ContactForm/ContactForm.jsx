import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsOps";

import css from "./ContactForm.module.css";

const formData = {
  name: "",
  number: "",
};

const contactValidationScheme = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be more than 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("This field is required")
    .trim(),
  number: Yup.string()
    .min(3, "Number must be more than 3 characters")
    .max(50, "Number must be less than 50 characters")
    .required("This field is required")
    .trim(),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={formData}
      validationSchema={contactValidationScheme}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.formLabel}>
          <span className={css.labelText}>Name</span>
          <Field className={css.formInput} type="text" name="name"></Field>
          <ErrorMessage name="name" as="span" />
        </label>
        <label className={css.formLabel}>
          <span className={css.labelText}>Number</span>
          <Field className={css.formInput} type="text" name="number"></Field>
          <ErrorMessage name="number" as="span" />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
