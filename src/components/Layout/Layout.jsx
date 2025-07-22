import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { actions } from "../../app/token.slice";
import { useEffect } from "react";

export default function Layout() {
  const { setToken } = actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToken());
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
