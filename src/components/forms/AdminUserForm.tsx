/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-escape */
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  type FormikHelpers,
  useFormikContext,
} from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

interface AdminUserFormValues {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
  role: string;
  event: string;
}

const initialValues: AdminUserFormValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  phone: "",
  role: "",
  event: "",
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
    .oneOf(["admin", "superadmin"], "Invalid role")
    .required("Required"),
  event: Yup.string().when("role", ([role], schema) => {
    return role !== "superadmin"
      ? schema.required("Required")
      : schema.notRequired();
  }),
});

const FormObserver = () => {
  const { values, setFieldValue } = useFormikContext<AdminUserFormValues>();

  useEffect(() => {
    if (values.role === "superadmin") {
      setFieldValue("event", "");
    }
  }, [values.role, setFieldValue]);

  return null;
};

const AdminUserForm = () => {
  const handleSubmit = (
    values: AdminUserFormValues,
    actions: FormikHelpers<AdminUserFormValues>
  ) => {
    console.log("Form Submitted:", values);

    setTimeout(() => {
      actions.setSubmitting(false);
      actions.resetForm();
      // alert("User added successfully!");
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
        {({ isSubmitting, values }) => {
          const isSuperAdmin = values.role === "superadmin";

          return (
            <Form className="flex flex-col gap-5">
              <FormObserver />

              {/* First Name */}
              <div className="text-sm">
                <Field
                  id="first_name"
                  name="first_name"
                  type="text"
                  className="w-full border-b p-1 focus:outline-none border-gray-400"
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
                  className="w-full border-b p-1 focus:outline-none border-gray-400"
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
                  className="w-full border-b p-1 focus:outline-none border-gray-400"
                  placeholder="Email*"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-xs mt-1"
                />
              </div>

              {/* Password */}
              <div className="text-sm">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="w-full border-b p-1 focus:outline-none border-gray-400"
                  placeholder="Password*"
                />
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
                  className="w-full border-b p-1 focus:outline-none border-gray-400"
                >
                  <option value="" disabled>
                    Select role
                  </option>
                  <option value="superadmin">Super Admin</option>
                  <option value="admin">Admin</option>
                </Field>
                <ErrorMessage
                  name="role"
                  component="div"
                  className="text-red-600 text-xs mt-1"
                />
              </div>

              {/* Event */}
              <div className="text-sm">
                <Field
                  as="select"
                  id="event"
                  name="event"
                  className="w-full border-b p-1 focus:outline-none border-gray-400"
                  disabled={isSuperAdmin}
                >
                  <option value="" disabled>
                    Select Event
                  </option>
                  <option value="cloud">Cloud & DevOps</option>
                  <option value="aws">AWS-Inspired</option>
                  <option value="security">Security & Networking</option>
                </Field>
                <ErrorMessage
                  name="event"
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
                  className="w-full border-b p-1 focus:outline-none border-gray-400"
                  placeholder="Phone*"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600 text-xs mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white py-2 px-4 rounded uppercase text-xs font-semibold"
                >
                  {isSubmitting ? "Saving..." : "Save User"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AdminUserForm;
