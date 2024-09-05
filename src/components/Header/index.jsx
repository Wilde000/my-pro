import { useLocation } from "react-router-dom";
import Basis from "../Hat/Basis";
import Notations from "../Hat/Notations";
import Instruments from "../Hat/Instruments";
const Header = () => {
  const location = useLocation();

  const prepareButtons = () => {
    if (location.pathname === "/") {
      return <Basis list={[1, 2, 3]} />;
    }

    if (location.pathname === "/directories") {
      return <Basis list={[1, 2, 3, 4, 5]} />;
    }
  };

  return (
    <header className="h-[150px] bg-[#2C517E] p-4 ">
      {prepareButtons()}
      <Notations/>
      <Instruments/>
    </header>
  );
};

export default Header;
