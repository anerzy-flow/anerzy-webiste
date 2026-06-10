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

      <Reveal delay={0.08}>
        <div className={styles.whoWeAre}>
          <h3 className={styles.whoTitle}>{cta.whoWeAre.title}</h3>
          <div className={styles.people}>
            {cta.whoWeAre.people.map((person) => (
              <div key={person.name} className={styles.person}>
                <p className={styles.personName}>{person.name}</p>
                <p className={styles.personLine}>{person.line}</p>
              </div>
            ))}
          </div>
          <p className={styles.whoNote}>{cta.whoWeAre.note}</p>
        </div>
      </Reveal>
    </Section>
  );
}
