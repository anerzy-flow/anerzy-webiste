import styles from "./CTASection.module.css";
import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Button } from "../primitives/Button";
import { contactHref, cta } from "../../content/siteContent";

export function CTASection() {
  return (
    <Section id="contact" tone="dark">
      <Reveal>
        <div className={styles.inner}>
          <h2 className={styles.headline}>{cta.headline}</h2>
          <p className={styles.text}>{cta.text}</p>
          <div className={styles.action}>
            <Button href={contactHref} variant="primary" className={styles.button}>
              {cta.primaryCta}
            </Button>
          </div>
          <p className={styles.secondary}>{cta.secondaryText}</p>
        </div>
      </Reveal>
    </Section>
  );
}
