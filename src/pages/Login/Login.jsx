import {
  faCircleQuestion,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import { faClock, faLock, faStar, faTruck, faUsers } from "@fortawesome/free-solid-svg-icons";
import loginImage from "./../../assets/images/login-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { sendDataToSignIn } from "../../services/auth-service";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import { actions } from "../../app/token.slice";
import { useDispatch } from "react-redux";
import useScrollTop from "../../hooks/useScroll";

export default function Login() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{6,}$/;
  const [showPassword, setShowPassword] = useState(false);
  const [ifNotFound, setIfNotFound] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";
  const { setToken } = actions;
  const dispatch = useDispatch();
  useScrollTop();
  const schema = Yup.object({
    email: Yup.string().required("this field is required").matches(emailRegex, "invalid email"),
    password: Yup.string()
      .required("this field is required")
      .matches(passwordRegex, "invalid password"),
  });

  async function signin(values) {
    const loadingId = toast.loading("loading");
    setLoading(true);

    try {
      setIfNotFound(null);
      const response = await sendDataToSignIn(values);

      if (response.success) {
        toast.success("Welcome Back", { duration: 1000 });

        if (formik.values.rememberMe) {
          localStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.setItem("token", response.data.token);
        }

        dispatch(setToken());

        setTimeout(() => {
          navigate(from);
        }, 1000);
      }
    } catch (error) {
      setIfNotFound(error.message);
      toast.error(error.message, { duration: 1000 });
    } finally {
      toast.dismiss(loadingId);
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: signin,
    validationSchema: schema,
  });

  function handelChange(e) {
    setIfNotFound(false);
    formik.handleChange(e);
  }

  return (
    <>
      <PageMetaData title="Login" />
      <section className="bg-gray-100 py-6">
        <div className="container flex flex-col md:flex-row gap-10 items-center justify-center *:lg:flex-1 ">
          {/* right section */}
          <div className="text-center hidden lg:block">
            <div className="image rounded-lg overflow-hidden shadow-lg mb-7">
              <img src={loginImage} alt="" />
            </div>

            <h3 className="mb-3 text-black/85 font-bold text-22 ">Fresh Groceries Delivered</h3>

            <p className="text-gray-600/85 text-15 mb-3">
              Join thousands of happy customers who trust FreshCart for their daily grocery needs
            </p>

            <ul className="flex gap-5 text-12 justify-center capitalize text-gray-500 *:flex *:gap-1.5 *:items-center">
              <li>
                <FontAwesomeIcon className="text-primary-600" icon={faTruck} />
                <span>free delivery</span>
              </li>
              <li>
                <FontAwesomeIcon className="text-primary-600" icon={faCircleQuestion} />
                <span>secure payment</span>
              </li>
              <li>
                <FontAwesomeIcon className="text-primary-600" icon={faClock} />
                <span>24/7 support</span>
              </li>
            </ul>
          </div>

          {/* left section */}
          <div className="bg-white px-6 py-9 rounded-md shadow-lg">
            {/* top */}
            <div>
              <h1 className="text-3xl capitalize font-bold text-center mb-2 text-black/85">
                <span className="text-primary-600">Fresh</span>Cart
              </h1>
              <h2 className="text-black/85 text-2xl font-bold capitalize text-center mb-2">
                welcome back!
              </h2>
              <p className="text-gray-600 text-15 text-center mb-1">
                Signin to continue your fresh shopping experience
              </p>
              <div className="pt-5 flex flex-col gap-3 text-center capitalize font-semibold *:border *:border-gray-300 *:grow-1 *:py-2.5 *:rounded-md">
                <a
                  href=""
                  className="bg-white text-black/75 text-15 transition-all duration-200 hover:bg-gray-100"
                >
                  <FontAwesomeIcon icon={faGoogle} className="mr-2 text-lg text-[#ea4335] " />
                  continue with google
                </a>
                <a
                  href=""
                  className="bg-white text-black/75 text-15 transition-all duration-200 hover:bg-gray-100"
                >
                  <FontAwesomeIcon icon={faFacebook} className="mr-2 text-lg text-[#1877f2] " />
                  continue with facebook
                </a>
              </div>

              {/* separator */}
              <div className="h-[1px] bg-gray-100 my-8 flex items-center justify-center relative">
                <span className="bg-white rounded-full flex items-center justify-center text-gray-500 uppercase px-3 text-15">
                  OR continue with email
                </span>
              </div>
            </div>

            {/* middle */}
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              {ifNotFound && <p className="text-red-500 text-13">{ifNotFound}.</p>}

              <div>
                <label className="text-13 capitalize text-black/75 font-semibold" htmlFor="email">
                  email address *
                </label>
                <div className="relative">
                  <input
                    className="input mt-1 pl-9"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={handelChange}
                    onBlur={formik.handleBlur}
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute top-1/2 -translate-1/2 left-3.5 text-gray-400 flex pl-2 mt-0.5"
                  />
                </div>
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-600 pt-1 px-2 text-sm">{formik.errors.email}</p>
                )}
              </div>

              <div>
                <div className="flex justify-between mb-0.05">
                  <label className="text-13 capitalize text-black/75 font-semibold" htmlFor="pass">
                    password *
                  </label>
                  <Link
                    to="/forgotPassword"
                    className="text-primary-600/80 text-12 font-semibold transition-all duration-200 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    className="input mt-1 pl-9"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="pass"
                    autoComplete="true"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={handelChange}
                    onBlur={formik.handleBlur}
                  />
                  <FontAwesomeIcon
                    className="absolute top-1/2 -translate-1/2 right-1 cursor-pointer text-gray-400"
                    icon={showPassword ? faEye : faEyeSlash}
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faLock}
                    className="absolute top-1/2 -translate-1/2 left-3.5 text-gray-400 flex pl-2 mt-0.5"
                  />
                </div>
                {formik.errors.password && formik.touched.password && (
                  <p className="text-red-600 pt-1 px-2 text-sm">{formik.errors.password}</p>
                )}
              </div>

              <div className="flex gap-2 items-center text-13 text-gray-800 ">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  className="accent-primary-600"
                  value={formik.rememberMe}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="rememberMe">Keep me signed in</label>
              </div>

              <button
                type="submit"
                disabled={loading ? true : false}
                className="btn w-full text-white transition-all duration-200 bg-primary-600 text-15 hover:bg-primary-700 py-3 mb-7 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-primary-600"
              >
                Sign in
              </button>
            </form>

            {/* bottom */}
            <div className="py-5 border-t border-t-gray-200 text-gray-600 text-center text-15">
              New to FreshCart?
              <Link to="/signup" className="text-primary-600 ml-1 font-semibold hover:underline">
                Create an account
              </Link>
            </div>

            <ul className="flex gap-4 text-12 justify-center text-gray-500 *:flex *:gap-1 *:items-center">
              <li>
                <FontAwesomeIcon icon={faLock} />
                <span>SSL Secured</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faUsers} />
                <span>50K+ Users</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faStar} />
                <span>4.9 Rating</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
