import React, { useEffect } from "react";

import { Container } from "@mui/material";
import Signature from "./Signature";
// import signature from "../../../Assets/Signature.png";
import PageHero from "../../Partials/Hero/PageHero";
import HeroImage from "../../../Assets/TermsandC.jpg";

import "../Page.css";
import "./FooterPage.css";

function TermsandC() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <PageHero
        img={HeroImage}
        title="TERMS AND CONDITIONS "
        subtitle="Terms and Conditions / Refund Policy"
      />

      <div className="page__Container">
        <section>
          <Container>
            <div>
              <h3 className="page__subtitle">
                PTERMS AND CONDITIONS OR REFUND POLICY
              </h3>

              <div className="career__container">
                <div className="career__items">
                  <p>
                    Thank you for subscribing to our services on www.ihdm.org.ng
                    or our social media handles operated by the Institute of
                    Humanitarian and Disaster Management.
                  </p>
                  <p>
                    We offer full or partial refund on all purchases made via
                    our website or social media handles. But under certain
                    conditions, we encourage you to read through the conditions
                    explained in more details below, in order to see the
                    conditions that applies to your situation while following
                    the right procedure.
                  </p>
                  <p>
                    If you are unhappy with the service or product you purchased
                    from us, please let's know. Our refund policy gives you 30
                    days to request for refund with the valid receipt of the
                    service purchased.
                  </p>
                  <p>
                    After the specified 30 Days, we will not offer you a refund
                    or exchange. We encourage our clients to carry out adequate
                    research on the service they want to purchase and try it
                    within the stipulated period given after purchased. In
                    situation whereby, you subscribed to a training program, it
                    commencement was delayed beyond 30 days from the date you
                    subscribed, adequate consideration will be given to affected
                    persons as it regards refund.
                  </p>

                  <p>
                    Note that, if you have subscribed to any of our training
                    programs and you want to discontinue when the training has
                    not started, you will get a full refund except the
                    application fee.
                  </p>

                  <p>
                    In a situation whereby the training has commenced, whether
                    you participated or not, only 50% of the amount paid will be
                    refunded, this excludes the application fee. Refund that we
                    require us to pay any charges, the client will shoulder the
                    responsibility for the said charges.
                  </p>

                  <p>
                    International and domestic participants subscribing for our
                    programs through online payment platforms, will be
                    responsible for the service charge as stipulated by the
                    fintech company.
                  </p>

                  <p>
                    In a situation whereby, your payment has not been confirmed
                    by our bank or receiving agent and you have been debited,
                    you will be required to visit your bank for appropriate
                    reversal.
                  </p>

                  <p>
                    You can request for a refund by sending a request to
                    ihdminfo02@gmail.com or chat us on WhatsApp through
                    08077987757.
                  </p>
                </div>

                <Signature />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default TermsandC;
