/* eslint-disable no-useless-escape */
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as Yup from "yup";

interface AdminUserFormValues {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
  role: string;
}

const initialValues: AdminUserFormValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  phone: "",
  role: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(/^\+?[0-9\s\-]{7,15}$/, "Invalid phone number")
    .required("Required"),
  role: Yup.string()
    .oneOf(["admin", "user", "manager"], "Invalid role")
    .required("Required"),
});

const AdminUserForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (
    values: AdminUserFormValues,
    actions: FormikHelpers<AdminUserFormValues>
  ) => {
    // You can replace this with your API call or other logic
    console.log("Form Submitted:", values);

    // Simulate API delay
    setTimeout(() => {
      actions.setSubmitting(false);
      actions.resetForm();
      alert("User added successfully!");
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-gray-500 font-semibold">ADD ADMIN USER</div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-5">
            {/* First Name */}
            <div className="text-sm">
              <Field
                id="first_name"
                name="first_name"
                type="text"
                className="w-full border-b p-1 focus:outline-none focus:ring-0 border-gray-400"
                placeholder="First Name*"
              />
              <ErrorMessage
                name="first_name"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            {/* Last Name */}
            <div className="text-sm">
              <Field
                id="last_name"
                name="last_name"
                type="text"
                className="w-full border-b p-1 focus:outline-none focus:ring-0 border-gray-400"
                placeholder="Last Name*"
              />
              <ErrorMessage
                name="last_name"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            {/* Email */}
            <div className="text-sm">
              <Field
                id="email"
                name="email"
                type="email"
                className="w-full border-b p-1 focus:outline-none focus:ring-0 border-gray-400"
                placeholder="Email*"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            {/* Password */}
            <div className="text-sm relative">
              <Field
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full border-b p-1 focus:outline-none focus:ring-0 border-gray-400"
                placeholder="Password*"
              />
              <div
                className="absolute right-3 top-2 cursor-pointer text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            {/* Role */}
            <div className="text-sm">
              <Field
                as="select"
                id="role"
                name="role"
                className="w-full border-b p-1 focus:outline-none focus:ring-0 border-gray-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select role
                </option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="manager">Manager</option>
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            {/* Event Name */}
            <div className="text-sm">
              <Field
                as="select"
                id="event_name"
                name="event_name"
                className="w-full border-b p-1 focus:outline-none focus:ring-0 border-gray-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Event Name
                </option>
                <option value="cloud">Cloud & DevOps</option>
                <option value="aws">AWS-Inspired</option>
                <option value="security">Security & Networking</option>
              </Field>
              <ErrorMessage
                name="event_name"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            {/* Phone */}
            <div className="text-sm">
              <Field
                id="phone"
                name="phone"
                type="text"
                className="w-full border-b p-1 focus:outline-none focus:ring-0 border-gray-400"
                placeholder="Phone*"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-4 flex justify-center items-center w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white py-2 px-4 rounded uppercase text-xs cursor-pointer font-semibold"
              >
                {isSubmitting ? "Saving..." : "Save User"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminUserForm;
