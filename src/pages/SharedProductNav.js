import { Outlet } from "react-router-dom";

const SharedProductNav = () => {
  return (
    <>
      <h2>Products</h2>
      <Outlet />
    </>
  );
};

export default SharedProductNav;
