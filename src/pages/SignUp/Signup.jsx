import {
  faClockRotateLeft,
  faLeaf,
  faShieldHalved,
  faStar,
  faTag,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import review from "./../../assets/images/review-author.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { sendDataToSignUp } from "../../services/auth-service";
import { checkPasswordStrength } from "../../utils/validation";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import useScrollTop from "../../hooks/useScroll";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [ifEmailExist, setIfEmailExist] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{6,}$/;
  const egyptianPhoneRegex = /^(01)[0125][0-9]{8}$/;
  useScrollTop();
  const schema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name should be at least 3 characters")
      .max(20, "Name should not be more than 20 characters"),
    email: Yup.string().required("Email is required").matches(emailRegex, "Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 character, include at least one uppercase letter and lowercase letter, include at least one number, include at least one special character"
      ),
    rePassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Password and confirm-password must be same"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(egyptianPhoneRegex, "Phone must be egyptian number"),
    terms: Yup.boolean().required().oneOf([true], "Must agree our terms and policy"),
  });

  async function signup(values) {
    const loadingId = toast.loading("loading");
    setLoading(true);
    try {
      setIfEmailExist(null);
      const response = await sendDataToSignUp(values);
      if (response.success) {
        toast.success(response.data.message, { duration: 1000 });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      setIfEmailExist(error.message);
      toast.error(error.message, { duration: 1000 });
    } finally {
      toast.dismiss(loadingId);
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    validationSchema: schema,
    onSubmit: signup,
  });

  const passwordFeedBack = checkPasswordStrength(formik.values.password);

  return (
    <>
      <PageMetaData title="Signup" />
      <section className="bg-gray-100 py-6">
        <div className="container flex flex-col md:flex-row gap-10 md:items-center *:flex-1">
          {/* right section */}
          <div className="space-y-2 text-center md:text-start">
            {/* top */}
            <div>
              <h1 className="text-black/80 text-3xl font-bold mb-2">
                Welcome to <span className="text-primary-700">FreshCart</span>
              </h1>
              <p className="text-gray-600 text-15">
                Join thousands of happy customers who enjoy fresh groceries delivered right to their
                doorstep
              </p>
            </div>

            {/* middle */}
            <div className="space-y-10 md:space-y-5 py-3 mb-10 md:mb-3 *:flex *:items-center *:gap-4 *:flex-col *:md:flex-row">
              <div>
                <div className="icon">
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <div>
                  <h3 className="font-semibold capitalize text-black/80">fresh & organic</h3>
                  <p className="text-gray-600 text-15">
                    Premium quality products sourced directly from farms
                  </p>
                </div>
              </div>

              <div>
                <div className="icon">
                  <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <div>
                  <h3 className="font-semibold capitalize text-black/80">fast delivery</h3>
                  <p className="text-gray-600 text-15">Same-day delivery available in most areas</p>
                </div>
              </div>

              <div>
                <div className="icon">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <div>
                  <h3 className="font-semibold capitalize text-black/80">secure shopping</h3>
                  <p className="text-gray-600 text-15">
                    Your data and payment are completely secure
                  </p>
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className="bg-white p-4 rounded-md border border-gray-100 shadow">
              <div className="flex items-center gap-4 mb-4">
                <img src={review} className="w-13" alt="" />
                <div>
                  <p className="capitalize font-semibold text-black/80">sarah johnson</p>
                  <ul className="flex gap-0.5 text-13 text-yellow-400">
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                  </ul>
                </div>
              </div>
              <blockquote className="text-gray-600 italic text-15">
                "FreshCart has completely changed how i shop for groceries. The quality is amazing
                and delivery is always on time!"
              </blockquote>
            </div>
          </div>

          {/* left section */}
          <div className="bg-white p-6 rounded-md shadow-lg">
            {/* top */}
            <div>
              <div className="text-center">
                <h2 className="text-2xl capitalize font-bold mb-1">create your account</h2>
                <p className="text-gray-600 text-sm md:text-[16px]">
                  Start your fresh journey with us today
                </p>
              </div>

              {/* buttons */}
              <div className="py-5 lg:py-8 flex flex-col lg:flex-row gap-3 text-center capitalize font-semibold text-15 text-black/85 *:border *:border-gray-200 *:py-2 *:rounded-md *:grow-1">
                <button className="bg-white transition-all duration-200 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faGoogle} className="mr-2 text-lg text-[#ea4335] " />
                  google
                </button>
                <button className="bg-white transition-all duration-200 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faFacebook} className="mr-2 text-lg text-[#1877f2] " />
                  facebook
                </button>
              </div>

              {/* separator */}
              <div className="h-[1px] bg-gray-200 mb-8 flex items-center justify-center relative">
                <span className="bg-white size-4 rounded-full flex items-center justify-center text-gray-600 p-5 text-15">
                  OR
                </span>
              </div>
            </div>

            {/* middle => from*/}
            <form className="space-y-3.5" onSubmit={formik.handleSubmit}>
              {ifEmailExist && (
                <h4 className="text-red-500 font-semibold text-13">{ifEmailExist}</h4>
              )}
              <div>
                <label className="capitalize text-15 text-black/80 font-medium" htmlFor="name">
                  user name *
                </label>
                <input
                  className="input mt-1"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="text-red-600 pt-1 text-13">{formik.errors.name}</p>
                )}
              </div>

              <div>
                <label className="capitalize text-15 text-black/80 font-medium" htmlFor="email">
                  email address *
                </label>
                <input
                  className="input mt-1"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john.doe@email.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-600 pt-1 text-13">{formik.errors.email}</p>
                )}
              </div>

              <div>
                <label className="capitalize text-15 text-black/80 font-medium" htmlFor="tel">
                  phone number *
                </label>
                <input
                  className="input mt-1"
                  type="tel"
                  name="phone"
                  id="tel"
                  placeholder="01213453508"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p className="text-red-600 pt-1 text-13">{formik.errors.phone}</p>
                )}
              </div>

              <div>
                <div>
                  <label className="capitalize text-15 text-black/80 font-medium" htmlFor="pass">
                    password *
                  </label>
                  <div className="relative">
                    <input
                      className="input mt-1"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="pass"
                      autoComplete="true"
                      placeholder="Create Strong Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FontAwesomeIcon
                      className="absolute top-1/2 -translate-1/2 right-1 cursor-pointer"
                      icon={showPassword ? faEye : faEyeSlash}
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    />
                  </div>
                  {formik.errors.password && formik.touched.password ? (
                    <p className="text-red-600 pt-1 text-13">{formik.errors.password}</p>
                  ) : (
                    <p className="text-gray-500 pt-1 text-13">
                      Must be at least 8 characters with number and symbols
                    </p>
                  )}
                </div>

                {/* password strength */}
                {formik.values.password && (
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-full rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className={`h-full ${passwordFeedBack.width} ${passwordFeedBack.background} `}
                      ></div>
                    </div>
                    <span
                      className={`text-13 text-center text-nowrap w-24 capitalize ${passwordFeedBack.textColor}`}
                    >
                      {passwordFeedBack.text}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <label className="capitalize text-15 text-black/80 font-medium" htmlFor="rePass">
                  confirm password *
                </label>
                <div className="relative">
                  <input
                    className="input mt-1"
                    type={showRePassword ? "text" : "password"}
                    name="rePassword"
                    id="rePass"
                    autoComplete="true"
                    placeholder="Confirm Strong Password"
                    value={formik.values.rePassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FontAwesomeIcon
                    className="absolute top-1/2 -translate-1/2 right-1 cursor-pointer"
                    icon={showRePassword ? faEye : faEyeSlash}
                    onClick={() => {
                      setShowRePassword(!showRePassword);
                    }}
                  />
                </div>
                {formik.errors.rePassword && formik.touched.rePassword && (
                  <p className="text-red-600 pt-1 text-13">{formik.errors.rePassword}</p>
                )}
              </div>

              <div>
                <div className="flex gap-2 items-baseline text-sm text-gray-800">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="accent-primary-600"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="terms">
                    I agree to the{" "}
                    <Link className="text-primary-600 capitalize hover:underline" to="/service">
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link className="text-primary-600 capitalize hover:underline" to="/privacy">
                      privacy policy
                    </Link>{" "}
                    *
                  </label>
                </div>
                {formik.errors.terms && formik.touched.terms && (
                  <p className="text-red-600 pt-1 text-13">{formik.errors.terms}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading ? true : false}
                className="btn w-full text-white text-15 transition-all duration-200 bg-primary-600 hover:bg-primary-700 py-3 mb-6 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-primary-600"
              >
                <FontAwesomeIcon icon={faUserPlus} className="mr-3" />
                create my account
              </button>
            </form>

            {/* bottom */}
            <div className="pt-3 border-t border-t-gray-200 text-gray-600 text-center text-15">
              Already have an account?
              <Link
                to="/login"
                className="capitalize text-primary-600 ml-1 font-semibold hover:underline"
              >
                signin
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-b-gray-200">
        <div className="container text-center py-12">
          <h2 className="font-semibold text-[22px] capitalize mb-10">
            why create an account with freshCart?
          </h2>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col items-center gap-2">
              <div className="icon">
                <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <h4 className="font-semibold capitalize text-lg">faster checkout</h4>
              <p className="text-gray-600 text-15">
                Save your delivery information for a quicker shopping experience.
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="icon">
                <FontAwesomeIcon icon={faTag} />
              </div>
              <h4 className="font-semibold capitalize text-lg">exclusive details</h4>
              <p className="text-gray-600 text-15">
                get access to member-only discount and early sale notifications.
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="icon">
                <FontAwesomeIcon icon={faClockRotateLeft} />
              </div>
              <h4 className="font-semibold capitalize text-lg">order history</h4>
              <p className="text-gray-600 text-15">
                easily track and reorder your favorite products from past purchases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
