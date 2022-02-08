import React from "react";
import {
	Container,
	Typography,
	Box,
	Link,
	Avatar,
	Grid,
	Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Input from "../../components/Form/Input";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/user";

const Auth = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.user.data);

	const loginHandler = () => {
		dispatch(login({ email: "myemail@gmail.com", password: "password" }));
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box
					component="form"
					// onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1 }}
				>
					<Input
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<Input
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					{/* <FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/> */}
					<Button
						type="button"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						onClick={loginHandler}
					>
						Sign In
					</Button>
					{JSON.stringify(state)}
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default Auth;
