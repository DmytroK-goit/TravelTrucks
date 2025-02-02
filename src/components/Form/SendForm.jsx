import s from "./SendForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const SendForm = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const initialValues = {
    name: "",
    email: "",
    dateRange: [null, null],
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter Name"),
    email: Yup.string().email("Invalid email format").required("Required"),
    dateRange: Yup.array()
      .of(Yup.date().nullable())
      .required("Required")
      .test("date-range", "Select both start and end dates", (value) =>
        value.every((date) => date !== null)
      ),
    comment: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    toast.success("Booking request sent successfully!");
    resetForm();
    setDateRange([null, null]);
  };

  return (
    <div className={s.form_cont}>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={s.form}>
        <div className={s.block}>
          <h3 className={s.form_title}>Book your campervan now</h3>
          <p className={s.form_parag}>
            Stay connected! We are always ready to help you.
          </p>
        </div>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className={s.form_block}>
                <label>
                  <Field
                    className={s.input}
                    type="text"
                    name="name"
                    placeholder="Name*"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={s.error}
                  />
                </label>

                <label>
                  <Field
                    className={s.input}
                    type="email"
                    name="email"
                    placeholder="Email*"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={s.error}
                  />
                </label>

                <label>
                  <DatePicker
                    selectsRange
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                      setDateRange(update);
                      setFieldValue("dateRange", update);
                    }}
                    className={s.input}
                    placeholderText="Select Booking Date Range*"
                    dateFormat="dd/MM/yyyy"
                  />
                  <ErrorMessage
                    name="dateRange"
                    component="div"
                    className={s.error}
                  />
                </label>

                <label>
                  <Field
                    className={`${s.input} ${s.textarea}`}
                    as="textarea"
                    name="comment"
                    placeholder="Comment*"
                  />
                  <ErrorMessage
                    name="comment"
                    component="div"
                    className={s.error}
                  />
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
