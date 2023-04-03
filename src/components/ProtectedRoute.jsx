import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "./Layout";
export function ProtectedRoute({ session, children }) {
  if (!session) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
}
