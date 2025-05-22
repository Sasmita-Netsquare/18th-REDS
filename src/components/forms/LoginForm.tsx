/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "../../features/hooks/useAuth";

// import { login } from "../../services/authService";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  remember: Yup.boolean(),
});

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (values: any) => {
    try {
      const res = await login({
        ...values,
      });

      // console.log(res);
      if (res?.payload?.success === true) return navigate("/dashboard");
    } catch (error: unknown) {
      // errorHelper(error);
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "", remember: false }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex-1 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="relative">
              <Field
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full bg-transparent border-b border-white border-opacity-50 placeholder-gray-300 text-white py-2 pr-10 focus:outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="relative">
              <Field
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full bg-transparent border-b border-white border-opacity-50 placeholder-gray-300 text-white py-2 pr-10 focus:outline-none"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-200">
              <label className="flex items-center space-x-2">
                <Field
                  type="checkbox"
                  name="remember"
                  className="form-checkbox h-4 w-4 text-yellow-300 bg-transparent border-gray-300 rounded"
                />
                <span>Remember Me</span>
              </label>
              <a href="#" className="hover:text-yellow-300">
                Forgot Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
