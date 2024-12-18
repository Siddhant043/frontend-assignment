import styles from "./navbar.module.css";
import LogoLight from "../../assets/logo-light.svg";
import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src={LogoLight} alt="SaaSLabs" width={40} />
      <a
        href="https://github.com/Siddhant043/saaslabs-assignment"
        target="_blank"
      >
        <BsGithub className={styles.icon} />
      </a>
    </div>
  );
};

export default Navbar;
