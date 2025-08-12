import { faChevronLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router";
import * as yup from "yup";
import { forgotPassword } from "../../services/auth-service";
import toast from "react-hot-toast";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import useScrollTop from "../../hooks/useScroll";

export default function ForgotPassword() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const navigate = useNavigate();
  useScrollTop();
  async function handelForgotPassword({ email }) {
    const loading = toast.loading("Loading...");
    try {
      const response = await forgotPassword({ email });
      if (response.success) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/verifyEmail");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      toast.dismiss(loading);
    }
  }

  const schema = yup.object({
    email: yup.string().required("Must write the email").matches(emailRegex),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: handelForgotPassword,
    validationSchema: schema,
  });

  return (
    <>
      <PageMetaData title="Forgot Password" />

      <section className="bg-gray-50 py-15">
        <div className="container md:w-2/3 lg:w-1/2">
          <div className="space-y-4 border border-gray-200 rounded-md p-5">
            <div className="space-y-1">
              <h1 className="text-xl font-bold">Forgot Password</h1>
              <p className="text-15 text-gray-600">
                Enter your email and we will send you a verify code
              </p>
            </div>

            <form className="space-y-2" onSubmit={formik.handleSubmit}>
              <div className="relative">
                <input
                  className="input ps-10"
                  type="email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute text-gray-600 left-3 top-1/2 -translate-y-1/2 "
                />
              </div>
              {/* {isError ? <p className="text-red-600 text-15">We can not find your email</p> : ""} */}
              <button type="submit" className="btn bg-primary-600 hover:bg-primary-700 w-full mt-5">
                Submit
              </button>
            </form>

            <Link to="/login" className="text-gray-600 block w-fit mx-auto hover:underline">
              <FontAwesomeIcon icon={faChevronLeft} className="mr-2 text-13" />
              Back to Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
