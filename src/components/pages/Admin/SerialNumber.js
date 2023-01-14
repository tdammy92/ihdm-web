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
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from "@mui/material/Divider";

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

import CreditCardIcon from "@mui/icons-material/CreditCard";
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

import { useSelector } from "react-redux";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function SerialNumber() {
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
	const { userDetails, token } = useSelector((state) => state);
	const [Registerd, setRegisterd] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [SearchValue, setSearchValue] = useState("");
	const [openToolTip, setOpenToolTip] = useState(false);

	const [Serial, setSerial] = useState([]);
	const [newSerial, setnewSerial] = useState("");

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const isMobile = useMediaQuery({ maxWidth: 960 });

	// console.log("my Token",token);

	async function generateSerial() {
		axios
			.post(
				`${BaseApi}/serial/generate`,
				{},
				{
					headers: {
						"Content-Type": "aplication/json",
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				console.log("serial", res?.data);
				setnewSerial(res?.data?.data?.serial);
			})
			.catch((err) => {
				return console.log(err.message);
			});
	}

	async function getAllSerial() {
		axios
			.get(`${BaseApi}/serial`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log("serial", res?.data);
				setSerial(res.data);
			})
			.catch((err) => {
				return console.log(err.message);
			});
	}

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	useEffect(() => {
		getAllSerial();
		window.scrollTo(0, 0);
	}, [newSerial]);

	function copySerial(serial) {
		navigator.clipboard.writeText(serial);
		alert(`Copied ${serial}`);
	}

	const ExcelData = [
		{
			columns: [
				{
					title: "S/N",
					style: { font: { sz: "14", bold: true } },
					width: { wpx: 40 },
				},
				{
					title: "SERIAL NUMBER",
					style: { font: { sz: "14", bold: true } },
					width: { wpx: 125 },
				},
				{
					title: "VALID",
					style: { font: { sz: "14", bold: true } },
					width: { wpx: 125 },
				},
				{
					title: "DATE GENERATED",
					style: { font: { sz: "14", bold: true } },
					width: { wpx: 125 },
				},
				{
					title: "DATE USED",
					style: { font: { sz: "14", bold: true } },
					width: { wpx: 125 },
				},
			],
			data: Serial?.map(
				({ _id, serial, dateGenerated, dateUsed, isValid }, i) => [
					{ value: i + 1, style: { font: { sz: "8" } } },
					{ value: serial, style: { font: { sz: "12" } } },
					{ value: isValid, style: { font: { sz: "12" } } },
					{
						value: new Date(dateGenerated).toLocaleDateString(),
						style: { font: { sz: "12" } },
					},
					{
						value: !!isValid
							? "Not Used"
							: new Date(dateUsed).toLocaleDateString(),
						style: { font: { sz: "12" } },
					},
				]
			),
		},
	];

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
										<TextField
											id='outlined-search'
											label='Serial'
											placeholder='XXXX-XXXX-XXXX'
											defaultValue={newSerial}
											value={newSerial}
											type='text'
											color='primary'
											InputProps={{
												readOnly: true,
											}}
											variant='standard'
										/>

										<Button
											type='button'
											variant='contained'
											endIcon={<CreditCardIcon />}
											onClick={generateSerial}
										>
											Generate Serial
										</Button>
										{newSerial!=='' && <Button
											variant='outlined'
											onClick={() => {
												copySerial(newSerial);
												setOpenToolTip(true);
											}}
											size='small'
											
											startIcon={<ContentCopyIcon />}
										>
											Copy
										</Button>}
									</Stack>
								</div>
							</div>
							<div className='filter__container'>
								<div className='filter__items'>
									<Stack direction='row' spacing={2}>
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
						<h4 className='table__title'>All Serial Number</h4>
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
													style={{
														minWidth: 70,
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
													SERIAL NUMBER
												</TableCell>
												<TableCell
													align='center'
													style={{
														minWidth: 70,
													}}
												>
													VALID
												</TableCell>

												<TableCell
													align='center'
													style={{
														minWidth: 70,
													}}
												>
													DATE GENERATED
												</TableCell>

												<TableCell
													align='center'
													style={{
														minWidth: 70,
													}}
												>
													DATE USED
												</TableCell>
												<TableCell
													align='center'
													style={{
														minWidth: 70,
													}}
												>
													USED BY
												</TableCell>
												<TableCell
													align='center'
													style={{
														minWidth: 70,
													}}
												>
													ACTION
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{Serial?.length < 1 ? (
												<TableRow>
													<TableCell>No Result Found</TableCell>
												</TableRow>
											) : (
												Serial?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((item, i) => {
													const {
														_id,
														serial,
														dateGenerated,
														dateUsed,
														isValid,
													} = item;
													return (
														<TableRow
															hover
															role='checkbox'
															tabIndex={-1}
															key={_id}
															// component={Link}
															// to={`/portal/${_id}`}
															style={{ textDecoration: "none" }}
														>
															<TableCell align='center'>{i + 1}</TableCell>
															<TableCell align='center'  style={{ color: isValid ? "green" : "red" }}>{serial}</TableCell>
															<TableCell
																align='center'
																
															>
																{isValid ? "Yes" : "No"}
															</TableCell>
															<TableCell align='center'>
																{new Date(dateGenerated).toLocaleDateString()}
															</TableCell>
															<TableCell align='center'>
																{!!isValid
																	? "Not Used"
																	: new Date(dateUsed).toLocaleDateString()}
															</TableCell>
															<TableCell align='center'>
																{!!item?.user
																	? `${item?.user?.Fname} ${item?.user?.Lname}`
																	:"Not Used"}
															</TableCell>
															
															<TableCell align='center'>
																<Button
																	variant='outlined'
																	onClick={() => {
																		copySerial(serial);
																		setOpenToolTip(true);
																	}}
																	size='small'
																
																	disabled={!isValid}
																	startIcon={<ContentCopyIcon />}
																>
																	Copy
																</Button>
															</TableCell>
														</TableRow>
													);
												})
											)}
										</TableBody>
									</Table>
								</TableContainer>

								<TablePagination
									rowsPerPageOptions={[10, 25, 100]}
									component='div'
									count={Serial?.length}
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

export default SerialNumber;
