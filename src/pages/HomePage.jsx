import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import QRcodeBlock from "../components/qrcode/QRcodeBlock";
import SearchBlock from "../components/SearchBlock/SearchBlock";

const HomePage = () => {
  return (
    <>
      <Header />
      <QRcodeBlock />
      <SearchBlock />
      <Footer />
    </>
  );
};

export default HomePage;
