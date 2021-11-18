import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../../../App.css";

import { BaseApi, types } from "../../../Store/Utility";

import { Container } from "@mui/material";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
// date-fns
// import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";

import { useAlert } from "react-alert";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/material.css";
// import "react-phone-input-2/lib/style.css";

import "../Page.css";

const StateList = [
	"Abia",
	"Adamawa",
	"Akwa Ibom",
	"Anambra",
	"Bauchi",
	"Bayelsa",
	"Benue",
	"Borno",
	"Cross River",
	"Delta",
	"Ebonyi",
	"Edo",
	"Ekiti",
	"Enugu",
	"Gombe",
	"Imo",
	"Jigawa",
	"Kaduna",
	"Kano",
	"Katsina",
	"Kebbi",
	"Kogi",
	"Kwara",
	"Lagos",
	"Nasarawa",
	"Niger",
	"Ogun",
	"Ondo",
	"Osun",
	"Oyo",
	"Plateau",
	"Rivers",
	"Sokoto",
	"Taraba",
	"Yobe",
	"Zamfara",
	"Abuja(FCT)",
];

const Diploma = [
	"Nil",
	"Diploma in Social and Community Development",
	"Diploma in Monitoring and Evaluation",
	"Diploma in Project Planning and Management",
	"Diploma in Human Resource Management",
	"Diploma in Procurement and Supply Chain Management",
	"Diploma in International Development Studies",
	"Diploma in Leadership and Management",
	"Diploma in Conflict Management",
	"Diploma in Grant Management",
	"Diploma in Disaster Risk Management",
	"Diploma in Water Sanitation and Hygiene (WASH)",
	"Diploma in Financial Management in NGOs",
	"Diploma in Environment and Sustainable Development",
	"Diploma in Occupational Health and Safety Management",
];

const PgdList = [
	"Nil",
	"PGD Diploma in Humanitarian and Disaster Risk Management",
	"PGD Diploma in Humanitarian and Refugee Management",
	"Professional PGD in Social and Community Development",
	"PGD Diploma in Monitoring and Evaluation",
	"PGD Diploma in Project Management",
	"PGD Diploma in Procurement and Logistics and Supply Chain Management",
	"PGD Diploma in Sustainable Development.",
	"PGD Diploma in Human Resource Management",
	"PGD Diploma in Program Management",
	"PGD Diploma in Financial Management",
	"PGD Diploma in Occupational Health and Safety Management",
];

const Courses = [
	"Nil",
	"Project Management",
	"Human Resource Management",
	"Monitoring and Evaluation",
	"Procurement and Logistics Supply Chain Management",
	"Program Management",
	"Humanitarian and Refugee management",
	"Humanitarian and Disaster Risk Management",
	"Financial Management",
	"Health and Safety Management",
	"Water Sanitation and Hygiene",
	"Waste and Environmental Management",
	"Education in Emergencies",
];
const Membership = [
	"Nil",
	"Student Member (SiHDM)",
	"Affiliate Member (AFiHDM)",
	"Associate Member (AiHDM)",
	"Full Member (MiHDM)",
	"Fellow Member (FiHDM)",
];

export default function Register() {
	const [Loader, setLoader] = useState(false);
	const [accept, setAccept] = useState(false);

	const alert = useAlert();

	// const {
	// 	register,
	// 	handleSubmit,
	// 	watch,
	// 	formState: { errors },
	// } = useForm();

	const [FirstName, setFirstName] = useState("");
	const [LastName, setLastName] = useState("");
	const [Phone, setPhone] = useState("");
	const [Email, setEmail] = useState("");
	const [Address, setAddress] = useState("");
	const [NigerState, setNigerState] = useState("Abuja(FCT)");
	const [StateCode, setStateCode] = useState("");

	const [Spec, setSpec] = useState("Nil");

	const [FirstInst, setFirstInst] = useState("");
	// first unstitution date
	const [Date1, setDate1] = useState(new Date());

	const [SecondInst, setSecondInst] = useState("");
	// second institution date
	const [Date2, setDate2] = useState(new Date());

	// code for working experience

	const [currentRole, setcurrentRole] = useState("");
	const [currentOrg, setcurrentOrg] = useState("");
	const [DateJoind1, setDateJoind1] = useState(new Date());

	const [PastRole, setPastRole] = useState("");
	const [PastOrg, setPastOrg] = useState("");
	const [DateJoind2, setDateJoind2] = useState(new Date());
	const [DateLeft2, setDateLeft2] = useState(new Date());

	const [Diplom, setDiplom] = useState("Nil");

	// pgd select checkbox code
	const ITEM_HEIGHT = 40;
	const ITEM_PADDING_TOP = 4;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	const [Pgd, setPgd] = useState([]);

	const PgdChange = (event) => {
		const {
			target: { value },
		} = event;
		setPgd(
			// On autofill we get a the stringified value.
			typeof value === "string" ? value.split(",") : value
		);

		
	};

	const [Memba, setMemba] = useState("Nil");

	function ResetInput() {
		setFirstName("");
		setLastName("");
		setPhone("");
		setEmail("");
		setAddress("");
		setNigerState("Abuja(FCT)");
		setStateCode("");
		setSpec("Nil");
		setFirstInst("");
		setSecondInst("");
		setDate1(new Date());
		setDate2(new Date());
		setDiplom("Nil");
		setPgd([]);
		setAccept(false);
		setcurrentRole("");
		setcurrentOrg("");
		setDateJoind1(new Date());
		setPastRole("");
		setPastOrg("");
		setDateJoind2(new Date());
		setDateLeft2(new Date());
		setMemba("Nil");
	}

	function submitForm() {
		const details = {
			Fname: FirstName,
			phone: Phone,
			Lname: LastName,
			email: Email,
			address: Address,
			state: NigerState,
			stateCode: StateCode,
			AreaSpec: Spec,
			FirstInst: FirstInst,
			DateCompleted1: Date1,
			SecondInst: SecondInst,
			DateCompleted2: Date2,
			DiplomaC: Diplom,
			PgdC: Pgd.toString(),
			currentRole: currentRole,
			currentOrg: currentOrg,
			DateJoinedCurrent: DateJoind1,
			PastRole: PastRole,
			PastOrg: PastOrg,
			DateJoinedPast: DateJoind2,
			DateLeftPast: DateLeft2,
			membershipCat: Memba,
		};

		if ((FirstName === "") || (LastName === "") || (Phone === "")) {
			alert.show(`Please fill all important fileds`, {
				title: "Incomplete Details",
				type: types.ERROR,
			});
		} else {
			setLoader(true);

			

			axios
				.post(`${BaseApi}/registers`, details)
				.then((res) => {
					console.log(res.data);

					if (res.status === 200) {
						alert.show(
							`Dear ${FirstName} ${LastName} your form has been submitted`,
							{
								title: "Notification !!!",
								type: types.SUCCESS,
							}
						);
						ResetInput();
					}
					setLoader(false);
				})
				.catch((error) => {
					console.log(error.message);
					setLoader(false);

					alert.show(`${error.message}`, {
						title: "Oops !!!",
						type: types.ERROR,
					});
				});
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className='page__Container'>
				<section>
					<Container>
						<div>
							<h3 className='page__subtitle'>IHDM Registration Portal</h3>
						</div>

						<Paper style={{ marginTop: "20px", padding: "5px" }}>
							<div className='form__wrapper'>
								<form
									action=''
									// onSubmit={handleSubmit(submitForm)}
								>
									<div className='form__container'>
										<div>
											<Typography
												variant='h6'
												component='h6'
												color='primary'
												textAlign='center'
												marginTop='10px'
											>
												Personal Information
											</Typography>

											<span
												style={{
													fontSize: "12px",
													color: "red",
													textAlign: "center",
													width: "100%",
													fontFamily: "serif",
													padding: "5px",
													marginLeft: "6px",
												}}
											>
												All *(asteriked) are important fileds
											</span>
										</div>

										<div className='form__items'>
											<TextField
												id='outlined-basic'
												label='Firstname'
												type='text'
												placeholder='Chinedu'
												value={FirstName}
												onChange={(e) => setFirstName(e.target.value)}
												style={{ width: "300px", margin: "15px" }}
												required
												// name='Fname'
												// {...register("Fname", { required: "First name is required" })}
												// error={Boolean(errors.Fname)}
												// helperText={errors.Fname?.message}
											/>

											<TextField
												id='outlined-basic'
												label='Lastname'
												type='text'
												placeholder='Ibrahim'
												value={LastName}
												onChange={(e) => setLastName(e.target.value)}
												style={{ width: "300px", margin: "15px" }}
												required
												// name='Lname'
												// {...register("Lname", { required: "Last name is required" })}
												// error={Boolean(errors.Lname)}
												// helperText={errors.Lname?.message}
											/>

											<PhoneInput
												country={"ng"}
												placeholder='07057210001'
												value={Phone}
												style={{ width: "300px", margin: "15px" }}
												onChange={(phone) => setPhone(phone)}
												required

												// name='phone'
												// {...register("Lname", { required: "Phone number is required" })}
												// error={Boolean(errors.phone)}
												// helperText={errors.phone?.message}
											/>

											<TextField
												id='outlined-basic'
												label='Email'
												type='email'
												value={Email}
												onChange={(e) => setEmail(e.target.value)}
												style={{ width: "300px", margin: "15px" }}
												placeholder='chedu-Ibrahim@gmail.com'
												required

												// name='email'
												// {...register("email", { required: "email is required" })}
												// error={Boolean(errors.email)}
												// helperText={errors.email?.message}
											/>

											<TextField
												id='outlined-multiline-static'
												label='Address'
												multiline
												value={Address}
												onChange={(e) => setAddress(e.target.value)}
												rows={4}
												style={{ width: "300px", margin: "15px" }}
												placeholder='Permernent Address'
												required
											/>

											<TextField
												id='outlined-select-currency'
												select
												label='Select'
												value={NigerState}
												onChange={(e) => setNigerState(e.target.value)}
												helperText='Please select State of service'
												style={{ width: "300px", margin: "15px" }}
												required
											>
												{StateList.map((option) => (
													<MenuItem key={option} value={option}>
														{option}
													</MenuItem>
												))}
											</TextField>

											<TextField
												style={{ width: "300px", margin: "15px" }}
												id='outlined-basic'
												label='State Code'
												type='text'
												value={StateCode}
												onChange={(e) => setStateCode(e.target.value)}
												placeholder='LA/20B/4832'
												required
											/>
										</div>
										<Typography
											variant='h6'
											component='h6'
											color='primary'
											textAlign='center'
											marginTop='15px'
										>
											Institution Attended/Date
										</Typography>

										<div className='form__items'>
											<TextField
												style={{ width: "300px", margin: "15px" }}
												id='outlined-multiline-static'
												label='First Instittution'
												multiline
												rows={2}
												value={FirstInst}
												onChange={(e) => setFirstInst(e.target.value)}
												placeholder='Enter your first instituition here'
												required
											/>

											<LocalizationProvider dateAdapter={AdapterDateFns}>
												<Stack
													spacing={3}
													style={{ width: "300px", margin: "15px" }}
												>
													<MobileDatePicker
														label='Date Completed'
														inputFormat='MM/dd/yyyy'
														value={Date1}
														onChange={(value) => {
															setDate1(value);
														}}
														renderInput={(params) => <TextField {...params} />}
													/>
												</Stack>
											</LocalizationProvider>

											<TextField
												style={{ width: "300px", margin: "15px" }}
												id='outlined-multiline-static'
												label='Second Instittution'
												multiline
												rows={2}
												value={SecondInst}
												onChange={(e) => setSecondInst(e.target.value)}
												placeholder='Enter your second instituition here'
											/>

											<LocalizationProvider dateAdapter={AdapterDateFns}>
												<Stack
													spacing={3}
													style={{ width: "300px", margin: "15px" }}
												>
													<MobileDatePicker
														label='Date Completed'
														inputFormat='MM/dd/yyyy'
														value={Date2}
														onChange={(value) => setDate2(value)}
														renderInput={(params) => <TextField {...params} />}
													/>
												</Stack>
											</LocalizationProvider>
										</div>

										<div>
											<Typography
												variant='h6'
												component='h6'
												color='primary'
												textAlign='center'
												marginTop='10px'
											>
												Work History
											</Typography>
											<Typography
												variant='p'
												component='p'
												color='primary'
												textAlign='center'
												marginTop='5px'
											>
												Current Role
											</Typography>
										</div>

										<div className='form__items'>
											<TextField
												id='outlined-basic'
												label='Job Title'
												type='text'
												placeholder='Software Engr'
												value={currentRole}
												onChange={(e) => setcurrentRole(e.target.value)}
												style={{ width: "300px", margin: "15px" }}
												required
											/>
											<TextField
												id='outlined-basic'
												label='Organization'
												type='text'
												placeholder='Opay'
												value={currentOrg}
												onChange={(e) => setcurrentOrg(e.target.value)}
												style={{ width: "300px", margin: "15px" }}
												required
											/>

											<LocalizationProvider dateAdapter={AdapterDateFns}>
												<Stack
													spacing={3}
													style={{ width: "300px", margin: "15px" }}
												>
													<MobileDatePicker
														label='Date Joined'
														inputFormat='MM/dd/yyyy'
														value={DateJoind1}
														onChange={(value) => setDateJoind1(value)}
														renderInput={(params) => <TextField {...params} />}
													/>
												</Stack>
											</LocalizationProvider>
										</div>
										<div>
											<Typography
												variant='p'
												component='p'
												color='primary'
												textAlign='center'
												marginTop='5px'
											>
												Past Role
											</Typography>
										</div>

										<div className='form__items'>
											<TextField
												id='outlined-basic'
												label='Job Title'
												type='text'
												placeholder='Software Engr'
												value={PastRole}
												onChange={(e) => setPastRole(e.target.value)}
												style={{ width: "300px", margin: "15px" }}
												required
											/>
											<TextField
												id='outlined-basic'
												label='Organization'
												type='text'
												placeholder='Opay'
												value={PastOrg}
												onChange={(e) => setPastOrg(e.target.value)}
												style={{ width: "300px", margin: "15px" }}
												required
											/>

											<LocalizationProvider dateAdapter={AdapterDateFns}>
												<Stack
													spacing={3}
													style={{ width: "300px", margin: "15px" }}
												>
													<MobileDatePicker
														label='Date Joined'
														inputFormat='MM/dd/yyyy'
														value={DateJoind2}
														onChange={(value) => setDateJoind2(value)}
														renderInput={(params) => <TextField {...params} />}
													/>
												</Stack>
											</LocalizationProvider>
											<LocalizationProvider dateAdapter={AdapterDateFns}>
												<Stack
													spacing={3}
													style={{ width: "300px", margin: "15px" }}
												>
													<MobileDatePicker
														label='Date Ended'
														inputFormat='MM/dd/yyyy'
														value={DateLeft2}
														onChange={(value) => setDateLeft2(value)}
														renderInput={(params) => <TextField {...params} />}
													/>
												</Stack>
											</LocalizationProvider>
										</div>

										<Typography
											variant='h6'
											component='h6'
											color='primary'
											textAlign='center'
											marginTop='15px'
										>
											Select Program
										</Typography>
										<div className='form__items'>
											<TextField
												id='outlined-select-currency'
												select
												label='Select Specialization'
												value={Spec}
												onChange={(e) => setSpec(e.target.value)}
												helperText='Select the Area of Specialization'
												style={{ width: "300px", margin: "15px" }}
												required
											>
												{Courses.map((option) => (
													<MenuItem key={option} value={option}>
														{option}
													</MenuItem>
												))}
											</TextField>

											<TextField
												id='outlined-select-currency'
												select
												label='Select Diploma'
												value={Diplom}
												onChange={(e) => setDiplom(e.target.value)}
												helperText='Please select Diploma Course'
												style={{ width: "300px", margin: "15px" }}
											>
												{Diploma.map((option) => (
													<MenuItem key={option} value={option}>
														{option}
													</MenuItem>
												))}
											</TextField>

											{/* <FormControl sx={{ m: 1, width: 300 }}>
												<InputLabel id='demo-multiple-checkbox-label'>
													PGD
												</InputLabel>
												<Select
													labelId='demo-multiple-checkbox-label'
													id='demo-multiple-checkbox'
													multiple
													value={Pgd}
													onChange={PgdChange}
													input={<OutlinedInput label='Tag' />}
													renderValue={(selected) => selected.join(", ")}
													MenuProps={MenuProps}
												>
													{PgdList.map((name) => (
														<MenuItem key={name} value={name}>
															<Checkbox checked={Pgd.indexOf(name) > -1} />
															<ListItemText primary={name} />
														</MenuItem>

														
													))}
												</Select>

												<span
													style={{
														fontSize: "12px",
														color: "#808080",
														fontFamily: "serif",
														padding: "5px",
													}}
												>
													* Selecting more than one (1) PGD attracts additional
													cost from the initial
												</span>
											</FormControl> */}

											<FormControl sx={{ m: 1, width: 300 }}>
												<InputLabel id='demo-multiple-name-label'>
													PGD
												</InputLabel>
												<Select
													labelId='demo-multiple-name-label'
													id='demo-multiple-name'
													multiple
													value={Pgd}
													onChange={PgdChange}
													input={<OutlinedInput label='Name' />}
													MenuProps={MenuProps}
												>
													{PgdList.map((name) => (
														<MenuItem
															key={name}
															value={name}
															
														>
															{name}
														</MenuItem>
													))}
												</Select>

												
												<span
													style={{
														fontSize: "12px",
														color: "#808080",
														fontFamily: "serif",
														padding: "5px",
													}}
												>
													* Selecting more than one (1) PGD attracts additional
													cost from the initial
												</span>
											</FormControl>
										</div>
										<Typography
											variant='h6'
											component='h6'
											color='primary'
											textAlign='center'
											marginTop='15px'
										>
											Membership Category
										</Typography>
										<div className='form__items'>
											<TextField
												id='outlined-select-currency'
												select
												label='Select membership'
												value={Memba}
												onChange={(e) => setMemba(e.target.value)}
												helperText='Select Membership category according to your qualification.
'
												style={{ width: "300px", margin: "15px" }}
												required
											>
												{Membership.map((option) => (
													<MenuItem key={option} value={option}>
														{option}
													</MenuItem>
												))}
											</TextField>
										</div>

										<div className='form__items'>
											<div className='form__checkBox'>
												<FormGroup>
													<FormControlLabel
														control={
															<Checkbox
																checked={accept}
																onChange={(e) => setAccept(e.target.checked)}
															/>
														}
														label='I hereby declare that the information given in
													this application is true and correct
													 to the best of my knowledge and belief.'
													/>
												</FormGroup>
											</div>
										</div>
									</div>
								</form>
								<span
									style={{
										fontSize: "12px",
										color: "red",
										textAlign: "center",
										width: "100%",
										fontFamily: "serif",
										padding: "5px",
										marginBottom: "5px",
									}}
								>
									INSTRUCTION: Note that, filling online form, without paying
									the necessary fee, will not be treated.
								</span>
								<Stack direction='row' spacing={2}>
									<Button
										variant='outlined'
										disabled={!accept}
										endIcon={<SendIcon />}
										onClick={submitForm}
										type='submit'
										style={{ marginBottom: "20px" }}
									>
										Submit
									</Button>
								</Stack>
							</div>
						</Paper>
					</Container>
				</section>
			</div>

			{Loader ? (
				<div>
					<Backdrop
						sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
						open={true}
					>
						<CircularProgress color='inherit' />
					</Backdrop>
				</div>
			) : (
				<div></div>
			)}
		</>
	);
}
