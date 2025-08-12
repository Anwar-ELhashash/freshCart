import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as yup from "yup";
import { resetPassword } from "../../services/auth-service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import useScrollTop from "../../hooks/useScroll";

export default function ResetPassword() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{6,}$/;
  const navigate = useNavigate();

  async function handelResetPassword({ email, newPassword }) {
    const loading = toast.loading("Loading...");
    try {
      const response = await resetPassword({ email, newPassword });
      if (response.success) {
        localStorage.setItem("token", response.data.token);
        toast.success("Success");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      toast.dismiss(loading);
    }
  }
  useScrollTop();
  const schema = yup.object({
    email: yup.string().required("Email is required").matches(emailRegex, "invalid email"),
    newPassword: yup
      .string()
      .required("Must write the password")
      .matches(
        passwordRegex,
        "Password must be at least 8 character, include at least one uppercase letter and lowercase letter, include at least one number, include at least one special character"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    onSubmit: handelResetPassword,
    validationSchema: schema,
  });

  return (
    <>
      <PageMetaData title="Reset Password" />
      <section className="bg-gray-50 py-15">
        <div className="container md:w-2/3 lg:w-1/2">
          <div className="space-y-4 border border-gray-200 rounded-md px-5 py-8 bg-white flex flex-col items-center">
            <div className="icon size-20 text-3xl">
              <FontAwesomeIcon icon={faKey} />
            </div>
            <h2 className="font-bold text-3xl">Reset account password</h2>
            <p className="text-gray-700">Write your email and the new password</p>

            <form className="w-full" onSubmit={formik.handleSubmit}>
              <p className="mb-2 text-gray-800 text-sm">Reset Password</p>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input mb-1"
                  placeholder="write your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <p className="text-red-600 text-sm mb-4">{formik.errors.email}</p>
              </div>

              <div>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  className="input mb-1"
                  placeholder="write new password"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <p className="text-red-600 text-sm mb-4">{formik.errors.newPassword}</p>
              </div>

              <button
                type="submit"
                className="btn bg-primary-600 hover:bg-primary-700 text-white w-full"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
