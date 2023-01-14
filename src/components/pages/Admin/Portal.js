import React, { useState, useEffect, useRef } from "react";
import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import { Link, Redirect, useHistory, withRouter } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from "@mui/material/Divider";

import ReplayIcon from '@mui/icons-material/Replay';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Pdf from "react-to-pdf";
import { useReactToPrint } from "react-to-print";

import { useMediaQuery } from "react-responsive";

import ReactHTMLTableToExcel from "react-html-table-to-excel";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SearchIcon from "@mui/icons-material/Search";

import Store from "../../../Store/Context/Store";
import "./Control.css";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "axios";
import { BaseApi } from "../../../Store/Utility";

import ReactExport from "react-data-export";

import { useSelector } from 'react-redux'

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function Portal() {
	const [Loader, setLoader] = useState(false);

	const useStyles = makeStyles({
		root: {
			width: "100%",
		},
		container: {
			maxHeight: 600,
		},
	});

	const classes = useStyles();
	const componentRef = useRef();
	const history = useHistory();
	const {userDetails,token} = useSelector(state=>state)
	const [Registerd, setRegisterd] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};




	const isMobile = useMediaQuery({ maxWidth: 960 });

	// ?firstName_eq=John
	// ?createdAt_gte=${todaysDate}

	const [SearchBy, setSearchBy] = useState("First Name");
	const [Dae, setDae] = useState(new Date());
	const [SearchValue, setSearchValue] = useState("");

	function ResetForm() {
		setSearchBy("Fname");
		setSearchValue("");
		setDae(new Date());
	}

	function ApiRequest(url) {
		setLoader(true);
		axios
			.get(`${url}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
	
				setRegisterd(res.data);
				ResetForm();
				setLoader(false);
			})
			.catch((error) => {
				console.log(error.message);
				setLoader(false);
			});
	}

	function Filter() {
		if (SearchBy === "Fname") {
			const url = `${BaseApi}/student?Fname=${SearchValue}&_sort=createdAt:DESC&`;

			ApiRequest(url);
		} else if (SearchBy === "Lname") {
			const url = `${BaseApi}/student?Lname=${SearchValue}&_sort=createdAt:DESC&`;

			ApiRequest(url);
		} else if (SearchBy === "State") {
			const url = `${BaseApi}/student?state=${SearchValue}&_sort=createdAt:DESC&`;

			ApiRequest(url);
		} else if (SearchBy === "Phone") {
			const url = `${BaseApi}/student?phone=${SearchValue}&_sort=createdAt:DESC&`;

			ApiRequest(url);
		}else if(SearchBy === "StateCode"){
			const url = `${BaseApi}/student?stateCode=${SearchValue}&_sort=createdAt:DESC&`;

			ApiRequest(url);

		} else if (SearchBy === "Date") {
			const SearchDate = Dae.toISOString().split("T")[0];
			console.log(SearchDate);
			const url = `${BaseApi}/student?createdAt=${SearchDate}&_sort=createdAt:DESC&`;

			ApiRequest(url);
		}
	}

	async function getTotalRegisterd() {

		setLoader(true)
		axios
			.get(`${BaseApi}/student`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				setLoader(false)
				setRegisterd(res.data);
			})
			.catch((err) => {
				setLoader(false)
				return console.log(err.message);
			});
	}

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	useEffect(() => {
		getTotalRegisterd();
		window.scrollTo(0, 0);
	}, []);

	const ExcelData = [
		{
			columns: [
				{
					title: "S/N",
					style: { font: { sz: "14", bold: true } },
					width: { wpx: 40 },
				},
				{
					title: "FIRST NAME",
					style: { font: { sz: "14", bold: true } },
					width: { wpx: 125 },
				},
				{
					title: "LAST NAME",
					style: { font: { sz: "14", bold: true } },
					width: { wpx: 125 },
				},
				{
					title: "PHONE",
					style: { font: { sz: "14", bold: true } },
					width: { wpx: 125 },
				},
				{
					title: "EMAIL",
					style: { font: { sz: "14", bold: true } },
					width: { wpx: 125 },
				},
				{
					title: "STATE",
					style: { font: { sz: "14", bold: true } },
					width: { wpx: 125 },
				},
				{
					title: "STATE CODE",
					style: { font: { sz: "14", bold: true } },
					width: { wpx: 125 },
				},
				{
					title: "DATE REGISTERED",
					style: { font: { sz: "14", bold: true } },
					width: { wpx: 125 },
				},
			],
			data: Registerd?.map((data,i) => [
				{ value: i+1, style: { font: { sz: "12" } } },
				{ value: data.Fname, style: { font: { sz: "12" } } },
				{ value: data.Lname, style: { font: { sz: "12" } } },
				{ value: data.phone, style: { font: { sz: "12" } } },
				{ value: data.email, style: { font: { sz: "12" } } },
				{ value: data.state, style: { font: { sz: "12" } } },
				{ value: data.stateCode, style: { font: { sz: "12" } } },
				{
					value: new Date(data.createdAt).toDateString(),
					style: { font: { sz: "12" } },
				},
			]),
		},
	];

	// if (user?.role?.name !== "Admin") {
	// 	return <Redirect to='/login' />;
	// }

	const todaysDate = new Date().toISOString().split("T")[0];

	return (
		<>
			<div>
				<section>
					<Container>
						<Paper elevation={2}>
							<div className='filter__container'>
								<div className='filter__items'>
									<Stack
										direction={isMobile ? "column" : "row"}
										divider={<Divider orientation='vertical' flexItem />}
										justifyContent='center'
										alignItems='center'
										spacing={2}
										mt={1}
									>
										<FormControl sx={{ m: 1, minWidth: 200 }}>
											<InputLabel id='demo-simple-select-helper-label'>
												Search By
											</InputLabel>
											<Select
												labelId='demo-simple-select-helper-label'
												id='demo-simple-select-helper'
												value={SearchBy}
												label='Search-BY'
												onChange={(e) => setSearchBy(e.target.value)}
											>
												<MenuItem value='Fname'>First Name</MenuItem>
												<MenuItem value='Lname'>Last Name</MenuItem>
												<MenuItem value='Phone'>Phone No</MenuItem>
												<MenuItem value='State'>State</MenuItem>
												<MenuItem value='StateCode'>State Code</MenuItem>
												{/* <MenuItem value='Date'>Date</MenuItem> */}
											</Select>
											{/* <FormHelperText>With label + helper text</FormHelperText> */}
										</FormControl>

										{SearchBy === "Date" ? (
											<LocalizationProvider dateAdapter={AdapterDateFns}>
												<Stack spacing={1}>
													<MobileDatePicker
														label='Date'
														value={Dae}
														inputFormat='dd/MM/yyyy'
														onChange={(newValue) => setDae(newValue)}
														renderInput={(params) => <TextField {...params} />}
													/>
												</Stack>
											</LocalizationProvider>
										) : (
											<TextField
												id='outlined-search'
												label='Search field'
												type='text'
												value={SearchValue}
												onChange={(e) => setSearchValue(e.target.value)}
											/>
										)}

									
									</Stack>
								</div>

							
							</div>
							<div className='filter__items'>
									<Stack
										direction={isMobile ? "column" : "row"}
										divider={<Divider orientation='vertical' flexItem />}
										justifyContent='center'
										alignItems='center'
										spacing={2}
									
									>
										
										<Button
											type='button'
											variant='contained'
											endIcon={<SearchIcon />}
											onClick={Filter}
										
										>
											Search
										</Button>
										<Button
											type='button'
											variant='outlined'
											endIcon={<ReplayIcon />}
											onClick={getTotalRegisterd}
										
										>
											Reset
										</Button>
									</Stack>
								</div>
							<div className='filter__container'>
								<div className='filter__items'>
									<Stack direction='row' spacing={2}  
									// divider= {<Divider orientation='vertical' flexItem/>}
									>
										<Pdf
											targetRef={componentRef}
											filename={`${new Date().toDateString()} Form`}
										>
											{({ toPdf }) => (
												<Button
													onClick={toPdf}
													variant='outlined'
													startIcon={<PictureAsPdfIcon />}
												>
													PDF
												</Button>
											)}
										</Pdf>

										<ExcelFile
											filename={`Registered ${todaysDate}`}
											element={
												<Button
													type='button'
													variant='outlined'
													endIcon={<ListAltIcon />}
												>
													Excel
												</Button>
											}
										>
											<ExcelSheet dataSet={ExcelData} name='Exc' />
										</ExcelFile>

										<Button
											onClick={handlePrint}
											variant='contained'
											endIcon={<LocalPrintshopIcon />}
										>
											PRINT
										</Button>
									</Stack>
								</div>
							</div>
						</Paper>
					</Container>
				</section>
				<section>
					<Container
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<h4 className='table__title'>Registered</h4>
						<div className='recent__table__container'>
							<Paper className={classes.root}>
								<TableContainer
									className={classes.container}
									ref={componentRef}
								>
									<Table
										stickyHeader
										aria-label='sticky table'
										id='table-to-xls'
									>
										<TableHead>
											<TableRow>
												<TableCell
													align='center'
													size="medium"
													sx={{m:0,p:0}}
													style={{
														minWidth: 20,
														maxWidth:30
														
													}}
												>
												S/N
												</TableCell>
												<TableCell
													align='center'
													style={{
														minWidth: 70,
													}}
												>
													FULL NAME
												</TableCell>
												<TableCell
													align='center'
													style={{
														minWidth: 50,
													}}
												>
													PHONE
												</TableCell>

												<TableCell
													align='center'
													sx={{m:0,p:0}}
													style={{
														minWidth: 50,
													}}
												>
													EMAIL
												</TableCell>

												<TableCell
													align='center'
													sx={{m:0,p:0}}
													style={{
														minWidth: 50,
													}}
												>
													STATE
												</TableCell>
												<TableCell
													align='center'
													sx={{m:0,p:0}}
													style={{
														minWidth: 30,
													}}
												>
													STATE-CODE
												</TableCell>
												<TableCell
													align='center'
													sx={{m:0,p:0}}
													style={{
														minWidth: 40,
													}}
												>
													DATE
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{Registerd.length < 1 ? (
												<TableRow>
													<TableCell>No Result Found</TableCell>
												</TableRow>
											) : (
												Registerd?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((item,i) => {
													const {
														_id,
														Fname,
														Lname,
														state,
														phone,
														email,
														stateCode,
														createdAt,
													} = item;
													return (
														<TableRow
															hover
															role='checkbox'
															tabIndex={-1}
															key={_id}
															component={Link}
															to={`/portal/${_id}`}
															style={{ textDecoration: "none" }}
														>
															<TableCell align='center'>
																{1+i}
															</TableCell>
															<TableCell align='center'>
																{Fname} {Lname}
															</TableCell>
															<TableCell align='center'>{phone}</TableCell>
															<TableCell align='center'>{email}</TableCell>
															<TableCell align='center'>{state}</TableCell>
															<TableCell align='center'>{stateCode}</TableCell>
															<TableCell align='center'>
																{new Date(createdAt).toLocaleDateString()}
															</TableCell>
														</TableRow>
													);
												})
											)}
										</TableBody>
									</Table>
								</TableContainer>

								<TablePagination
									rowsPerPageOptions={[10, 25,50, 100]}
									component='div'
									count={Registerd?.length}
									rowsPerPage={rowsPerPage}
									page={page}
									onPageChange={handleChangePage}
									onRowsPerPageChange={handleChangeRowsPerPage}
								/>
							</Paper>
						</div>
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

export default withRouter(Portal);
