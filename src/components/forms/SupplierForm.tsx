import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { serviceOptions, whereDidYouHearAboutUsOptions } from "../../utils";
import CountrySelectCustom from "./CountrySelectCustom";

export default function SupplierForm() {
  const initialValues = {
    fullName: "",
    email: "",
    jobTitle: "",
    company: "",
    country: "",
    phone: "",
    mobile: "",
    interestLevel: "",
    category: "",
    source: "",
    attended: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    jobTitle: Yup.string().required("Required"),
    company: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    mobile: Yup.string().required("Required"),
    interestLevel: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    source: Yup.string().required("Required"),
    attended: Yup.string().required("Required"),
  });

  const onSubmit = (values: typeof initialValues,{ resetForm }: { resetForm: () => void }) => {
    console.log("Form submitted", values);
    resetForm();
  };

  return (
    <div className="mx-auto max-w-5xl mb-20">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {() => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 lg:gap-8">
              <div className="relative">
                <label htmlFor="fullName" className="font-bold">Full Name <span className="text-red-500">*</span></label>
                <Field name="fullName" className="mt-1 w-full p-2 rounded text-black bg-gray-100 focus:outline-none" placeholder="Full Name" />
                <ErrorMessage name="fullName" component="p" className="absolute text-red-500 text-sm -bottom-5" />
              </div>
              <div className="relative">
                <label htmlFor="email" className="font-bold">Email <span className="text-red-500">*</span></label>
                <Field name="email" type="email" className="mt-1 w-full p-2 rounded text-black bg-gray-100 focus:outline-none" placeholder="Email Address" />
                <ErrorMessage name="email" component="p" className="text-red-500 text-sm absolute -bottom-5" />
              </div>

              <div className="relative">
                <label htmlFor="jobTitle" className="font-bold">Job Title <span className="text-red-500">*</span></label>
                <Field name="jobTitle" className="mt-1 w-full p-2 rounded text-black bg-gray-100 focus:outline-none" />
                <ErrorMessage name="jobTitle" component="p" className="text-red-500 text-sm absolute -bottom-5" />
              </div>
              <div className="relative">
                <label htmlFor="company" className="font-bold">Company <span className="text-red-500">*</span></label>
                <Field name="company" className="mt-1 w-full p-2 rounded text-black bg-gray-100 focus:outline-none" />
                <ErrorMessage name="company" component="p" className="text-red-500 text-sm absolute -bottom-5" />
              </div>

              <CountrySelectCustom name="country" />

              <div className="relative">
                <label htmlFor="phone" className="font-bold">Phone Number <span className="text-red-500">*</span></label>
                <Field name="phone" className="mt-1 w-full p-2 rounded text-black bg-gray-100 focus:outline-none" />
                <ErrorMessage name="phone" component="p" className="text-red-500 text-sm absolute -bottom-5" />
              </div>

              <div className="relative">
                <label htmlFor="mobile" className="font-bold">Mobile Number <span className="text-red-500">*</span></label>
                <Field name="mobile" className="mt-1 w-full p-2 rounded text-black bg-gray-100 focus:outline-none" />
                <ErrorMessage name="mobile" component="p" className="text-red-500 text-sm absolute -bottom-5" />
              </div>
              <div className="relative">
                <label htmlFor="interestLevel" className="font-bold">Select Level of Interest <span className="text-red-500">*</span></label>
                <Field name="interestLevel" as="select" className="mt-1 w-full p-2 rounded text-black bg-gray-100 focus:outline-none">
                  <option value="">- Select -</option>
                  <option value="Exhibit-your-product">Exhibit your product</option>
                  <option value="Face-to-face-meeting">Face-to-face meeting</option>
                  <option value="Speaking-slot">Speaking slot</option>
                </Field>
                <ErrorMessage name="interestLevel" component="p" className="text-red-500 text-sm absolute -bottom-5" />
              </div>

              <div className="relative">
                <label htmlFor="category" className="font-bold">Select Category <span className="text-red-500">*</span></label>
                <Field name="category" as="select" className="mt-1 w-full p-2 rounded text-black bg-gray-100 focus:outline-none">
                  <option value="">- Select -</option>
                  {serviceOptions.map((item) => (
                  <option key={item.value} value={item.value} className="absolute h-20  ">
                    {item.label}
                  </option>
                ))}
                </Field>
                <ErrorMessage name="category" component="p" className="text-red-500 text-sm absolute -bottom-5" />
              </div>
              <div className="relative">
                <label htmlFor="source" className="font-bold">Where did you hear about us? <span className="text-red-500">*</span></label>
                <Field name="source" as="select" className="mt-1 w-full p-2 rounded text-black bg-gray-100 focus:outline-none">
                  <option value="">- Select -</option>
                   {whereDidYouHearAboutUsOptions.map((item) => (
                  <option key={item.value} value={item.value} className="absolute h-20  ">
                    {item.label}
                  </option>
                ))}
                </Field>
                <ErrorMessage name="source" component="p" className="text-red-500 text-sm absolute -bottom-5" />
              </div>
            </div>

            {/* Radio Buttons */}
            <div className="mt-4 relative">
              <p className="font-bold mb-2">Have you attended GBB Summits previously? <span className="text-red-500">*</span></p>
              <label className="mr-4">
                <Field type="radio" name="attended" value="Yes" className="mr-2" />
                Yes
              </label>
              <label>
                <Field type="radio" name="attended" value="No" className="mr-2" />
                No
              </label>
              <ErrorMessage name="attended" component="p" className="text-red-500 text-sm absolute -bottom-5 mt-1" />
            </div>

            <div className="text-center mt-6">
              <button type="submit" className="bg-yellow-500 text-black px-6 py-2 rounded font-semibold cursor-pointer">
                Submit Form
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
