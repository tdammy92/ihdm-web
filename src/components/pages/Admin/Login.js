import React, { useState,useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { BaseApi,types } from "../../../Store/Utility";
import { useHistory ,Redirect} from "react-router-dom";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import { useAlert } from "react-alert";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import SendIcon from "@mui/icons-material/Send";

import TextField from "@mui/material/TextField";
import "./Control.css";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from 'react-redux'
import {  addUser, removeUser } from '../../../Store/redux/userFeature'


function Login() {
	const [Loader, setLoader] = useState(false);
	const alert = useAlert();
	const  user = useSelector(state=>state)

	const dispatch = useDispatch()



	console.log("user from redux",user)




	
	// const {user} = User || null;
	
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
	const history = useHistory();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	function HandleLogin(data) {
		// e.preventDefault()

		const UserDetails =  {
			email: data.email,
			password: data.password,
		};
		// const UserDetails = JSON.stringify( {
		// 	email: data.email,
		// 	password: data.password,
		// });

	
		setLoader(true);
		axios
			.post(`${BaseApi}/auth/login`, UserDetails)
			.then((res) => {

			


				if (res.data) {


const newUser = res?.data?.data?._doc
const newToken = res?.data?.token


					dispatch(addUser({newUser,newToken}))
					// localStorage.setItem("admin", JSON.stringify(res?.data?.data?._doc));
					// setLoader(false);
					// LogIn(res.data);
				

					// window.location.reload();

					history.push('/admin')

					
				}
			})
			.catch((err) => {
				console.log(err.message);
				setLoader(false);
				alert.show(`Incorrect Details`, {
					title: "Note !!!",
					type: types.ERROR,
				});
				history.push("/login");
			});
	}

	
	
		if (localStorage.getItem('admin')) {
			return <Redirect to='/admin' />
		}






	return (
		<>
			<div className='login__container'>
				<Container style={{ display: "flex", justifyContent: "center" }}>
					<Paper
						elevation={2}
						style={{
							maxWidth: "700px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<LockOpenIcon
							style={{
								backgroundColor: "#03256C",
								color: "white",
								fontSize: "3rem",
								borderRadius: "50%",
								padding: "6px",
								marginTop: "20px",
							}}
						/>
						<Typography variant='h5' component='h5'>
							Login In
						</Typography>

						<Box
							component='form'
							sx={{
								"& .MuiTextField-root": { m: 2, width: "30ch" },
							}}
							Validate
							autoComplete='On'
							onSubmit={handleSubmit(HandleLogin)}
						>
							<div className='input__item'>
								<TextField
									id='outlined-disabled'
									label='Email'
									name='email'
									placeholder='User@gmail.com'
									{...register("email", { required: "email is required" })}
									error={Boolean(errors.email)}
									helperText={errors.email?.message}
								/>
								<TextField
									id='outlined-password-input'
									label='Password'
									type='password'
									name='password'
									placeholder='******'
									autoComplete='current-password'
									{...register("password", { required: "password is rquired" })}
									error={Boolean(errors.password)}
									helperText={errors.password?.message}
								/>
								<Button variant='outlined' endIcon={<SendIcon />} type='submit'>
									Login
								</Button>
							</div>
						</Box>
					</Paper>
				</Container>
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

export default Login;
