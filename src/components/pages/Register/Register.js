import React, { useState } from "react";
import axios from 'axios'
import { useForm } from 'react-hook-form';
import "../../../App.css";

import {BaseApi} from '../../../Store/Utility'

import { Container } from "@mui/material";

// import Box from "@mui/material/Box";
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
];

const PgdList = [
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
];

const Courses = [
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

export default function Register() {
	const [Loader, setLoader] = useState(false);
	const [accept, setAccept] = useState(false);


	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const [Error, setError] = useState({status:false,message:""})

	const [FirstName, setFirstName] = useState("");
	const [LastName, setLastName] = useState("");
	const [Phone, setPhone] = useState("");
	const [Email, setEmail] = useState("");

	const [Address, setAddress] = useState("");

	const [NigerState, setNigerState] = useState("Abuja(FCT)");
	const ChangeNigeState = (event) => {
		setNigerState(event.target.value);
	};

	const [StateCode, setStateCode] = useState("");

	const [Spec, setSpec] = useState("Human Resource Management");
	const changeSpec = (event) => {
		setSpec(event.target.value);
	};

	const [FirstInst, setFirstInst] = useState("");
	const [SecondInst, setSecondInst] = useState("");

	// first unstitution date
	const [Date1, setDate1] = useState(new Date());

	const DateChange1 = (newValue) => {
		setDate1(newValue);
	};

	// second institution date
	const [Date2, setDate2] = useState(new Date());

	const DateChange2 = (newValue) => {
		setDate2(newValue);
	};

	const [Diplom, setDiplom] = useState("Diploma in Human Resource Management");
	const changeDiploma = (event) => {
		setDiplom(event.target.value);
	};

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

	function ResetInput() {
		setFirstName('');
		setLastName('');
		setPhone('');
		setEmail('');
		setAddress('');
		setNigerState("Abuja(FCT)");
		setStateCode('');
		setSpec("Human Resource Management");
		setFirstInst('');
		setSecondInst('');
		setDate1("2016-08-18T21:11:54");
		setDate2("2021-08-18T21:11:54");
		setDiplom("Diploma in Human Resource Management");
		setPgd([]);
		setAccept(false)
	}

	// function Validate(e) {
		

	// }

	const details = {
		Fname:FirstName,
		Lname:LastName,
		phone:Phone,
		email:Email,
		address:Address,
		state:NigerState,
		stateCode:StateCode,
		AreaSpec:Spec,
		FirstInst:FirstInst,
		DateCompleted1:Date1,
		SecondInst:SecondInst,
		DateCompleted2:Date2,
		DiplomaC:Diplom,
		PgdC:Pgd.toString()
	}

	function Onsubmit() {
		

		setLoader(true)

		axios.post(`${BaseApi}/registers`, details)
		.then(res=>{
			console.log(res.data)

			if(res.status === 200){

				ResetInput()
			}
			setLoader(false)
		})
		.catch((error)=>{
			console.log(error.message)
			setLoader(false)
		})


	}


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

							<form action="">


								<div className='form__container'>
									<Typography variant='p' component='p' color='primary'  textAlign='center' marginTop='10px'>
										Personal Information
									</Typography>

									<div className='form__items'>
										<TextField
											id='outlined-basic'
											label='Firstname'
											type='text'
											placeholder='Chinedu'
											value={FirstName}
											onChange={(e)=>setFirstName(e.target.value)}
											style={{ width: "300px", margin: "15px" }}
											required
											error={Error.status}
											helperText={Error.message}
										/>

										<TextField
											id='outlined-basic'
											label='Lastname'
											type='text'
											placeholder='Ibrahim'
											value={LastName}
											onChange={(e)=>setLastName(e.target.value)}
											style={{ width: "300px", margin: "15px" }}
											required
										/>

										<PhoneInput
											country={"ng"}
											placeholder='07057210001'
											value={Phone}
											style={{ width: "300px", margin: "15px" }}
											onChange={(phone) => setPhone(phone)}
											required
										/>

										<TextField
											id='outlined-basic'
											label='Email'
											type='email'
											value={Email}
											onChange={(e)=>setEmail(e.target.value)}
											style={{ width: "300px", margin: "15px" }}
											placeholder='chedu-Ibrahim@gmail.com'
											required
										/>

										<TextField
											id='outlined-multiline-static'
											label='Address'
											multiline
											value={Address}
											onChange={(e)=>setAddress(e.target.value)}
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
											onChange={ChangeNigeState}
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
											onChange={(e)=>setStateCode(e.target.value)}
											placeholder='LA/20B/4832'
											required
										/>
									</div>
									<Typography variant='p' component='p' color='primary' textAlign='center' marginTop='15px'>
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
											onChange={(e)=>setFirstInst(e.target.value)}
											placeholder='Enter your first instituition here'
											required
										/>

										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<Stack spacing={3} style={{ width: "300px", margin: "15px" }}>
												<MobileDatePicker
													
													label='Date Completed'
													inputFormat='MM/dd/yyyy'
													value={Date1}
													onChange={DateChange1}
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
											onChange={(e)=>setSecondInst(e.target.value)}
											placeholder='Enter your second instituition here'
										/>

										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<Stack spacing={3} style={{ width: "300px", margin: "15px" }}>
												<MobileDatePicker
												
													label='Date Completed'
													inputFormat='MM/dd/yyyy'
													value={Date2}
													onChange={DateChange2}
													renderInput={(params) => <TextField {...params} />}
												/>
											</Stack>
										</LocalizationProvider>
									</div>
									<Typography variant='p' component='p' color='primary' textAlign='center' marginTop='15px'>
										Select Program
									</Typography>
									<div className='form__items'>
										<TextField
											id='outlined-select-currency'
											select
											label='Select'
											value={Spec}
											onChange={changeSpec}
											helperText='Please select Area of specification'
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
											label='Select'
											value={Diplom}
											onChange={changeDiploma}
											helperText='Please select Diploma Course'
											style={{ width: "300px", margin: "15px" }}
										>
											{Diploma.map((option) => (
												<MenuItem key={option} value={option}>
													{option}
												</MenuItem>
											))}
										</TextField>

										<FormControl sx={{ m: 1, width: 300 }}>
											<InputLabel id='demo-multiple-checkbox-label'>
												PGD
											</InputLabel>
											<Select
												helperText='Please select Diploma Course'
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
										</FormControl>
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
													label='hereby declare that the information given in
													this application is true and correct
													 to the best of my knowledge and belief.'
												/>
											</FormGroup>
										</div>
									</div>
								</div>
							</form>

								<Stack direction='row' spacing={2}>
									<Button
										variant='outlined'
										disabled={!accept}
										endIcon={<SendIcon />}
										onClick={Onsubmit}
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
