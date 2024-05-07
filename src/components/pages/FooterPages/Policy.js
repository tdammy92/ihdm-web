import React, { useEffect } from "react";

import { Container } from "@mui/material";
import Signature from "./Signature";
// import signature from "../../../Assets/Signature.png";
import PageHero from "../../Partials/Hero/PageHero";
import HeroImage from "../../../Assets/Policies.jpg";

import "../Page.css";
import "./FooterPage.css";

function Policy() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <PageHero
        img={HeroImage}
        title="PRIVACY POLICY"
        subtitle="Know about our policies"
      />

      <div className="page__Container">
        <section>
          <Container>
            <div>
              <h3 className="page__subtitle">PRIVACY POLICY</h3>

              <div className="career__container">
                <div className="career__items">
                  <p>
                    Institute of Humanitarian And Diaster Management values the
                    privacy of our users. Therefore, this privacy policy
                    explains in detail how we use and protect the information we
                    collect when you visit our www.ihdm.org.ng, as well as our
                    social media handles. Read this privacy policy completely.
                    Please refrain from visiting the site if the terms outlined
                    below are not satisfactory to you.
                  </p>
                  <p>
                    We reserve the right to change this policy at any time and
                    will list these changes in the updates section of the
                    policy. By reading this notice and visiting the site, you
                    agree that you understand that customers will not be
                    personally notified when this policy changes.
                  </p>
                  <p>
                    Therefore, we advise our customers to frequently review our
                    privacy policy so that they remain aware of its updates. By
                    using the site, you accept that the posted policy and all
                    its changes apply to your interaction with IHDM.
                  </p>
                  {/* <div className="career__items__list">
                   
                  </div> */}
                </div>

                <div className="career__items">
                  <h4>Information Collected by IHDM</h4>
                  <p>
                    Personal information may be collected by this site in many
                    ways. This information includes:
                  </p>

                  <ol>
                    <li>
                      Personal identifying information like your name, address,
                      email, phone number, age, gender, and other personal data
                    </li>
                    <li>
                      Server data related to the IP address you used to visit
                      our website which includes your address, browser, OS,
                      access time, and site activity.
                    </li>
                    <li>
                      Financial information related to your orders including
                      your payment method and identifying payment information.
                      We rarely store financial information collected on our
                      site for transaction purposes. That information gets sent
                      directly to our payment processor, (Flutterwave or
                      paystack)
                    </li>
                    <li>
                      Social network data including Facebook permissions and
                      user information from other networks, provided you log
                      onto our site using one of these media sites.
                    </li>
                    <li>
                      Mobile device information such as your device ID, model,
                      and location, if you use our site by accessing it through
                      our mobile app.
                    </li>
                  </ol>
                </div>
                <div className="career__items">
                  <h4>How We Use This Information </h4>
                  <p>Our www.ihdm.org.ng uses information collected to:</p>

                  <ul>
                    <li>Manage your account information</li>
                    <li>Customize ads</li>
                    <li>Deliver promotions</li>
                    <li>Email your account confirmation</li>
                    <li>Manage purchases and payments</li>
                    <li>Increase site efficiency</li>
                    <li>Notify you of updates</li>
                    <li>Offer new products</li>
                    <li>Monitor and prevent theft</li>
                    <li>Request your customer feedback</li>
                    <li>Resolve account disputes</li>
                    <li>Respond to your service requests</li>
                  </ul>
                </div>
                <div className="career__items">
                  <h4>Information Disclosure </h4>
                  <p>
                    Normally, your information stays on our site. However, below
                    we have listed the situations that may require us to share
                    the information we collect from you:
                  </p>

                  <ul>
                    <li>When required by law, such as for fraud protection</li>
                    <li>
                      With our third-party providers for payment processing and
                      hosting
                    </li>
                    <li>With your consent for marketing purposes</li>
                    <li>When you post comments on the site</li>
                    <li>To our advertisers, affiliates, and partners</li>
                    <li>
                      If this site goes bankrupt and data must be transferred
                    </li>
                  </ul>
                </div>
                <div className="career__items">
                  <h4>Cookies, Trackers, and Online Ads</h4>
                  <p>
                    We may use cookies, trackers, web beacons, and other
                    technology to customize our Website to improve your
                    experience. We may customize the site using this
                    information. These trackers do not have access to your
                    personal information and can be removed from your browser
                    options.
                  </p>

                  <p>
                    In addition, third-party software provides ads for our site
                    for marketing campaigns. These programs have access to
                    tracking technology to optimize your ad experience. For more
                    information about these ads. Website analytics, we do not
                    give these vendors access to your personal information.
                  </p>
                </div>
                <div className="career__items">
                  <h4>Other Sites</h4>
                  <p>
                    Our website may contain links to third-party websites in the
                    form of policies, ads, and other non- affiliated links. Once
                    you leave our site, we are no longer responsible for how
                    your information is collected and disclosed. Please refer to
                    the privacy policies of those third-party sites for more
                    information.
                  </p>
                </div>
                <div className="career__items">
                  <h4>Information Security</h4>
                  <p>
                    We take technical and administrative precautions to protect
                    your data, but we cannot guarantee its safety against all
                    types of fraud or misuse. If you provide personal
                    information, we cannot verify its total security against all
                    types of interception.
                  </p>
                </div>
                <div className="career__items">
                  <h4>Do-Not-Track</h4>
                  <p>
                    Some browsers offer Do-Not-Track settings to prevent any
                    information from being distributed. Since these settings
                    have not been legally established as standard practice, we
                    do/do not acknowledge these settings.
                  </p>
                </div>
                <div className="career__items">
                  <h4>Additional Options</h4>
                  <p>
                    At any time, you may opt to review or change your account
                    settings, including contact information. If you wish to
                    delete your account, you may do so to remove most of your
                    information, however, some identifying information will be
                    retained to prevent fraud. You may also opt-out of emails
                    and other correspondences from our site at any time.
                  </p>
                </div>
                <div className="career__items">
                  <h4>Nigeria's Privacy Rights</h4>
                  <p>
                    <i>
                      Enumerate your state’s privacy codes and any permits,
                      legal age limits, or associated information necessary for
                      people in your specific jurisdiction.
                    </i>
                  </p>
                </div>
                <div className="career__items">
                  <h4>Contact Us</h4>
                  <p>
                    If you have questions or concerns about this privacy policy,
                    please feel free to contact us at: 2nd Floor, Suite 311,
                    Beta Foundation Plaza, Plot 359, Ebitu Ukiwe Street, Jabi
                    Abuja. Email us at info@igpcm.com.ng or call us on
                    +2347033458730 or chat us on WhatsApp via +2348077987757.
                  </p>
                </div>
                <Signature/>
               
             
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Policy;
