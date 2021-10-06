import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "axios";

import { BaseApi } from "../../../Store/Utility";
import { getUser } from "../../../Store/Utility";

function Portal() {
    const [Loader, setLoader] = useState(false);
	const [value, setValue] = useState(new Date());
	const useStyles = makeStyles({
		root: {
			width: "100%",
		},
		container: {
			maxHeight: 600,
		},
	});

	const classes = useStyles();

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

	const user = getUser();
	const { jwt } = user;

	async function getTotalRegisterd() {
		axios
			.get(`${BaseApi}/registers?_sort=createdAt:DESC`, {
				headers: { Authorization: `Bearer ${jwt}` },
			})
			.then((res) => {
				setRegisterd(res.data);
			})
			.catch((err) => {
				return console.log(err.message);
			});
	}

	useEffect(() => {
		getTotalRegisterd();
	}, []);

	return (
        <>

		<div>
			<section>
				<Container>
					<Paper elevation={2}>
						<div className='filter__container'>
							<div className='filter__items'>
								<TextField
									id='outlined-search'
									label='Search field'
									type='search'
								/>
							</div>

							<div className='filter__items'>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<Stack spacing={1}>
										<MobileDatePicker
											label='Date'
											value={value}
											onChange={(newValue) => {
												setValue(newValue);
											}}
											renderInput={(params) => <TextField {...params} />}
										/>
									</Stack>
								</LocalizationProvider>
							</div>

							<div className='filter__items'>
								<ButtonGroup
									variant='contained'
									aria-label='outlined primary button group'
								>
									<Button>PDF</Button>
									<Button>Excel</Button>
								</ButtonGroup>
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
							<TableContainer className={classes.container}>
								<Table stickyHeader aria-label='sticky table'>
									<TableHead>
										<TableRow >
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
											<TableCell
												align='center'
												style={{
													minWidth: 70,
												}}
											>
												DATE
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{Registerd < 0 ? (
											<h4>No registration for today</h4>
										) : (
											Registerd?.map((item) => {
												const {
													id,
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
														key={id}
														component={Link}
														to={`/portal/${id}`}
														style={{ textDecoration: "none" }}
													>
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

export default Portal;
