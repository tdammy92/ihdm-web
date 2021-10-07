import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Pdf from "react-to-pdf";

import axios from "axios";
import { Redirect } from "react-router";
import { BaseApi, getUser } from "../../../Store/Utility";
import { useParams } from "react-router-dom";
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

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

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

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	const user = getUser();
	const { jwt } = user;

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

	useEffect(() => {
		getDetails();
	}, [id]);

	if (user?.user?.role.name !== "Admin") {
		return <Redirect to='/' />;
	}
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
	} = Details;

	return (
		<>
			<div>
				<section>
					<Container >

          <div className="form__view__container" >

						<div className='form__details' ref={componentRef} >
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
											<TableCell align='left'>NAME</TableCell>
											<TableCell align='left'>
												{Fname} {Lname}
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align='left'>PHONE</TableCell>
											<TableCell align='left'>{phone}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align='left'>EMAIL</TableCell>
											<TableCell align='left'>{email}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align='left'>STATE</TableCell>
											<TableCell align='left'>{state}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align='left'>STATE CODE</TableCell>
											<TableCell align='left'>{stateCode}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align='left'>DATE REGISTERED</TableCell>
											<TableCell align='left'>
												{new Date(createdAt).toDateString()}
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align='left'>FIRST INSTITUTE</TableCell>
											<TableCell align='left'>{FirstInst}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align='left'>DATE COMPLETED</TableCell>
											<TableCell align='left'>{DateCompleted1}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align='left'>SECOND INSTITUTE</TableCell>
											<TableCell align='left'>{SecondInst}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align='left'>DATE COMPLETED</TableCell>
											<TableCell align='left'>{DateCompleted2}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align='left'>AREA OF SPECIFICATION</TableCell>
											<TableCell align='left'>{AreaSpec}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align='left'>DIPLOMA COURSE</TableCell>
											<TableCell align='left'>{DiplomaC}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align='left'>PGD COURSE</TableCell>
											<TableCell align='left'>{PgdC}</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</div>
          </div>

						<div className='controls__btn'>
							

							<Stack direction='row' spacing={2}>
								
                
              <Pdf targetRef={componentRef} filename={`${Fname} ${Lname}`}>
								{({ toPdf }) => <Button onClick={toPdf} variant='outlined' startIcon={<PictureAsPdfIcon />}>
									PDF
								</Button>}
							</Pdf>
                



								<Button
									onClick={handlePrint}
									variant='contained'
									endIcon={<LocalPrintshopIcon />}
								>
									PRINT
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

export default FormView;
