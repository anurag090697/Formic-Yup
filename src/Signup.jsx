/** @format */

import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  useFormikContext,
} from "formik";
import * as Yup from "yup";

function Signup() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const validation = Yup.object({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(25, "Too Long!")
      .required("Enter Your FullName"),
    email: Yup.string().email("Invalid email format").required("Enter Email"),
    password: Yup.string()
      // .oneOf(["Sleep@247"], "Password must be Sl__p@24_")
      .resolve("Password must be Sl__p@24_")
      .matches("Sleep@247", "Password must be Sl__p@24_")
      .required("Enter Password"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password doesn’t match")
      // .matches(Yup.ref("password"), "Password doesn’t match")
      .required("Confirm password"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form data", values);
    alert("Sign-up Successful");
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className='bg-white p-4 rounded-l-lg w-full lg:w-1/2'>
      <h3 className='font-medium text-xl text-sky-600 p-2'>Welcome</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        {({ isValid, isSubmitting, values }) => (
          <Form className='flex flex-col gap-2 items-center justify-center'>
            <div className='rounded-lg lg:rounded-lg relative text-center text-xs md:text-sm font-medium w-full'>
              <label
                htmlFor='name'
                className='absolute left-3.5 top-1 text-lime-800'
              >
                Name
              </label>
              {/* {console.log(values)} */}
              <Field
                type='text'
                id='name'
                name='name'
                className='w-full py-5 px-3 border-2 rounded-lg'
                placeholder='Enter Full Name'
              />
              <ErrorMessage
                name='name'
                component='div'
                className='text-rose-700 absolute bottom-1 left-3.5'
              />
            </div>

            <div className='rounded-lg relative text-center text-xs md:text-sm font-medium w-full'>
              <label
                htmlFor='email'
                className='absolute left-3.5 top-1 text-lime-800'
              >
                Email
              </label>
              <Field
                type='email'
                id='email'
                name='email'
                className='w-full py-5 px-3 border-2 rounded-lg'
                placeholder='Enter Email'
              />
              <ErrorMessage
                name='email'
                component='div'
                className='text-rose-700 absolute bottom-1 left-3.5'
              />
            </div>

            <div className='rounded-lg relative text-center text-xs md:text-sm font-medium w-full'>
              <label
                htmlFor='password'
                className='absolute left-3.5 top-1 text-lime-800'
              >
                Password
              </label>
              <Field
                type='password'
                id='password'
                name='password'
                className='w-full py-5 px-3 border-2 rounded-lg'
                placeholder='Enter Password'
              />
              <ErrorMessage
                name='password'
                component='div'
                className='text-rose-700 absolute bottom-1 left-3.5'
              />
            </div>

            <div className='rounded-lg relative text-center text-xs md:text-sm font-medium w-full'>
              <label
                htmlFor='confirmpassword'
                className='absolute left-3.5 top-1 text-lime-800'
              >
                Confirm Password
              </label>
              <Field
                type='password'
                id='confirmpassword'
                name='confirmpassword'
                className='w-full py-5 px-3 border-2 rounded-lg'
                placeholder='Confirm Password'
              />
              <ErrorMessage
                name='confirmpassword'
                component='div'
                className='text-rose-700 absolute bottom-1 left-3.5'
              />
            </div>

            <button
              type='submit'
              disabled={!isValid || isSubmitting}
              className='bg-lime-400 font-medium shadow-lime-900 disabled:bg-lime-100 disabled:text-gray-500 disabled:shadow-md p-2 rounded-lg border-2 border-lime-400 text-rose-500 hover:bg-lime-100 shadow-md hover:shadow-none transition-shadow'
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
