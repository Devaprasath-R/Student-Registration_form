import React from 'react';
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";

function EmployeeFeedbackForm(props) {
  const initialValues = {
    name: "",
    email: "",
    rating: "",
    department: "",
    feedback: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Full name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    department: Yup.string().required("Department is required"),
    rating: Yup.number()
      .min(1, "Minimum rating is 1")
      .max(5, "Maximum rating is 5")
      .required("Rating is required"),
    feedback: Yup.string().max(200, "Feedback should be under 200 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert("Form submitted successfully!");
    resetForm();
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <h2>Employee Feedback Form</h2>
            <div>
              <label>Full Name: </label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label>Email: </label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label>Department: </label>
              <Field as="select" name="department">
                <option value="">Select</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Computer Science and Business System">Computer Science and Business System</option>
                <option value="Bio-Medical">Bio-Medical</option>
                <option value="Artificial Intelligence and Data Science">Artificial Intelligence and Data Science</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Electronics and Communication">Electronics and Communication</option>
                <option value="Electrical and Electronics">Electrical and Electronics</option>
                <option value="Bio-Technology">Bio-Technology</option>
                

              </Field>
              <ErrorMessage name="department" component="div" className="error" />
            </div>
            <div>
              <label>Rating: </label>
              <Field type="number" name="rating" />
              <ErrorMessage name="rating" component="div" className="error" />
            </div>
            <div>
              <label>Feedback: </label>
              <Field as="textarea" name="feedback" />
              <ErrorMessage name="feedback" component="div" className="error" />
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default EmployeeFeedbackForm;