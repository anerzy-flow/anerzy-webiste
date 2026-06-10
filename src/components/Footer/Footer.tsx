import styles from "./Footer.module.css";
import { Container } from "../primitives/Container";
import { navItems } from "../../content/navigation";
import { contactHref, meta } from "../../content/siteContent";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.brandBlock}>
          <a href="#top" className={styles.wordmark}>
            <span className={styles.mark} aria-hidden="true" />
            {meta.brand}
          </a>
          <p className={styles.tagline}>{meta.tagline}</p>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.contact}>
          <a href={contactHref} className={styles.contactLink}>
            {meta.contactEmail}
          </a>
        </div>
      </Container>

      <Container className={styles.legal}>
        <p>This is a concept site exploring an idea — not a finished product.</p>
      </Container>
    </footer>
  );
}
