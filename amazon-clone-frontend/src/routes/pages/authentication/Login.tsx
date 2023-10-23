import {NavLink, useNavigate} from 'react-router-dom';
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

// *** MUI
import {Avatar, Box, Button, CssBaseline, Grid, InputLabel, TextField, Typography, Container} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// *** Custom Components or functions
import {userLogin} from '../../../api/apiRoutes';
import useUserContext from '../../../utility/hooks/includeUserContext';
import {showNotification} from "../../../utility/popup/Notification";
import {useDispatch} from "react-redux";
import {getCart} from "../../../redux/CartAction";
// import {showNotification} from '../../../utility/showNotification';

function Login() {
    const {login} = useUserContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email is invalid").required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(5, "Password must be at least 5 characters"),
    });
    const formOptions = {resolver: yupResolver(validationSchema)};
    const {register, handleSubmit, formState} = useForm(formOptions);
    const {errors} = formState;

    const onSubmit = (data: { email: string, password: string }) => {
        userLogin(data).then(res => {
            console.log(res)
            if (res.data.success) {

                localStorage.setItem('token', res?.data?.token || '');
                showNotification({
                    icon: "success",
                    title: res.data.message,
                })
                setTimeout(() => {
                    login(res.data.token)
                    dispatch(getCart())
                    navigate("/home")
                    // window.location.reload();
                }, 2000);
            } else {
                showNotification({
                    icon: "success",
                    title: res.data.message,
                })
            }
        }).catch(err => {
            if (!err.response.data.status) {
                showNotification({
                    icon: "error",
                    title: err.response.data.message,
                })
            }
        })
    };

    return (
        <Container component="main" maxWidth="xs" sx={{marginTop: 20, paddingY: 6, boxShadow: 2}}>
            <CssBaseline/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                        {...register("email")}
                    />
                    {errors.email && <InputLabel sx={{color: 'error.main'}}>{errors.email?.message}</InputLabel>}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register("password")}
                    />
                    {errors.password && <InputLabel sx={{color: 'error.main'}}>{errors.password?.message}</InputLabel>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>

                        </Grid>
                        &nbsp;&nbsp;&nbsp;
                        <Grid item>
                            <NavLink to="/register">
                                {"Don't have an account? Sign Up"}
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login
