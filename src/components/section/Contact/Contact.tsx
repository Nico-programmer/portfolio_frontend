import Section from "../../UI/Section/Section";
import Container from "../../UI/Container/Container";

import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

import FadeUp from "../../UI/Animation/FadeUp";

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <FadeUp>

          <div className="space-y-20">

            <ContactHeader />

            <div
              className="
                grid
                gap-10
                lg:grid-cols-[380px_1fr]
              "
            >

              <ContactInfo />

              <ContactForm />

            </div>

          </div>
        </FadeUp>
      </Container>
    </Section>
  );
};

export default Contact;