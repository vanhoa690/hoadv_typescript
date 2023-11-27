import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Sidebar } from "./Sidebar";

export default function AdminLayout() {
  return (
    <>
      <main>
        <div className="flex flex-row">
          <Sidebar />
          <div className="p-6">
            <Outlet />
          </div>
        </div>
        <ToastContainer />
      </main>
    </>
  );
}
