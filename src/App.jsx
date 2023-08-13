import { Sidebar } from "./components/Sidebar";
// import { Login } from "./screens/Login";

// eslint-disable-next-line react/prop-types
export function App({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
