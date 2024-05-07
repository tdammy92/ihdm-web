import React, { useEffect } from "react";

import { Container } from "@mui/material";
import Signature from "./Signature";
import PageHero from "../../Partials/Hero/PageHero";

import HeroImage from "../../../Assets/MoneyLaundry.jpg";

import "../Page.css";
import "./FooterPage.css";

function MoneyLaundry() {
  useEffect(() => {
  	window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHero
        img={HeroImage}
        title="ANTI-MONEY LAUNDERING POLICY"
        subtitle="Anti-Money Laundry Policy"
      />

      <div className="page__Container">
        <section>
          <Container>
            <div>
              <h3 className="page__subtitle">
                ANTI-MONEY LAUNDERING POLICY AND PROCEDURE
              </h3>

              <div className="career__container">
                <div className="career__items">
                  <h4>INTRODUCTION</h4>
                  <p>
                    Institute of Humanitarian and Disaster Management, Nigeria,
                    a not for profit institution, recognizes the importance of
                    preventing money laundering and terrorism financing and is
                    committed to the highest standards of Anti-Money Laundering
                    and Combating Terrorist Financing in Nigeria. The Institute,
                    as a designated non-financial institution (DNFI), is subject
                    to applicable legislation designed to prevent Money
                    Laundering. This legislation includes: Terrorism Prevention
                    Act2103, Money Laundering Prohibition Act, 2011 (as amended)
                    and others.
                  </p>
                  <p>
                    To fulfil this commitment, The Institute has established
                    internal policies and procedures. This Policy establishes
                    standards which every employee, donor and business partner
                    of institute is to observe.
                  </p>
                </div>

                <div className="career__items">
                  <h4>1.1 Scope</h4>
                  <p>
                    Money Laundering is the process of any activity by which
                    criminally obtained money or other assets (criminal
                    property) are exchanged for “clean” money or other assets
                    with no obvious link to their criminal origins.
                  </p>

                  <p>
                    Criminal proceeds may take any form, including money or
                    money’s worth, securities, tangible property and intangible
                    property. Terrorism Financing is defined as providing,
                    depositing, distributing or collection funds, directly or
                    indirectly, intended to be used, or knowing that these funds
                    are to be wholly or partially use, for the committing of
                    terrorist acts.
                  </p>

                  <p>
                    This Policy is aimed to prevent any organization or
                    individual from using the Institute for money laundering or
                    terrorist financing activities.
                  </p>
                </div>
                <div className="career__items">
                  <h4>1.2 Our Policy</h4>
                  <strong>Customer Due Diligence</strong>
                  <p>
                    To prevent Money Laundering, Institute will implement
                    processes and procedures in its Line of Businesses (LOBs) to
                    conduct appropriate customer due diligence through the
                    Institute partner Screening Questionnaire, trainees or
                    membership application form, identifying the customer and
                    verifying the customer’s identity on the basis of the
                    following “Know Your Customer” principles:
                  </p>

                  <ul>
                    <li>
                      Customer provided documentation (Verification Checking);
                    </li>
                    <li>
                      Information on the customer obtained from reliable and
                      independent sources (Ownership Checking);
                    </li>
                    <li>
                      Compliance with the Institute Code of Conducts. Unusual
                      activity during the customer due diligence process or
                      customer engagement should be reported immediately to the
                      designated person.
                    </li>
                  </ul>
                </div>
                <div className="career__items">
                  <h4>1.3 Risk-Based Approach</h4>
                  <p>
                    For Institute, the threat of being involved in money
                    laundering and terrorist financing activities is low but
                    however if any, may depends directly on the type of business
                    the institute donors or clients carryout or on the country
                    where they are located.
                  </p>

                  <p>
                    The Institute will classify its customers based on a risk
                    level in its applicable line of business processes and
                    procedures. Identifying the potential risk will help to
                    effectively manage these risks, implementing controls to
                    mitigate the identified risk, if any.
                  </p>
                </div>

                <div className="career__items">
                  <h4>1.4 High Risk Customers</h4>
                  <p>
                    The Institute will not accept donations from the following
                    segments of customers:
                  </p>

                  <ul>
                    <li>
                      Persons indicating possible involvement in criminal
                      activities, based on available information about them.
                    </li>
                    <li>
                      Persons with businesses in which the legitimacy of
                      activity or source of funds can’t be reasonably verified.
                    </li>
                    <li>
                      Persons refusing to provide their required information or
                      documentation; or Entities whose shareholder/control
                      structure cannot be determined.
                    </li>
                    <li>
                      Businesses and individuals from countries under terrorism
                      watch list.
                    </li>
                  </ul>
                </div>
                <div className="career__items">
                  <h4>1.5 Record Keeping</h4>
                  <p>
                    Customer documentation can either be submitted in physical
                    or electronic form. An appropriate record of the received
                    documentation, steps taken and copies of, or reference to,
                    the documentation of the customer must be kept.
                  </p>
                  <p>
                    Records should be kept for as long as the relationship
                    endures with the customer and for at least five (5) years
                    after the relationship ends. In countries where this period
                    exceeds the established period of time, the legally
                    established time period will be considered to comply with
                    local law.
                  </p>
                </div>
                <div className="career__items">
                  <h4>
                    1.6 Designation of Anti-Money Laundering Reporting Officer
                    (AMLO)
                  </h4>
                  <p>
                    The Institute will designate an Anti-Money Laundering
                    Officer. The Anti-Money Laundering officer will be
                    responsible for:
                  </p>

                  <ul>
                    <li>Considering internal reports of money laundering;</li>
                    <li>
                      Reporting suspicions of money laundering to the
                      responsible authorities.
                    </li>
                    <li>
                      Acting as key liaison with the money laundering
                      authorities.
                    </li>
                    <li>
                      Training the business and its employees on money
                      laundering;
                    </li>
                    <li>
                      Submitting monthly reports to the Special Control Unit
                      against Money Laundering (SCUML)
                    </li>
                    <li>
                      Advising on proceeding after a report of suspicion on
                      money laundering has been raised
                    </li>
                    <li>
                      Designing and implementing Anti-Money Laundering processes
                      and procedures.
                    </li>
                  </ul>
                </div>
                <div className="career__items">
                  <h4>1.7 Reporting Suspicious Activity</h4>
                  <p>
                    The Institute expects that, if any employee, donor or
                    business partner becomes aware of any suspicion or knowledge
                    of possible Money Laundering activity, this is reported
                    without undue delay to the AMLO. This can either be done
                    contacting directly the AMLO or any Director available.
                  </p>

                  <p>
                    A report on suspicious activity should contain, at least,
                    the following information, which will be confirmed by the
                    AMLO:
                  </p>

                  <ul>
                    <li>Identity of the person raising the suspicion;</li>
                    <li>Date of the report;</li>
                    <li>
                      Who is suspected of money laundering or terrorist
                      financing activities;
                    </li>
                    <li>Other individuals involved otherwise;</li>
                    <li>Delivery of facts;</li>
                    <li>What is suspected and why;</li>
                    <li>Any possible involvement of the Institute.</li>
                  </ul>
                  <p>
                  The AMLO may make reasonable enquiries within the Institute to confirm these suspicions or obtain additional information to confirm these suspicions. After this assessment, the AMLO will determine whether or not it is necessary to file an official report to the responsible money laundering authority.
                  </p>
                  <p>
                  Details of internal reports will be held by the AMLO separately, excluded from customer files, to avoid inadvertent or inappropriate disclosure.
                  </p>
                </div>
                <div className="career__items">
                  <h4>1.8 Training</h4>
                  <p>
                  The Institute has a high commitment to compliance and all employees and clients require to complete mandatory compliance training, including provisions on anti-money laundering, on an annual basis.
                  </p>

                  <p>
                  Job-specific and comprehensive anti-money laundering training should be provided to the relevant employees to help recognize and deal with transactions which may lead to money laundering or terrorist financing.
                  </p>

                </div>
                <div className="career__items">
                  <h4>1.9 Policy Review </h4>
                  <p>
                  Regular reviews of the effectiveness of this Policy are carried out by the Institute Internal control system. This provides Executive Management with the necessary assurance and information regarding the operating effectiveness of the Institute controls and processes relating to this Policy.
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

export default MoneyLaundry;
