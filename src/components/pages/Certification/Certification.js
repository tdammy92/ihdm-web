import React,{useEffect} from "react";
import "./Certification.css";
import PageHero from "../../Partials/Hero/PageHero";
import HeroImage from "../../../Assets/Certified.jpg";
import { Button } from "../../Partials/Button/Button";

import { Container } from "@mui/material";

function Certification() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<PageHero
				img={HeroImage}
				title='Certification'
				subtitle='Be Certified Today!!!'
			/>

			<div className='page__Container'>
				<section>
					<Container>
						<h2 className='certitificate__title'>
							CERTIFICATE TRAINING AND DIPLOMA COURSES
						</h2>

						<hr className='LongLIne' />

						<div className='certificate__container'>
							<h3>(1) CERTIFICATE TRAINING COURSES:</h3>
							<div className='certificate__wrapper'>
								<div className='certificate__items'>
									<h4>
										<strong>(a)</strong> Foundation Course in Humanitarian and
										Disaster Risk Management
									</h4>
									<p>List of Courses to be covered in (a) above:</p>
									<ol>
										<li>Introduction to Disaster Risk Management </li>
										<li>
											Introduction to International Humanitarian Principles
										</li>
									</ol>
								</div>
								<div className='certificate__items'>
									<h4>
										<strong>(b)</strong> Intermediate Course in Humanitarian and
										Disaster Risk Management
									</h4>
									<p>List of courses to be covered:</p>
									<ol>
										<li>Introduction to Disaster Risk Management </li>
										<li>Fundamentals of WASH in Emergencies </li>
										<li>Essentials of Education in Emergencies</li>
										<li>Health and Safety Management </li>
										<li>Inventory Management and Warehousing</li>
									</ol>
								</div>
								<div className='certificate__items'>
									<h4>
										<strong>(c)</strong> Professional/Advanced Course in
										Humanitarian and Development Studies
									</h4>
									<p>List of courses to be covered:</p>
									<ol>
										<li>
											Monitoring, Evaluation, Accountability and Learning (MEAL){" "}
										</li>
										<li>Project Management </li>
										<li>
											Procurement and Humanitarian Logistics Supply Chain
											Management
										</li>
										<li>Human Resource Management </li>
										<li>Disaster Risk Reduction</li>
										<li>Program Management</li>
										<li>Financial Management</li>
										<li>Occupational Health and Safety Management</li>
									</ol>
									<p>
										{" "}
										<strong>Requirement:</strong> All the candidates for the
										professional course will be required to volunteer in 1
										projects or humanitarian works conducted or organized by the
										Institute or her partner
									</p>
								</div>
							</div>
						</div>
						<hr className='LongLIne' />
						<div className='certificate__container'>
							<h3>(2) DIPLOMA COURSES:</h3>
							<div className='certificate__wrapper'>
								<div className='diploma__items'>
									<ol className='diploma__list'>
										<li>Diploma in Social and Community Development</li>
										<li>Diploma in Monitoring and Evaluation</li>
										<li>Diploma in Project Planning and Management</li>
										<li>Diploma in Human Resource Management</li>
										<li>Diploma in Procurement and Supply Chain Management</li>
										<li>Diploma in International Development Studies</li>
										<li>Diploma in Leadership and Management</li>
										<li>Diploma in Conflict Management</li>
										<li>Diploma in Grant Management</li>
										<li>Diploma in Disaster Risk Management</li>
										<li>Diploma in Water Sanitation and Hygiene (WASH)</li>
										<li>Diploma in Financial Management in NGOs</li>
										<li>Diploma in Environment and Sustainable Development</li>
										<li>Diploma in Refugee and Migrants Crisis Management</li>
										<li>Diploma in Food Security and Nutrition</li>
										<li>Diploma in Security and Safety Management</li>
										<li>Diploma in Waste Management</li>
										<li>Diploma Early Childhood Care Development</li>
										<li>Diploma in Data Management</li>
										<li>Diploma in Knowledge Management</li>
										<li>Diploma in Corporate Social Responsibility (CSR)</li>
										<li>Diploma in Social Enterprise Management</li>
										<li>Diploma in Humanitarian Logistics and Warehousing</li>
										<li>
											Diploma in Humanitarian and Development StudiesDiploma in
											Grant Proposal Writing and Fundraising
										</li>
										<li>Diploma in Project Management </li>
									</ol>
								</div>
							</div>
						</div>
						<hr className='LongLIne' />
						<div className='certificate__container'>
							<h3>(3) POSTGRADUATE DIPLOMA COURSES:</h3>
							<div className='certificate__wrapper'>
								<div className='diploma__items'>
									<ol className='diploma__list'>
										<li>
											Postgraduate Diploma in Humanitarian and Disaster Risk
											Management
										</li>
										<li>
											Postgraduate Diploma in Humanitarian and Refugee
											Management
										</li>
										<li>
											Professional Postgraduate in Social and Community
											Development
										</li>
										<li>Postgraduate Diploma in Monitoring and Evaluation</li>
										<li>Postgraduate Diploma in Project Management</li>
										<li>
											Postgraduate Diploma in Procurement and Logistics and
											Supply Chain Management
										</li>
										<li>Postgraduate Diploma in Sustainable Development.</li>
										<li>Postgraduate Diploma in Human Resource Management</li>
										<li>Postgraduate Diploma in Program Management</li>
										<li>Postgraduate Diploma in Financial Management</li>
									</ol>
									<div className='requirement__container'>
										<h4>REQUIREMENTS FOR THE PGD PROGRAMMES:</h4>
										<h5>QUALIFICATION: </h5>

										<p>
											The application for the Diploma and PGD programs is open
											to holders of WAEC/NECO and HND/Degrees respectively. This
											means that, graduate from Art, Social science, Medical
											Science, Law, Management science, Education, Pure Science,
											Environmental Science and Engineering can apply.{" "}
										</p>

										<p>
											{" "}
											<strong className='note__tag'>
												Course Duration:
											</strong>{" "}
											Minimum of 40 weeks and Maximum of 52 weeks.
										</p>

										<p>
											{" "}
											<strong className='note__tag'>
												Lecture Schedules:
											</strong>{" "}
											Physical classes holds every Last Friday and Saturday of
											the month, virtual classes depends on individual candidate
											or group of candidates’ needs. Self-pace study is
											continuous.{" "}
										</p>

										<p>
											{" "}
											<strong className='note__tag'>
												First Semester:
											</strong>{" "}
											Starts 2nd week of January-ends 2nd week of May with
											examination each academic year
										</p>

										<p>
											{" "}
											<strong className='note__tag'>
												Submission of Project Proposals:
											</strong>{" "}
											Starts 3rd week of May and ends 4th week of May each
											academic year. Projects are community development and
											disaster risk reduction initiatives aimed at promoting
											community resilience, enhanced community awareness and in
											most case, providing humanitarian services such as skills
											development to the youth and women. The result of your
											initiative will determine your graduation and
											certification. The projects can be done in a group of 2-5
											Members per project.
										</p>

										<p>
											{" "}
											<strong className='note__tag'>
												Second Semester:
											</strong>{" "}
											Starts 1st week of June and ends 3rd of September each
											academic years.
										</p>

										<p>
											<strong className='note__tag'>
												Methods of Delivery:
											</strong>{" "}
											Self-paced Study, Virtual Lessons and Physical Classes{" "}
										</p>

										<p>
											<strong className='note__tag'>Lecture Tools:</strong>{" "}
											Study Manuals, Video/Audio Recorded Lessons, Case Studies,
											Presentation, Simulation and Facilitation Techniques
										</p>

										<p>
											<strong className='note__tag'>
												Sales of Admission Forms:
											</strong>{" "}
											Sales of Forms and admission Runs from September-December
											each year
										</p>

										<p>
											<strong className='note__tag'>
												Cost of Application Form:
											</strong>{" "}
											Pay ₦7,000 non-refundable fee into Institute Account,
											download the form and scan the filled form and upload it
											to ihdminfo02@gmail.com /Fill ONLINE FORM/ return the
											printed filled form to our office in your state of
											resident.
										</p>
									</div>
								</div>
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
						<div className='certificate__container'>
							<h3>(4) SHORT TRAINING COURSES:</h3>
							<div className='certificate__wrapper'>
								<div className='Short__Training'>
									<p>
										These are skills-based training programs that aims to
										provide participants with practical skills and effective
										techniques used in Humanitarian and Disaster Risk
										Management. The training may last for a range of 2 days
										minimum and 5 days maximum.{" "}
									</p>
									<div className='short__training__container'>
										<div className='short__training__items'>
											<h4>
												(a) STARTING AND MANAGING SOCIAL ENTERPRISE (SAMSE)
												SKILLS TRAINING
											</h4>
											<p>
												{" "}
												It has been confirmed that, living to impact lives and
												create positive changes in our communities brings real
												joy of fulfilment. To live for others and solve their
												problems is desiring but quite demanding. Those who have
												the passion and a heart for others can however, learn
												the skills of creating and maintaining a social
												organization to achieve their dreams. This 5 day
												training will provide the participating individuals and
												organizations with requisite and professional skills
												that will help them to deliver on purpose. They will
												acquire innovative skills in fundraising and grant
												proposal writings, policy advocacy, data gathering and
												analysis, basic skills in monitoring and evaluation
												tools, project management application skills, financial
												management principles, strategies in managing or
												resolving workplace conflicts and strategic people
												management and leadership skills. They will also walk
												away with a winning grant proposal template, video clips
												on monitoring and evaluation tools and discount for
												Humanitarian and Disaster Management License (HDML).
												Organization sponsoring five and above of its members
												will receive the license free.
												<em>
													(Target Audience: Active Civil/Public servants about
													to retire, active retirees from all walks of life,
													young people with vision, visionary women,
													researchers, academia, organizations desiring to
													transit from profit to nonprofit entities, struggling
													CSOs, CBOs, NGOs etc.)
												</em>
											</p>
										</div>
										<div className='short__training__items'>
											<h4>
                                            (b) TOOLS IN GATHERING AND ANALYZING DATA (TIGAD) SKILLS TRAINING 
											</h4>
											<p>
                                            Those with professional skills in data gathering and analysis can do great exploit. These skills have the potentials of transforming someone’s life and career trajectory. These in-demand skills are needed virtually in every organization both small and big. This 2 day training workshop aims to instill, strengthen and enhance the capacity of professional and amateur “datalyst” to utilize, manipulate, apply and harmonize these tools for better, accurate and precise results. The participants will walk away with deep revelation and light on the processes, techniques and strategies to gather, processed, store and apply data.


												<em>
                                                (Target Audience: Development practitioners, disaster managers, party officials, business executives, recruiters, Researchers, marketers, consultant, estate managers, contractors, procurement officers, traders, etc)
												</em>
											</p>
										</div>
										<div className='short__training__items'>
											<h4>
                                            (c) DISASTER RISK AND WASTE MANAGEMENT (DRAWM) TRAINING.
											</h4>
											<p>
                                            This 3 day training equips disaster and waste managers and community organizers with special abilities and community-oriented strategies to address the issues of disaster preparedness, mitigation, response and recovery at lower levels. This training will help to enhance the skills of policy makers to make informed policy decisions that promote the culture of disaster risk reduction and waste management in other to make our communities resilient to hazards. 


												<em>
                                                (Those to benefit from this training are –Environmental managers, climate change promoters, development practitioners, public agency directors, policy makers, environmental consultants, researchers, religious leaders, community leaders, political actors, etc)
												</em>
											</p>
										</div>
										<div className='short__training__items'>
											<h4>
                                            (d) MONITORING AND EVALUATION TECHNIQUES TRAINING
											</h4>
											<p>
                                            Monitoring, Evaluation, Accountability and Learning (MEAL) has gained wide recognition globally and has become a major tool to ascertain the impacts of projects or programs executed at various levels. The matter of monitoring and evaluation span across public and private institutions. As a result, the demand for people with this skill is high and they are grossly in short supply. This is a 3 day training workshop aimed at providing those willing to pursue or are pursuing a career in monitoring and evaluation with innovative skills and abilities to demonstrate technical capabilities in using monitoring and evaluation tools such as SPSS, Spreadsheet, Advanced Excel etc to conduct result-based assessments. The training will bring professionals in the field with more than 20 years of practice to share their knowledge with the participants.


												<em>
                                                (Target Audience Those who desire to pursue a career in M&E, M&E officers both public and private, Volunteers in development sector, researchers, project and program officers, educators,  Business executives, project monitoring and evaluation appointees officials of governments) 
												</em>
											</p>
										</div>
										<div className='short__training__items'>
											<h4>
                                            (e) EARLY CHILDHOOD CARE DEVELOPMENT AND EDUCATION (ECCDE) TRAINING 
											</h4>
											<p>
                                            Children constitute the future leadership and workforce of each nation and thus must be giving serious attention by the older population, most especially by the state own institutions to ensure their proper upbringing to adulthood. In most cases, the needs of children from less privileged and disadvantaged segments of our societies are neglected. Children are vulnerable to any disease and disasters and can better be protected and educated. Institutions and individuals responsible for the welfare of children should put in place policy measures that support the growth and development of children exposed to the dangers of wars, poverty and loss of guidance.  Children must be brought up in the environment that guarantees their health and educational needs regardless of their background. This 2 day training workshop will bring Experts in the field to impart participants with skills to enhance their abilities to initiate policies, manage and care for children exposed to disasters and discriminations. 


												<em>
                                                (Those to benefit immensely from the training are: Federal & State Ministries of Education, Health, Humanitarian and women affairs, Caregivers, community leaders, religious leaders, educators, scholars, researchers, policy makers, political leaders, nutritionist, peace builders, humanitarians, etc) 
												</em>
											</p>
										</div>
										<div className='short__training__items'>
											<h4>
                                            (f) FUNDRAISING CONCEPTS AND GRANT PROPOSAL WRITING SKILLS TRAINING. 
											</h4>
											<p>
                                            Fundraising and grant proposal writing are powerful tools through which development and humanitarian organizations access funds from government, private businesses, international organizations and foundations to finance their projects and programs. Acquiring this critical skills, offer great excitement for determining one’s organization success. This 2 day training will inculcate in the participants the techniques in grant writings, strategies to source and access funds, they will be exposed to donor policies and practical demonstration of grant proposal writing. The training will use facilitation techniques such as brainstorming, group discussion etc to ensure active participation. The participants will walk away with award winning grants templates.


												<em>
                                                (Target Audience: human right activists, civil society organizations, humanitarians, NGOs, Community-Based Organizations, development professional, business developers, executives)
												</em>
											</p>
										</div>
										<div className='short__training__items'>
											<h4>
                                            (g) REFUGEES AND MIGRANTS’ CRISIS MANAGEMENT (REMCRIM) TRAINING. 
											</h4>
											<p>
                                            There is unprecedented increase and rise in refugees and migrants which is having great geopolitical and economic impacts on countries. While a permanent solution is still far-fetched, there is need for greater solidarity among the governments, NGOs and private sector to find solutions to this humanitarian crisis. The spurious borders and high influx of migrants from other West African countries is not only threatening the corporate existence of Nigeria as country, but has created herders-farmers conflict that is causing displacement of people on daily basis that has resulted into serious humanitarian crisis. This 2 day training workshop aims to provide policy makers with innovative measures to curtail illegal influx of migrants, inculcate in disaster or emergency managers with improve skills of managing refugee crisis. 


												<em>
                                                (Target Audience: Elected officials, Political appointees, party officials, youth leaders, community leaders, electoral officials, civil society organizations, partisan groups, aspirants, religious and traditional leaders, opinion leaders, political analysts, diplomats, security agencies. etc)
												</em>
											</p>
										</div>
										<div className='short__training__items'>
											<h4>
                                            (h) PROCUREMENT, HUMANITARIAN LOGISTICS SUPPLY CHAIN AND WAREHOUSE MANAGEMENT
											</h4>
											<p>
                                            Procuring the right goods, delivering the right quantity, at the right place and time and appropriate storage requires professional skills in systematic planning, coordination and operation in time of disaster management. At the end of the training, the participants will garner knowledge on the importance of logistics function in the provision of humanitarian assistance, acquaint themselves on the basics of managing logistics during humanitarian response and how to make use the limited resources during emergencies to enhance the quality of humanitarian operation. 


												<em>
                                                Target Audience: procurement and logistics officers and warehouse management officers both in public and private sector, those interested in the field, those transiting from other field to procurement and logistics, NGOs officials etc.
												</em>
											</p>
										</div>
										<div className='short__training__items'>
											<h4>
                                            (i) PROJECT PLANNING AND PROGRAM MANAGEMENT (PPPM) TRAINING
											</h4>
											<p>
                                            The ability to navigate between projects and plan for their successful execution is the capacity every project professional would like to possess. This 3 day training is aim to empower project management practitioner cum the upcoming ones with the requisite skills needed to succeed in the profession. At the end of the training, participants will be expected to acquire duo skills in project planning and program management, managing alignment, ability to interpret data, innovate, making right decisions and the capacity to think ahead and leverage the networks to perform maximally in the project management profession. 


												<em>
                                                Target Audience: Project management professionals, government officials in project offices, Project officers in private sectors and in the humanitarian and development sector and interested person who wants to build a career in project management officers.
												</em>
											</p>
										</div>
										<div className='short__training__items'>
											<h4>
                                            (j) HR PRACTICES AND RECRUITMENT IN POST COVID-19 ERA (TOOLS AND SKILLS NEEDED)
											</h4>
											<p>
                                            In post Covid-19 era, HR Practitioners must adopt new tools and approaches to human resource acquisitions and on-boarding. This 3 day training workshop aims to expose professionals in the field of Human Resource Management working in government MDAs, development Institutions and NGOs to the most effective and efficient tools to be used in addressing the recruitment needs of their various organizations.


												<em>
                                                Target Audience: HR Practitioners and Consultants, HR officers in both public and private institutions, HR officers in development and humanitarian institutions, lawyers, 
												</em>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
                        <hr className="LongLIne" />
					</Container>
				</section>
			</div>
		</>
	);
}

export default Certification;
