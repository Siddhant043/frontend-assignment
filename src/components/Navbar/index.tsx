import styles from "./navbar.module.css";
import { BsFillSunFill } from "react-icons/bs";
import LogoLight from "../../assets/logo-light.svg";

const Navbar = () => {
  const changeTheme = () => {};
  return (
    <div className={styles.container}>
      <img src={LogoLight} alt="SaaSLabs" width={40} />
      <BsFillSunFill
        className={styles.themeSwitchIcon}
        color="white"
        onClick={changeTheme}
      />
    </div>
  );
};

export default Navbar;
