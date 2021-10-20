import React,{useEffect} from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PageHero from "../../Partials/Hero/PageHero";
import HeroImage from "../../../Assets/deserted.jpg";
import "../../../App.css";
import "../Page.css";
import "./Member.css";
import { Button } from "../../Partials/Button/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Member() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<PageHero
				img={HeroImage}
				title='Membership'
				subtitle='Join IHDM today!!!'
			/>

			<div className='page__Container'>
				<section>
					<Container>
						<div className='member__info'>
							<div className='member__info__header'>
								<h3>MEMBERSHIP INFORMATION:</h3>
								<p>
									The membership of the institute is divided into 5 career
									progression categories and a corporate category. The
									categories are:
								</p>
							</div>
							<div className='member__info__body'>
								<Grid container spacing={2}>
									<Grid
										item
										xs={12}
										md={6}
										className='member__info__items'
										spacing={2}
									>
										<h4>STUDENT MEMBER</h4>
										<p>
											This particular membership is open to students in the
											higher institutions in Nigeria and abroad. This is a
											qualifying grade and applicants will be subjected to
											foundation or basic course training and evaluation test.
											Upon successful evaluation, will be admitted at Student
											level and certificate for the completion of Introduction
											to Humanitarian and Disaster Risks Management Course will
											be issued to them. This process runs for a maximum of 3
											weeks only. Those who failed the assessment test will be
											required to pay another extra fee for re-training and
											re-evaluation.
										</p>
									</Grid>
									<Grid
										item
										xs={12}
										md={6}
										className='member__info__items'
										spacing={2}
									>
										<h4>AFFILIATE</h4>
										<p>
											This particular membership of the institute is open to
											holders of NCE/OND certificates with 3 and above years of
											work experience in any organization and will be subjected
											to undergo Intermediate course in Humanitarian and
											Disaster Risk Management for 2 Months and sit for
											examination test manually or online, after obtaining the
											pass mark and paying the prescribed fee they will be
											inducted into the institute as Affiliate Members and
											Advanced Diploma certificate in Intermediate course in
											Humanitarian and Disaster Risk Management will be issued
											to them on the day of induction. Those who failed the
											assessment test will be required to pay another extra fee
											for re-training and re-evaluation.
										</p>
									</Grid>
									<Grid
										item
										xs={12}
										md={6}
										className='member__info__items'
										spacing={2}
									>
										<h4>ASSOCIATE</h4>
										<p>
											This membership category is open to graduates from
											recognized higher institutions of learning in Nigeria and
											abroad. Holders of HND, B.SC, B.A, B.Ed, LLB, MBBS, B.ENG,
											B.TECH PGD etc with 1 to 5 years work experience will be
											subjected to a 3 Months intensive Professional and
											Advanced Course training in Humanitarian and Disaster Risk
											Management with the option of self-pace study or class
											coaching and a Mandatory Professional Examination to
											evaluate the learning status of the participants. NYSC
											Serving Corps Members fit well in this category. Upon
											successful evaluation, the participants will be admitted
											at the Associate level and awarded a Professional
											certificate in Humanitarian and Disaster Risk Management.
											Those who failed the examinations for 3 consecutive
											attempts in a single sitting, will be required to pay
											extra fee of 20% of the total initial fee for the level
											and carryover to the next batch of trainees.
										</p>
									</Grid>
									<Grid
										item
										xs={12}
										md={6}
										className='member__info__items'
										spacing={2}
									>
										<h4>Full MEMBER</h4>
										<p>
											This full membership category is open to Holders of HND,
											B.SC, B.A, B.Ed, LLB, MBBS, B.ENG, B.TECH, PGD, MSC, M.Ed,
											MBA, MPA, MPHIL, PHD or a membership of other recognized
											professional bodies subject to confirmation with 6-10
											years of work experience. This{" "}
											<strong>Direct Membership Admission:</strong>{" "}
											<em>
												is meant for people who are qualified on the basis of
												work experience relevant to the field of humanitarian,
												development studies and disaster risk management or
												those with evident contributions to the provision of
												humanitarian services and disaster risk reduction.
											</em>{" "}
											After due assessment of CV, an interactive interview with
											the management and approval by IHDM board, the person(s)
											will be inducted as full member(s) after a two-day
											training workshop.
										</p>
									</Grid>
									<Grid
										item
										xs={12}
										md={6}
										className='member__info__items'
										spacing={2}
									>
										<h4>FELLOW</h4>
										<p>
											This direct membership category is open to Holders of HND,
											B.SC, B.A, LLB, MBBS, B.ENG, B.TECH, PGD, MSC, MBA, M.Ed,
											MPA, MPHIL, PHD or a membership of other recognized
											professional bodies subject to confirmation with 11 and
											above years of work experience from all areas of endeavor.
											Admission is based on work experience and the person’s
											contributions toward humanitarian and disaster risk
											reduction in their communities and to the society
											generally. This can be an{" "}
											<strong>
												Honorary Fellow, Research Fellow or Fellow Membership
												and Doctorate Fellow.
											</strong>{" "}
											The certification and induction shall be conferred after a
											two-day training workshop.
										</p>
									</Grid>
									<Grid
										item
										xs={12}
										md={6}
										className='member__info__items'
										spacing={2}
									>
										<h4>CORPORATE</h4>
										<p>
											This is open to non-governmental organizations (NGOs),
											Civil Society Organizations (CSOs), Community-Based
											Organizations (CBOs), Security companies, manufacturing
											companies, marine companies, transport companies, schools
											and other private businesses that want a discounted
											platform to enhance the profile of their businesses and
											collaborates to improve their employees’ skills in
											disaster risk management and global humanitarian best
											practices, in order to advance a sustainable and safe
											working environment to achieve the organizational goals.
										</p>
									</Grid>
								</Grid>
							</div>
						</div>
						<hr className='LongLIne' />
						<div className='eligibility__info'>
							<div className='eligibility__info__header'>
								<h3>ELIGIBILITY:</h3>
								<p>
									Humanitarian and Disaster Risk Management is everyone’s
									business. To this end, graduates from Faculties of Art,
									Humanities, Education, Social Sciences, Management Sciences,
									Laws, Sciences, Engineering and Medical sciences can apply and
									obtain humanitarian and disaster Risk Management professional
									skills to excel in their career endeavours.
								</p>

								<p>
									This means that, those who are working or desiring to pursue
									careers in the humanitarian and development sector can and
									should apply for formal Humanitarian and development training
									courses through our various channels. The careers includes:
								</p>
							</div>
							<div className='eligibility__body'>
								<ul className='eligibility__list'>
									<li>
										Arm Forces: Military, Para-military and Police personnel
									</li>
									<li>Diplomats</li>
									<li>Civic/Religious leaders</li>
									<li>Political leaders</li>
									<li>Traditional leaders</li>
									<li>Development analyst </li>
									<li>Lawyers</li>
									<li>Researchers/Scholars/Educators</li>
									<li>Human Resource officers</li>
									<li>Entrepreneurs/Proprietors</li>
									<li>Journalist/media experts</li>
									<li>Humanitarian/ development experts</li>
									<li>Civil servants/Labour union executives</li>
									<li>Development/security management consultants </li>
									<li>Human right activists </li>
									<li>Youth and women leaders</li>
									<li>Medical practitioners </li>
									<li>Sport professionals</li>
									<li>Policy advocates</li>
									<li>Management team</li>
								</ul>
							</div>
						</div>
					</Container>
				</section>
			</div>
			<div className='register__cta'>
				<div className='inner__cta'>
					<h3>Want more information ? </h3>
					<h4>Reach us on:</h4>
					<ul>
						<li>+2347033458730</li>
						<li>+2347038286393</li>
						<li>+2348074090417</li>
						<li>ihdminfo02@gmail.com</li>
					</ul>
				</div>

				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
					to='/register'
				>
					Register
				</Button>
			</div>

			<div className='page__Container'>
				<section>
					<Container>
						<div className='member__routes'>
							<h2 className='routes__title'>MEMBERSHIP ROUTES</h2>

							<hr className='LongLIne' />
							<h3 className='routes__item__heading'>EXAMINATION ROUTES</h3>
							<Grid container spacing={2} className='routes__items'>
								<Grid
									xs={12}
									md={6}
									item
									spacing={2}
									className='route__item__list'
								>
									<h4>
										Foundation Course in Humanitarian and Disaster Risk
										Management
									</h4>

									<p>
										This 4 weeks training leads to the award of certificate of
										completion and admission at Student membership of the
										institute. It meant for students in colleges of Education,
										polytechnics, Monotechnics and undergraduate students of
										university institutions. Evaluation Test to be conducted at
										the end of training. After completion of their OND/NCE and
										Degree/ HND programmes, the Student members will be made to
										take the Intermediate or Professional Examination after 2 or
										3 months of advanced course training to progress to next
										stage of membership according to their academic
										qualifications and work experiences. He/she must also be
										willing to engage his/her community with other members of
										the institute in building community resilient against
										hazards.
									</p>
								</Grid>
								<Grid
									xs={12}
									md={6}
									item
									spacing={2}
									className='route__item__list'
								>
									<h4>
										Intermediate Course in Humanitarian and Disaster Risk
										Management
									</h4>

									<p>
										This 2 months training course is open to holders of NCE/OND
										certificates in any field with at least 2-5 years of work
										experience in any organization. After the training, they
										will sit for an examination test. If passed, they will be
										inducted as Affiliate Member into the institute and Advanced
										Diploma certificate will be issued to them on the day of
										induction. He/she must also be willing to engage his/her
										community with other members of the institute in building
										community resilient against hazards.
									</p>
								</Grid>
								<Grid
									xs={12}
									md={6}
									item
									spacing={2}
									className='route__item__list'
								>
									<h4>
										Professional Course in Humanitarian and Disaster Risk
										Management
									</h4>

									<p>
										This is a 3 month intensive Training course that leads to
										the award of professional and Postgraduate Diploma
										certificates and admission at the Associate level of the
										individual membership of the institute. All participants
										MUST take the Professional Examination. No option for
										exemption here. It is open to ALL holders of degrees/HNDs,
										who are interested in humanitarian and development sector
										and employees who have at least 1-4 years of work experience
										in any field. Associates can progress to the next level of
										membership after 5years of ACTIVE membership from the date
										of the induction. He/she must also be willing to engage
										his/her community with other members of the institute in
										building community resilient against hazards.
									</p>
								</Grid>
							</Grid>
							<hr className='LongLIne' />
							<h3 className='routes__item__heading'>EXECUTIVE ROUTES</h3>
							<p className='routes__item__heading__note'>
								<strong>Direct Membership on Experience Basis</strong>
								This direct membership category is exempted from Examination but
								MUST participate in the workshop training, seminars,
								conferences, group discussion and simulation activities leading
								to the induction of applicants.
							</p>
							<Grid container spacing={2} className='routes__items'>
								<Grid
									xs={12}
									md={6}
									item
									spacing={2}
									className='route__item__list'
								>
									<h4>Full Membership Admission:</h4>

									<p>
										Admission is by nomination /application and is open to
										persons from all walks of life who desire to possess
										professional skills in humanitarian and disaster risk
										reduction, he/she must hold degree/HND in any field, must
										have 6-10 years of work experience and must be in a
										leadership position in his/her organization/society at the
										time of application/nomination. They can progress to next
										level of individual membership of the institute after 5years
										of ACTIVE membership from the date of admission. Admission
										is by years of work experience. He/she must also be willing
										to engage his/her community with other members of the
										institute in building community resilient against hazards.
									</p>
								</Grid>
								<Grid
									xs={12}
									md={6}
									item
									spacing={2}
									className='route__item__list'
								>
									<h4>Fellow Membership:</h4>

									<p>
										is the highest individual category and admission process can
										be by nomination, conferment and application. However, the
										applicant/nominee must have 11 and above years of work
										experience. Must be in leadership position in his/her
										organization at the time of nomination or application.
										He/she must also be willing to further engage his/her
										community with other members of the institute in building
										community resilient against hazards.
									</p>
								</Grid>
							</Grid>
							<hr className='LongLIne' />
							<div className='other__routes'>
								<h3 className='routes__item__heading'>HUMANITARIAN ROUTE</h3>

								<p className='routes__item__heading__note'>
									This is open to individuals and organizations with cognizance
									experience in and Contributions to humanitarian and
									development sector. The individual and the organization must
									have at least 3 years of work experience and above in the
									field. While the organizations will be admitted as corporate
									members, the individuals will be admitted at various
									individual membership categories based on their years of work
									experiences and contributions to development sector. They will
									be inducted after attending a two-five day workshop leading to
									admission.
								</p>
							</div>
							<hr className='LongLIne' />
							<h3 className='routes__item__heading'>
								MILITARY/PARAMILITARY ROUTE
							</h3>

							<Grid container spacing={2} className='routes__items'>
								<Grid
									xs={12}
									md={6}
									item
									spacing={2}
									className='route__item__list'
								>
									<p>
										This route is open to officers of the Nigerian Army, Air
										force, Navy, Civil Defense, Customs, Immigration, Police,
										DSS, Correction Officers, Fire Service, Road Safety
										Officers, Marine Officers, VIO Officers etc. The holders of
										OND/NCE at the rank of Lance Corporal to Sergeant or its
										equivalent with 5 and above years of work experience will be
										admitted at level Affiliate Member after taking the
										intermediate course examination and attending a two-day
										workshop leading to the induction of members.
									</p>
								</Grid>
								<Grid
									xs={12}
									md={6}
									item
									spacing={2}
									className='route__item__list'
								>
									<p>
										The holders of Degree/HND from the Rank of Second Lieutenant
										and its equivalent to the highest ranking in those
										respective institutions with adequate work experience
										ranging from 3 and above years of work experience will be
										admitted at the various membership categories appropriate to
										their work experience and after taking a professional
										examination or attending a two-five day workshop leading to
										the induction of new members. Those with evidence of Rescue
										Operations in disaster emergencies’ experience will have
										other advantages ranging from cash discount and membership
										placement. All applicants will be required to attend a
										two-day workshop on Disaster Response Management training
										and pay the required fee for membership induction.
									</p>
								</Grid>
							</Grid>
							<div className='other__routes'>
								<hr className='LongLIne' />
								<h3 className='routes__item__heading'>CORPORATE</h3>

								<p className='routes__item__heading__note'>
									This is open to organizations promoting disaster related
									policy programs, laws, education of the public on hazards,
									good governance and human rights of citizenry at community,
									Local, State and International levels. These are NGOs, Civil
									Society Organizations, religious and Community-Based
									Organizations.
								</p>
								<p className='routes__item__heading__note'>
									The membership is also extended to private businesses working
									towards promoting a disaster free workplace environment and
									guarantee safety to all its employees.
								</p>
								<p className='routes__item__heading__note'>
									The membership is also extended to private businesses working
									towards promoting a disaster free workplace environment and
									guarantee safety to all its employees.
								</p>
								<p className='routes__item__heading__note'>
									A rebate will be given to organizations sponsoring more than 3
									of its staff for our trainings or those seeking for an
									in-house training.
								</p>
							</div>
						</div>
					</Container>
				</section>
			</div>
			<div className='register__cta'>
				<div className='inner__cta'>
					<h3>Want more information ? </h3>
					<h4>Reach us on:</h4>
					<ul>
						<li>+2347033458730</li>
						<li>+2347038286393</li>
						<li>+2348074090417</li>
						<li>ihdminfo02@gmail.com</li>
					</ul>
				</div>

				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
					to='/register'
				>
					Register
				</Button>
			</div>
			<div className='page__Container'>
				<section>
					<Container>
						<div className='member__routes'>
							<h2 className='routes__title'>MEMBERSHIP BENEFITS:</h2>

							<Grid container spacing={2} className='benefit__container'>
								<Grid item xs={12} md={6} className='benefit__list'>
									<strong> (a)</strong> Access to career and volunteer
									opportunities with United Nations Agencies, AU, ECOWAS, Arab
									leagues, European Union, World Bank Groups, Christian and
									Muslim NGOs, governmental and private establishments and
									International NGOs.
								</Grid>
								<Grid item xs={12} md={6} className='benefit__list'>
									<strong> (b)</strong> Access to fellowship and grant
									opportunities to pursue postgraduate programs in disaster risk
									management, humanitarian and development studies overseas
									through our partners.
								</Grid>
								<Grid item xs={12} md={6} className='benefit__list'>
									<strong> (c)</strong> Enjoy affordable platform to acquire
									newest ideas, techniques and toolkits through our short
									courses training events such as workshops, seminars, annual
									lectures, conferences and Mandatory Professional Education
									Programs (MPEP).
								</Grid>
								<Grid item xs={12} md={6} className='benefit__list'>
									<strong> (d)</strong> Acquire full accredited postgraduate
									diplomas that can enable them proceed to master degree
									programs.
								</Grid>
								<Grid item xs={12} md={6} className='benefit__list'>
									<strong> (e)</strong> Access to grant proposal templates and
									support for research works in disaster risk management,
									humanitarian and development studies as a member.
								</Grid>
								<Grid item xs={12} md={6} className='benefit__list'>
									<strong> (f)</strong> Walk your way to management position in
									your organization with our professional skills and membership
									certifications.
								</Grid>
								<Grid item xs={12} md={6} className='benefit__list'>
									<strong> (g)</strong> Enjoy international recognition as a
									certified humanitarian and development professional and
									connect with network of global professionals for greater
									opportunities in your career.
								</Grid>
								<Grid item xs={12} md={6} className='benefit__list'>
									<strong> (h)</strong> Free publication of your research works
									and write ups on disaster, humanitarian and related topics in
									our Humanitarian and Development journal and on our website.
								</Grid>
								<Grid item xs={12} md={6} className='benefit__list'>
									<strong> (i)</strong> Become a certified Humanitarian and
									Development Professional (CHDpro) or a Licensed Organization
									or individual to advance your consultancy and other
									professional careers.
								</Grid>
								<Grid item xs={12} md={6} className='benefit__list'>
									<strong> (j)</strong> Opportunity to use the institute’s
									prefix after your name. e.g SiHDM, AFiHDM, AiHDM, MiHDM,
									FiHDM.
								</Grid>
								<Grid item xs={12} md={6} className='benefit__list'>
									<strong> (k)</strong> Opportunity to be appointed as the
									president of the institute or member of the governing council
									or the various committees of the institute.
								</Grid>
							</Grid>
						</div>

						<hr className='LongLIne' />
						<div className='member__routes'>
							<h2 className='routes__title'>MEMBERSHIP UPGRADE:</h2>
							<div className='member__upgrade'>
								<p>
									As a member you must satisfy the following mandatory
									requirements for upgrade of your membership
								</p>

								<ol className='member__upgrade__list'>
									<li>
										Fulfill the statutory period between grades of membership
										which is 5 years from the year of induction.
									</li>
									<li>Meet all financial obligations up to date .</li>
									<li>Complete an Upgrading Request Form .</li>
									<li>
										Send Curriculum Vitae showing detailed Employment history to
										date and key responsibilities of positions.
									</li>
									<li>Attach all relevant credentials/certificates.</li>
									<li>
										List of Contributions to the Institute’s humanitarian and
										disaster risk reduction activities:
										<ul className='inner__ungrade__list'>
											<li>Active Membership of State Branch</li>
											<li>
												Participation in Committee/Council work where
												applicable.
											</li>
											<li>
												Attendance at the Institute Activities such as Annual
												Conference, AGM, Annual Lecture, Humanitarian Day
												celebration.
											</li>
											<li>
												Participation in the Institute’s Mandatory Professional
												Education Program (MPEP) and forward copies of
												certificate of participation to the Institute.
											</li>
											<li>
												Participation in building community resilient against
												hazards activities.
											</li>
										</ul>
									</li>
								</ol>
							</div>
						</div>
						<hr className='LongLIne' />
						<div className='membership__fees'>
							<h2 className='routes__title'>IHDM MEMBERSHIP AND OTHER FEES:</h2>

							<div className='membership__tables'>
								<TableContainer
									component={Paper}
									style={{ width: "350px", margin: "10px", padding: "10px" }}
								>
									<span style={{ color: "#03256C" }}>STUDENT MEMBERSHIP</span>
									<Table>
										<TableHead>
											<TableRow
												style={{
													backgroundColor: "#03256C",
													borderRadius: "10px",
												}}
											>
												<TableCell
													align='center'
													component='th'
													style={{
														fontFamily: "Lato",
														color: "white",
														fontWeight: "600",
													}}
												>
													ITEM
												</TableCell>
												<TableCell
													align='center'
													component='th'
													style={{
														fontFamily: "Lato",
														color: "white",
														fontWeight: "600",
													}}
												>
													FEES(₦)
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell align='center'>Form</TableCell>
												<TableCell align='center'>₦500</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Training Fee</TableCell>
												<TableCell align='center'>₦6,500</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Certificate fee</TableCell>
												<TableCell align='center'>₦5,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													Membership Admission
												</TableCell>
												<TableCell align='center'>₦1,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													Annual Subscription
												</TableCell>
												<TableCell align='center'>₦1,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Development levy</TableCell>
												<TableCell align='center'>₦1,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													TOTAL
												</TableCell>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													₦15,000
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>

								<TableContainer
									component={Paper}
									style={{ width: "350px", margin: "10px", padding: "10px" }}
								>
									<span style={{ color: "#03256C" }}>AFFILIATE MEMBERSHIP</span>
									<Table>
										<TableHead>
											<TableRow
												style={{
													backgroundColor: "#03256C",
													borderRadius: "10px",
												}}
											>
												<TableCell
													align='center'
													component='th'
													style={{
														fontFamily: "Lato",
														color: "white",
														fontWeight: "600",
													}}
												>
													ITEM
												</TableCell>
												<TableCell
													align='center'
													component='th'
													style={{
														fontFamily: "Lato",
														color: "white",
														fontWeight: "600",
													}}
												>
													FEES(₦)
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell align='center'>Form</TableCell>
												<TableCell align='center'>₦2,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Training Fee</TableCell>
												<TableCell align='center'>₦10,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Induction fee</TableCell>
												<TableCell align='center'>₦5,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													Membership Admission
												</TableCell>
												<TableCell align='center'>₦5,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													Annual Subscription
												</TableCell>
												<TableCell align='center'>₦3,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Development levy</TableCell>
												<TableCell align='center'>₦5,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													TOTAL
												</TableCell>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													₦30,000
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
								<TableContainer
									component={Paper}
									style={{ width: "350px", margin: "10px", padding: "10px" }}
								>
									<span style={{ color: "#03256C" }}>ASSOCIATE MEMBER</span>
									<Table>
										<TableHead>
											<TableRow
												style={{
													backgroundColor: "#03256C",
													borderRadius: "10px",
												}}
											>
												<TableCell
													align='center'
													component='th'
													style={{
														fontFamily: "Lato",
														color: "white",
														fontWeight: "600",
													}}
												>
													ITEM
												</TableCell>
												<TableCell
													align='center'
													component='th'
													style={{
														fontFamily: "Lato",
														color: "white",
														fontWeight: "600",
													}}
												>
													FEES(₦)
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell align='center'>Form</TableCell>
												<TableCell align='center'>₦5,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Training Fee</TableCell>
												<TableCell align='center'>₦15,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													Membership addmission
												</TableCell>
												<TableCell align='center'>₦15,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Induction fee</TableCell>
												<TableCell align='center'>₦20,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													Annual Subscription
												</TableCell>
												<TableCell align='center'>₦5,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Development levy</TableCell>
												<TableCell align='center'>₦5,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													TOTAL
												</TableCell>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													₦65,000
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													SERVING NYSC CORPS MEMBERS CONVERSION
												</TableCell>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												></TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Form</TableCell>
												<TableCell align='center'>₦1,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Training Fee</TableCell>
												<TableCell align='center'>₦9,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													Induction/certification fee
												</TableCell>
												<TableCell align='center'>₦13,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													TOTAL
												</TableCell>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													₦23,000
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>

								<TableContainer
									component={Paper}
									style={{ width: "350px", margin: "10px", padding: "10px" }}
								>
									<span style={{ color: "#03256C" }}>FULL MEMBERSHIP</span>
									<Table>
										<TableHead>
											<TableRow
												style={{
													backgroundColor: "#03256C",
													borderRadius: "10px",
												}}
											>
												<TableCell
													align='center'
													component='th'
													style={{
														fontFamily: "Lato",
														color: "white",
														fontWeight: "600",
													}}
												>
													ITEM
												</TableCell>
												<TableCell
													align='center'
													component='th'
													style={{
														fontFamily: "Lato",
														color: "white",
														fontWeight: "600",
													}}
												>
													FEES(₦)
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell align='center'>Form</TableCell>
												<TableCell align='center'>₦5,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Training Fee</TableCell>
												<TableCell align='center'>₦25,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Induction fee</TableCell>
												<TableCell align='center'>₦30,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													Membership Admission
												</TableCell>
												<TableCell align='center'>₦20,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													Annual Subscription
												</TableCell>
												<TableCell align='center'>₦10,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Development levy</TableCell>
												<TableCell align='center'>₦10,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													TOTAL
												</TableCell>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													₦100,000
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>

								<TableContainer
									component={Paper}
									style={{ width: "350px", margin: "10px", padding: "10px" }}
								>
									<span style={{ color: "#03256C" }}>FELLOW MEMBERSHIP</span>
									<Table>
										<TableHead>
											<TableRow
												style={{
													backgroundColor: "#03256C",
													borderRadius: "10px",
												}}
											>
												<TableCell
													align='center'
													component='th'
													style={{
														fontFamily: "Lato",
														color: "white",
														fontWeight: "600",
													}}
												>
													ITEM
												</TableCell>
												<TableCell
													align='center'
													component='th'
													style={{
														fontFamily: "Lato",
														color: "white",
														fontWeight: "600",
													}}
												>
													FEES(₦)
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell align='center'>Form</TableCell>
												<TableCell align='center'>₦5,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Training Fee</TableCell>
												<TableCell align='center'>₦30,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Induction fee</TableCell>
												<TableCell align='center'>₦35,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													Membership Admission levy
												</TableCell>
												<TableCell align='center'>₦40,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													Annual Subscription
												</TableCell>
												<TableCell align='center'>₦5,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Development levy</TableCell>
												<TableCell align='center'>₦10,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													TOTAL
												</TableCell>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													₦140,000
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													HONORARY FELLOW
												</TableCell>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													₦150,000
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													RESEARCH FELLOW
												</TableCell>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													₦130,000
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													Doctorate Fellow
												</TableCell>
												<TableCell
													align='center'
													style={{ fontFamily: "Lato", fontWeight: "600" }}
												>
													₦145,000
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
								<TableContainer
									component={Paper}
									style={{ width: "350px", margin: "10px", padding: "10px" }}
								>
									<span style={{ color: "#03256C" }}>OTHER FEES</span>
									<Table>
										<TableHead>
											<TableRow
												style={{
													backgroundColor: "#03256C",
													borderRadius: "10px",
												}}
											>
												<TableCell
													align='center'
													component='th'
													style={{
														fontFamily: "Lato",
														color: "white",
														fontWeight: "600",
													}}
												>
													ITEM
												</TableCell>
												<TableCell
													align='center'
													component='th'
													style={{
														fontFamily: "Lato",
														color: "white",
														fontWeight: "600",
													}}
												>
													FEES(₦)
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell align='center'>
													Corporate Membership
												</TableCell>
												<TableCell align='center'>₦170,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													Membership ID CARD (plastic)
												</TableCell>
												<TableCell align='center'>₦2000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Sticker</TableCell>
												<TableCell align='center'>₦500</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													Disaster Management Journal
												</TableCell>
												<TableCell align='center'>₦3000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Face Cap</TableCell>
												<TableCell align='center'>₦1,500</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>IHDM Polo</TableCell>
												<TableCell align='center'>₦4,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>
													IHDM customized Laptop Bag{" "}
												</TableCell>
												<TableCell align='center'>₦6,000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center'>Lapel Pin </TableCell>
												<TableCell align='center'>₦1,500</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</div>
						</div>

                        <hr className="LongLIne" />

                        <div className='bank__details' id='bankDetails'>
							<h3>IHDM Accountant Details</h3>

							<p>
								Account Name:
								<strong>
								Institute of Humanitarian and Disaster Management
								</strong>
							</p>
							<p>
								Account Number:
								<strong>1760111727</strong>
							</p>
							<p>
								Bank:
								<strong>Ecobank Nig. Plc</strong>
							</p>
						</div>
					</Container>
				</section>
			</div>
		</>
	);
}
