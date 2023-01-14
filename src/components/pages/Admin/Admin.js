import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Link, Redirect, useHistory, withRouter } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import BlurLinearIcon from "@mui/icons-material/BlurLinear";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "axios";
import Store from "../../../Store/Context/Store";

import { BaseApi } from "../../../Store/Utility";

import { useSelector } from "react-redux";

function Admin() {
	const useStyles = makeStyles({
		root: {
			width: "100%",
		},
		container: {
			maxHeight: 440,
		},
	});
	const [Loader, setLoader] = useState(true);
	const [Registerd, setRegisterd] = useState([]);
	const [TotalRegisterd, setTotalRegisterd] = useState("");

	const classes = useStyles();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const [GetSerial, setGetSerial] = useState([]);
	const [usedSerial, setUsedSerial] = useState([]);

	const history = useHistory();

	const { userDetails, token } = useSelector((state) => state);

	// const {User:{jwt,user}} = Store();

	// console.log("token",token);
	// console.log("User",userDetails);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};
	const todaysDate = new Date().toISOString().split("T")[0];

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	async function getRegisterdToday() {
		axios
			.get(`${BaseApi}/student/recent`, {
				headers: {
					"Content-Type": "apllication/json",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				// console.log("recent registersd",res)
				setRegisterd(res?.data);
			})
			.catch((err) => {
				return console.log(err.message);
			});
	}

	async function getSerialCount() {
		axios
			.get(`${BaseApi}/serial`, {
				headers: {
					"Content-Type": "apllication/json",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log("serial detail", res);
				// console.log("recent registersd",res)
				setGetSerial(res?.data);

				const used = res?.data?.filter((item) => item.isValid !== true);
				setUsedSerial(used);
			})
			.catch((err) => {
				return console.log(err.message);
			});
	}

	async function getTotalRegisterd() {
		axios
			.get(`${BaseApi}/student`, {
				headers: {
					"Content-Type": "apllication/json",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				// console.log("Total registersd",res)
				setTotalRegisterd(res?.data?.length);
				setLoader(false);
			})
			.catch((err) => {
				return console.log(err.message);
			});
	}

	useEffect(() => {
		getRegisterdToday();
		getTotalRegisterd();
		getSerialCount();
		window.scrollTo(0, 0);
	}, []);

	// if (user?.role.name !== 'Admin') {
	//     return <Redirect to='/'/>
	// }

	return (
		<>
			<div>
				<section>
					<Container
						style={{
							display: "flex",
							flexDirection: "colum",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div className='dashboard__container'>
							<div className='dashboard__items'>
								<Paper elevation={3}>
									<div className='dasboard__list'>
										<i className='fas fa-user-graduate'></i>
										<h4>Recent Registration</h4>
										{/* <h4>Today's Registration</h4> */}

										{Registerd?.length < 0 ? (
											<h2>0</h2>
										) : (
											<h2>{Registerd?.length}</h2>
										)}
									</div>
								</Paper>
							</div>
							<Link className='dashboard__items' to='/portal'>
								<Paper elevation={3}>
									<div className='dasboard__list'>
										<i className='fas fa-users'></i>
										<h4>Total Registered</h4>

										{TotalRegisterd==='' ? (
											<h2>0</h2>
										) : (
											<h2>{TotalRegisterd  ?? '0'}</h2>
										)}
									</div>
								</Paper>
							</Link>
							<Link className='dashboard__items' to='/serial'>
								<Paper elevation={3}>
									<div className='dasboard__list'>
									<i class="fas fa-credit-card"></i>
										<h4>Serial Number</h4>
										<h2>
											{usedSerial.length}/{GetSerial.length}
										</h2>

										<div />

									</div>
								</Paper>
							</Link>
						</div>

						{/* table for recente register */}
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
						<h4 className='table__title'>Todays Registration</h4>
						<div className='recent__table__container'>
							<Paper className={classes.root}>
								<TableContainer className={classes.container}>
									<Table stickyHeader aria-label='sticky table'>
										<TableHead>
											<TableRow
												style={{ backgroundColor: "#03256C", color: "white" }}
											>
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
														minWidth: 70,
													}}
												>
													PHONE
												</TableCell>

												<TableCell
													align='center'
													style={{
														minWidth: 70,
													}}
												>
													EMAIL
												</TableCell>

												<TableCell
													align='center'
													style={{
														minWidth: 70,
													}}
												>
													STATE
												</TableCell>
												<TableCell
													align='center'
													style={{
														minWidth: 70,
													}}
												>
													STATE-CODE
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{Registerd < 0 ? (
												<h4>No registration for today</h4>
											) : (
												Registerd?.map((item) => {
													const {
														_id,
														Fname,
														Lname,
														state,
														phone,
														email,
														stateCode,
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
																{Fname} {Lname}
															</TableCell>
															<TableCell align='center'>{phone}</TableCell>
															<TableCell align='center'>{email}</TableCell>
															<TableCell align='center'>{state}</TableCell>
															<TableCell align='center'>{stateCode}</TableCell>
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

export default withRouter(Admin);
