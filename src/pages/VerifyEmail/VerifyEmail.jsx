import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { verifyResetCode } from "../../services/auth-service";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import useScrollTop from "../../hooks/useScroll";

export default function VerifyEmail() {
  const navigate = useNavigate();
  useScrollTop();
  async function handelVerifyResetCode({ resetCode }) {
    const loading = toast.loading("loading...");
    try {
      const response = await verifyResetCode({ resetCode });
      if (response.success) {
        toast.success(response.data.status);
        setTimeout(() => {
          navigate("/resetPassword");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      toast.dismiss(loading);
    }
  }

  const formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    onSubmit: handelVerifyResetCode,
  });

  return (
    <>
      <PageMetaData title="Verify Email" />
      <section className="py-15">
        <div className="container md:w-2/3 lg:w-1/2">
          <div className="space-y-5 border border-gray-200 rounded-md p-4 flex flex-col items-center">
            <div className="icon size-18 text-3xl">
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </div>

            <div className="text-center space-y-1">
              <h2 className="font-bold text-2xl text-black mb-3">Verify your email</h2>
              <p className="text-gray-600">We've sent a verification code to your email address</p>
              <p className="text-gray-600">Please enter the code below to verify your account</p>
            </div>

            <form className="w-full" onSubmit={formik.handleSubmit}>
              <p className="mb-2 text-gray-800 text-sm">Verification Code</p>
              <input
                type="password"
                name="resetCode"
                id="resetCode"
                className="input mb-4"
                value={formik.values.resetCode}
                onChange={formik.handleChange}
              />
              <button
                type="submit"
                className="btn bg-primary-600 hover:bg-primary-700 text-white w-full"
              >
                Verify Email
              </button>
            </form>

            <div>
              <p className="text-gray-700 mb-1">Didn't receive the code?</p>
              <Link
                to="/forgotPassword"
                className="transition-all duration-200 block w-fit mx-auto text-primary-600 hover:underline hover:text-primary-700"
              >
                Resend Code
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
