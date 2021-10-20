import React, { useState, useEffect, useRef } from "react";
import { useParams, Redirect, useHistory, withRouter } from "react-router-dom";

import { useReactToPrint } from "react-to-print";

import Pdf from "react-to-pdf";

import Store from "../../../Store/Context/Store";

import axios from "axios";

import { BaseApi, types } from "../../../Store/Utility";
import { Container } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import { useAlert } from "react-alert";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Stack from "@mui/material/Stack";

import "./Control.css";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
	...theme.typography.button,
	backgroundColor: theme.palette.background.paper,
	padding: theme.spacing(1),
	textAlign: "center",
}));

function FormView() {
	const [Loader, setLoader] = useState(true);
	const [Details, setDetails] = useState({});

	const componentRef = useRef();
	const history = useHistory();

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	const { User } = Store();
	const { jwt, user } = User;
	const alert = useAlert();

	const { id } = useParams();

	async function getDetails() {
		axios
			.get(`${BaseApi}/registers/${id}`, {
				headers: { Authorization: `Bearer ${jwt}` },
			})
			.then((res) => {
				setDetails(res.data);
				setLoader(false);
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
				setLoader(false);
			});
	}

	function DeleteForm(id) {
		axios
			.delete(`${BaseApi}/registers/${id}`, {
				headers: { Authorization: `Bearer ${jwt}` },
			})
			.then((res) => {
				console.log(res.data);

				alert.show(`form has been deleted`, {
					title: "Notification !!!",
					type: types.SUCCESS,
				});

				history.push("/portal");
			})
			.catch((error) => {
				console.log(error);

				alert.show(`${error.message}`, {
					title: "Oops !!!",
					type: types.ERROR,
				});
			});
	}

	useEffect(() => {
		getDetails();
	}, [id]);

	const {
		Fname,
		Lname,
		state,
		phone,
		email,
		stateCode,
		createdAt,
		AreaSpec,
		DiplomaC,
		PgdC,
		FirstInst,
		DateCompleted1,
		SecondInst,
		DateCompleted2,
		currentRole,
		DateJoinedCurrent,
		DateJoinedPast,
		DateLeftPast,
		PastOrg,
		PastRole,
		membershipCat,
		currentOrg,
	} = Details;

	if (User?.user?.role.name !== "Admin") {
		

		<Redirect to='/login' />;
	}

	// useEffect(() => {
	// 	if (user?.role.name !== "Admin") {
	// 		history.push("/login");
	// 	}
	// }, []);

	return (
		<>
			<div>
				<section>
					<Container>
						<div className='form__view__container'>
							<div className='form__details' ref={componentRef}>
								<Typography
									variant='h4'
									component='h4'
									mb='4'
									color='primary'
									textAlign='center'
								>
									{Lname} {Fname}
								</Typography>

								<TableContainer component={Paper}>
									<Table
										sx={{ minWidth: 350 }}
										size='small'
										aria-label='Form Details'
									>
										<TableHead>
											<TableRow
												style={{ backgroundColor: "#03256C", color: "white" }}
											>
												<TableCell align='center' style={{ color: "white" }}>
													ITEM
												</TableCell>
												<TableCell align='center' style={{ color: "white" }}>
													PROPERTIES
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
										<TableRow>
												<TableCell align='center' style={{color:'#03256C'}} colSpan={2}>
													PERSONAL DETAILS
												</TableCell>
												{/* <TableCell align='left'>{AreaSpec}</TableCell> */}
											</TableRow>
											<TableRow>
												<TableCell align='left'>NAME</TableCell>
												<TableCell align='left'>
													{Fname} {Lname}
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>PHONE</TableCell>
												<TableCell align='left'>{phone || 'Nil'}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>EMAIL</TableCell>
												<TableCell align='left'>{email || 'Nil'}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>STATE</TableCell>
												<TableCell align='left'>{state || 'Nil'}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>STATE CODE</TableCell>
												<TableCell align='left'>{stateCode || 'Nil'}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>DATE REGISTERED</TableCell>
												<TableCell align='left'>
													{new Date(createdAt).toDateString() || 'Nil'}
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center' style={{color:'#03256C'}} colSpan={2}>
													EDUCATIONAL HISTORY
												</TableCell>
												{/* <TableCell align='left'>{AreaSpec}</TableCell> */}
											</TableRow>
											<TableRow>
												<TableCell align='left'>FIRST INSTITUTE</TableCell>
												<TableCell align='left'>{FirstInst || 'Nil'}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>DATE COMPLETED</TableCell>
												<TableCell align='left'>{DateCompleted1 || 'Nil'}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>SECOND INSTITUTE</TableCell>
												<TableCell align='left'>{SecondInst || "Nil"}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>DATE COMPLETED</TableCell>
												<TableCell align='left'>{DateCompleted2 || 'Nil'}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center' style={{color:'#03256C'}} colSpan={2}>
													WORK EXPERIENCE
												</TableCell>
												{/* <TableCell align='left'>{AreaSpec}</TableCell> */}
											</TableRow>
											<TableRow>
												<TableCell align='left'>CURRENT ROLE</TableCell>
												<TableCell align='left'>{currentRole || "Nil"}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>CURRENT ORGANIZATION</TableCell>
												<TableCell align='left'>{currentOrg || "Nil"}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>DATE JOINED</TableCell>
												<TableCell align='left'>{DateJoinedCurrent || "Nil"}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'></TableCell>
												<TableCell align='left'></TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>PAST JOB ROLE</TableCell>
												<TableCell align='left'>{PastRole || "Nil"}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>PAST JOB ORGANIZATION</TableCell>
												<TableCell align='left'>{PastOrg || "Nil"}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>DATE JOINED</TableCell>
												<TableCell align='left'>{DateJoinedPast || "Nil"}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>DATE LEFT</TableCell>
												<TableCell align='left'>{DateLeftPast || "Nil"}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='center' style={{color:'#03256C'}} colSpan={2}>
													PROGRAM
												</TableCell>
												{/* <TableCell align='left'>{AreaSpec}</TableCell> */}
											</TableRow>
											<TableRow>
												<TableCell align='left'>
													MEMBERSHIP
												</TableCell>
												<TableCell align='left'>{membershipCat || 'Nil'}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>
													AREA OF SPECIFICATION
												</TableCell>
												<TableCell align='left'>{AreaSpec || 'Nil'}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>DIPLOMA COURSE</TableCell>
												<TableCell align='left'>{DiplomaC || 'Nil'}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align='left'>PGD COURSE</TableCell>
												<TableCell align='left'>{PgdC || 'Nil'}</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</div>
						</div>

						<div className='controls__btn'>
							<Stack direction='row' spacing={2}>
								<Pdf targetRef={componentRef} filename={`${Fname} ${Lname}`}>
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

								<Button
									onClick={handlePrint}
									variant='contained'
									endIcon={<LocalPrintshopIcon />}
								>
									PRINT
								</Button>
								<Button
									onClick={() => {
										DeleteForm(id);
									}}
									variant='contained'
									color='error'
									endIcon={<DeleteForeverIcon />}
								>
									DELETE
								</Button>
							</Stack>
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

export default withRouter(FormView);
