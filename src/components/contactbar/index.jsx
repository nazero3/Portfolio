import styles from "./styles.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function contactbar() {
  return (
    <div className={styles.contact_bar_wrapper}>
      <div className={styles.contact_bar}>
        <a
          href="https://www.linkedin.com/in/nezir-ayd%C4%B1n-363364b5/"
          target="https://www.linkedin.com/in/nezir-ayd%C4%B1n-363364b5/"
          className={styles.icon}
        >
          <LinkedInIcon />
        </a>
        <a href="https://github.com/nazero3" target="https://github.com/nazero3" className={styles.icon}>
          <GitHubIcon />
        </a>
        <div className={styles.line}></div>
      </div>
      <div className={styles.contact_bar}>
        <a href="mailto:nazerrabah1994@gmail.com" className={styles.email}>
          nazerrabah1994@gmail.com
        </a>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default contactbar;
