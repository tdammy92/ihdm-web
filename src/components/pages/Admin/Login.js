import React,{useState} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {BaseApi} from "../../../Store/Utility";
import {useHistory} from 'react-router-dom'
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import SendIcon from "@mui/icons-material/Send";

import TextField from "@mui/material/TextField";
import "./Control.css";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Login() {

	const [Loader, setLoader] = useState(false);

    const history = useHistory()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

    

    function HandleLogin(data) {
        // e.preventDefault()

    
        const UserDetails = {
            identifier : data.email,
            password:data.password
        }

        console.log(UserDetails)
		setLoader(true)
        axios.post(`${BaseApi}/auth/local`, UserDetails)
        .then(res=> {
           
            
            // SignIn(res.data)
            if (res.data.jwt) {
                localStorage.setItem('admin', JSON.stringify(res.data))
				setLoader(false)
                // SignIn(res.data)
                console.log(res.data)
              history.push('/')
            }
        })
        .catch((err)=>{
            console.log(err.message);
			setLoader(false)
        })


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
						noValidate
						autoComplete='off'
                        onSubmit={handleSubmit(HandleLogin)}
					>
						<div className='input__item'>
							<TextField
								id='outlined-disabled'
								label='Email'
                                name='email'
								placeholder='User@gmail.com'
								{...register("email", { required: "email is rquired" })}
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
