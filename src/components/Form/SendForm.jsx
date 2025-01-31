import s from "./SendForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const SendForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Enter Name"),
    email: Yup.string().email("Invalid email format").required("Required"),
    bookingDate: Yup.date().required("Required"),
    comment: Yup.string(),
  });
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className={s.form_cont}>
      <div className={s.form}>
        <div className={s.block}>
          <h3 className={s.form_title}>Book your campervan now</h3>
          <p className={s.form_parag}>
            {" "}
            Stay connected! We are always ready to help you.
          </p>
        </div>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={s.form_block}>
                <label>
                  <Field
                    className={s.input}
                    type="text"
                    name="name"
                    placeholder="Name*"
                  />
                  <ErrorMessage name="name" component="div" />
                </label>

                <label>
                  <Field
                    className={s.input}
                    type="email"
                    name="email"
                    placeholder="Email*"
                  />
                  <ErrorMessage name="email" component="div" />
                </label>

                <label>
                  <Field
                    className={s.input}
                    type="text"
                    name="bookingDate"
                    placeholder="Booking Date*"
                  />
                  <ErrorMessage name="bookingDate" component="div" />
                </label>

                <label>
                  <Field
                    className={`${s.input} ${s.textarea}`}
                    as="textarea"
                    name="comment"
                    placeholder="Comment*"
                  />
                  <ErrorMessage name="comment" component="div" />
                </label>

                <button className={s.btn} type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
