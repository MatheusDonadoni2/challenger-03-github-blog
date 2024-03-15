import { Outlet } from "react-router-dom";

export function HeaderLayout() {
  return (
    <div className="antialiased">
      <div className="w-full h-[18.5rem] bg-red-500 flex justify-center items-center">
        GITHUB BLOG
      </div>

      <div className="max-w-[54rem] mx-auto px-6 mt-[-5.5rem] ">
        <Outlet />
        <div></div>
      </div>
    </div>
  );
}
