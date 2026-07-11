import Navbar from "@/components/modules/Navbar/Navbar";
import PageFooter from "@/components/modules/PageFooter/PageFooter";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <PageFooter/>
    </>
  )
}
