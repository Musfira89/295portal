import Navbar from "../../../components/view/portalnavbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
