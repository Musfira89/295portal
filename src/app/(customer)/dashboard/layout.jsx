import Navbar from "../../../components/view/customernavbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
