import React,{useEffect} from "react";
import "../../../App.css";
import "./Contact.css";
import PageHero from "../../Partials/Hero/PageHero";
import HeroImage from "../../../Assets/Contact.jpg";
import "../Page.css";

import { Container, Paper } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

import CallIcon from "@mui/icons-material/Call";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { useMediaQuery } from "react-responsive";

const MobileTable = () => {
	return (
		<div className='contact__table__container'>
			<div className='contact__title'>
				<CallIcon />
				<h3>STATE COORDINATORS CONTACT:</h3>
			</div>
			<TableContainer
				component={Paper}
				style={{ width: "100%", margin: "2px", padding: "2px" }}
			>
				{/* <span style={{color:'#01996D'}}>  

                  STUDENT MEMBERSHIP
                  </span>  */}
				<Table>
					<TableHead>
						<TableRow
							style={{ backgroundColor: "#03256C", borderRadius: "10px" }}
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
								STATE
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
								NAME
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
								CONTACT
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell align='center'>Abuja </TableCell>
							<TableCell align='center'>Ms. Asanga Ifreke Precious</TableCell>
							<TableCell align='center'>08092693020</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Bauchi State </TableCell>
							<TableCell align='center'>Mr. Ohaju Stanley Ugochukwu</TableCell>
							<TableCell align='center'>08166467814, 08134995959</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Adamawa State </TableCell>
							<TableCell align='center'>Musa Ali</TableCell>
							<TableCell align='center'>08036800220</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Bayelsa State </TableCell>
							<TableCell align='center'>
							Thomas Joseph
							</TableCell>
							<TableCell align='center'>08103321562</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Benue State </TableCell>
							<TableCell align='center'>Pagher James</TableCell>
							<TableCell align='center'>07038867414</TableCell>
						</TableRow>
						{/* <TableRow>
							<TableCell align='center'>Kogi State</TableCell>
							<TableCell align='center'>Michael Shina</TableCell>
							<TableCell align='center'>07030210346</TableCell>
						</TableRow> */}
						<TableRow>
							<TableCell align='center'>Edo State </TableCell>
							<TableCell align='center'>Mr. Godswill Osagie E.</TableCell>
							<TableCell align='center'>08075020854</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Ebonyi State</TableCell>
							<TableCell align='center'>Ezaka Chineme</TableCell>
							<TableCell align='center'>08064132443</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Gombe </TableCell>
							<TableCell align='center'>Mr. Nathaniel Richard Bono</TableCell>
							<TableCell align='center'>08149370633</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Kano State </TableCell>
							<TableCell align='center'>Engr. Shehu Gambo</TableCell>
							<TableCell align='center'>08133958990</TableCell>
						</TableRow>
						{/* <TableRow>
                              
                                      <TableCell align="center">Kaduna State	</TableCell>
                                      <TableCell align="center">Ms. Ezenwe Chinaza Chinelo</TableCell>
                                      <TableCell align="center">08162656220, 08136161592</TableCell>
                              </TableRow> */}
						<TableRow>
							<TableCell align='center'>Nasarawa State </TableCell>
							<TableCell align='center'>Mr. Victor Kingsley Umbugadu</TableCell>
							<TableCell align='center'>08098312681</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Niger State </TableCell>
							<TableCell align='center'>Ms. Michael Janet Ihotu</TableCell>
							<TableCell align='center'>08141569400</TableCell>
						</TableRow>
						{/* <TableRow>
                              
                                      <TableCell align="center">Ogun State	</TableCell>
                                      <TableCell align="center">Mr. Animasaun Lukmon Abiola</TableCell>
                                      <TableCell align="center">07038877922</TableCell>
                              </TableRow> */}
						{/* <TableRow>
							<TableCell align='center'>Plateau Sate </TableCell>
							<TableCell align='center'>Mr Puttu Lot Musa</TableCell>
							<TableCell align='center'>08056796881, 09020638912</TableCell>
						</TableRow> */}
						{/* <TableRow>
							<TableCell align='center'>Taraba State</TableCell>
							<TableCell align='center'>Mr. Emmanuel Shawulu</TableCell>
							<TableCell align='center'>09037566599, 08071463057</TableCell>
						</TableRow> */}
						{/* <TableRow>
							<TableCell align='center'>Sokoto State</TableCell>
							<TableCell align='center'>Mr. Ajijila Gideon Victor</TableCell>
							<TableCell align='center'>08130301659</TableCell>
						</TableRow> */}
						<TableRow>
							<TableCell align='center'> Rivers State </TableCell>
							<TableCell align='center'>Rufus Christian</TableCell>
							<TableCell align='center'>07013246991</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'> Enugu State </TableCell>
							<TableCell align='center'>Ojimadu Ihuoma</TableCell>
							<TableCell align='center'>08065422849</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'> Oyo State </TableCell>
							<TableCell align='center'>Aderanti Victor</TableCell>
							<TableCell align='center'>08064101708</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'> Ekiti State</TableCell>
							<TableCell align='center'>Apara Titilayo</TableCell>
							<TableCell align='center'>09031904041</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default function Contact() {
	const isMobile = useMediaQuery({ maxWidth: 960 });


	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
	return (
		<>
			{" "}
			<PageHero
				title='Contact Us'
				img={HeroImage}
				subtitle='We are here for you!'
			/>{" "}
			<div className='page__Container'>
				{" "}
				<section>
					<Container>
						<div>
							<div className='contact__title'>
								<PhoneCallbackIcon />

								<h3>Our Contact</h3>
							</div>
							<div className='phone__contact'>
								<ul className='contact__list'>
									<li>+2347033458730</li>
									<li>+2347038286393</li>
									<li>+2348074090417</li>
									<li>ihdminfo02@gmail.com</li>
								</ul>
							</div>

							<hr className='LongLIne' />

							<div className='contact__title'>
								<HouseIcon />

								<h3> OPERATION OFFICES:</h3>
							</div>

							<div className='Office__address'>
								<div className='address__container'>
									<div className='address__title'>
										<LocationOnIcon />
										<h4>JIGAWA OFFICE:</h4>
									</div>
									<p>
										Baba Chai-chai Plaza, Abdullahi Maikano Road, Dutse Jigawa
										State.
									</p>
									<p>+2347033458730, +2348074090417</p>
									<p>ihdminfo02@gmail.com</p>
								</div>
								<div className='address__container'>
									<div className='address__title'>
										<LocationOnIcon />
										<h4>KATSINA STATE OFFICE:</h4>
									</div>
									<p>
										Mangal Plaza, Yahaya Madaki Way, Kofar Kaura, Katsina State.
									</p>
									<p>+2347038286393, +2348171203116</p>
									<p>ihdmkatsina@gmail.com</p>
								</div>
								<div className='address__container'>
									<div className='address__title'>
										<LocationOnIcon />
										<h4>ADAMAWA STATE OFFICE</h4>
									</div>
									<p>
										NO:3 Amana Plaza, Yola South by Yola Fufore by-pass, Adamawa
										State
									</p>
									<p>+2348036800220</p>
									<p>ihdmadamawa@gmail.com</p>
								</div>
							</div>
						</div>
					</Container>
				</section>{" "}
				<section>
					<Container>
						<hr className='LongLIne' />

						{isMobile && <MobileTable />}

						{!isMobile && (
							<div className='contact__table__container'>
								<div className='contact__title'>
									<CallIcon />
									<h3>STATE COORDINATORS CONTACT:</h3>
								</div>
								<TableContainer
									component={Paper}
									style={{ width: "100%", margin: "5px", padding: "5px" }}
								>
									{/* <span style={{color:'#01996D'}}>  

                        STUDENT MEMBERSHIP
                        </span>  */}
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
													STATE
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
													NAME
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
													CONTACT
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
						<TableRow>
							<TableCell align='center'>Abuja </TableCell>
							<TableCell align='center'>Ms. Asanga Ifreke Precious</TableCell>
							<TableCell align='center'>08092693020</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Bauchi State </TableCell>
							<TableCell align='center'>Mr. Ohaju Stanley Ugochukwu</TableCell>
							<TableCell align='center'>08166467814, 08134995959</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Adamawa State </TableCell>
							<TableCell align='center'>Musa Ali</TableCell>
							<TableCell align='center'>08036800220</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Bayelsa State </TableCell>
							<TableCell align='center'>
							Thomas Joseph
							</TableCell>
							<TableCell align='center'>08103321562</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Benue State </TableCell>
							<TableCell align='center'>Pagher James</TableCell>
							<TableCell align='center'>07038867414</TableCell>
						</TableRow>
						{/* <TableRow>
							<TableCell align='center'>Kogi State</TableCell>
							<TableCell align='center'>Michael Shina</TableCell>
							<TableCell align='center'>07030210346</TableCell>
						</TableRow> */}
						<TableRow>
							<TableCell align='center'>Edo State </TableCell>
							<TableCell align='center'>Mr. Godswill Osagie E.</TableCell>
							<TableCell align='center'>08075020854</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Ebonyi State</TableCell>
							<TableCell align='center'>Ezaka Chineme</TableCell>
							<TableCell align='center'>08064132443</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Gombe </TableCell>
							<TableCell align='center'>Mr. Nathaniel Richard Bono</TableCell>
							<TableCell align='center'>08149370633</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Kano State </TableCell>
							<TableCell align='center'>Engr. Shehu Gambo</TableCell>
							<TableCell align='center'>08133958990</TableCell>
						</TableRow>
						{/* <TableRow>
                              
                                      <TableCell align="center">Kaduna State	</TableCell>
                                      <TableCell align="center">Ms. Ezenwe Chinaza Chinelo</TableCell>
                                      <TableCell align="center">08162656220, 08136161592</TableCell>
                              </TableRow> */}
						<TableRow>
							<TableCell align='center'>Nasarawa State </TableCell>
							<TableCell align='center'>Mr. Victor Kingsley Umbugadu</TableCell>
							<TableCell align='center'>08098312681</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'>Niger State </TableCell>
							<TableCell align='center'>Ms. Michael Janet Ihotu</TableCell>
							<TableCell align='center'>08141569400</TableCell>
						</TableRow>
						{/* <TableRow>
                              
                                      <TableCell align="center">Ogun State	</TableCell>
                                      <TableCell align="center">Mr. Animasaun Lukmon Abiola</TableCell>
                                      <TableCell align="center">07038877922</TableCell>
                              </TableRow> */}
						{/* <TableRow>
							<TableCell align='center'>Plateau Sate </TableCell>
							<TableCell align='center'>Mr Puttu Lot Musa</TableCell>
							<TableCell align='center'>08056796881, 09020638912</TableCell>
						</TableRow> */}
						{/* <TableRow>
							<TableCell align='center'>Taraba State</TableCell>
							<TableCell align='center'>Mr. Emmanuel Shawulu</TableCell>
							<TableCell align='center'>09037566599, 08071463057</TableCell>
						</TableRow> */}
						{/* <TableRow>
							<TableCell align='center'>Sokoto State</TableCell>
							<TableCell align='center'>Mr. Ajijila Gideon Victor</TableCell>
							<TableCell align='center'>08130301659</TableCell>
						</TableRow> */}
						<TableRow>
							<TableCell align='center'> Rivers State </TableCell>
							<TableCell align='center'>Rufus Christian</TableCell>
							<TableCell align='center'>07013246991</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'> Enugu State </TableCell>
							<TableCell align='center'>Ojimadu Ihuoma</TableCell>
							<TableCell align='center'>08065422849</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'> Oyo State </TableCell>
							<TableCell align='center'>Aderanti Victor</TableCell>
							<TableCell align='center'>08064101708</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align='center'> Ekiti State</TableCell>
							<TableCell align='center'>Apara Titilayo</TableCell>
							<TableCell align='center'>09031904041</TableCell>
						</TableRow>
					</TableBody>
									</Table>
								</TableContainer>
							</div>
						)}
					</Container>

					<Container>
						<hr className='LongLIne' />

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
