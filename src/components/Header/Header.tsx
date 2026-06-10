import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { cx } from "../../lib/utils";
import { Container } from "../primitives/Container";
import { navItems } from "../../content/navigation";
import { contactHref, meta } from "../../content/siteContent";

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <a href="#top" className={styles.wordmark} aria-label={`${meta.brand} — home`}>
          <span className={styles.mark} aria-hidden="true" />
          {meta.brand}
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href={contactHref} className={styles.cta}>
          Start a conversation
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">
            {open ? "Close menu" : "Open menu"}
          </span>
          <span className={cx(styles.burger, open && styles.burgerOpen)} aria-hidden="true" />
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cx(styles.mobileMenu, open && styles.mobileMenuOpen)}
        hidden={!open}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={contactHref}
            className={styles.mobileCta}
            onClick={() => setOpen(false)}
          >
            Start a conversation
          </a>
        </nav>
      </div>
    </header>
  );
}
