import React, {useState} from 'react';
import {Grid, InputAdornment, styled, Button, TextField, Switch, FormControlLabel, Typography} from '@mui/material';
import useStyles from './LoginComponent.style';
import { Navigate, useNavigate } from 'react-router-dom'
import InfoImage from '../../assets/images/omnichannel-personalization.png';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {checkEmailFormat, checkPassword} from '../utils/LoginPageUtils';

const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#e2b921',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#e2b921',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#e0e6ed',
      }
    },
    '& .MuiInput-input':{
      fontFamily:'QuickSand',
      fontSize:'16px',
      color:'#3b3f5c',
      fontWeight:700
    }
  });

  const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 35,
    height: 18,
    padding: 0,
    display: 'flex',
    marginLeft:'10px',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(12px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#e2b921' : '#e2b921',
        },
      },
    },
    '& .Mui-checked' : {
      '& .MuiSwitch-thumb': {
          backgroundColor:'white'
      }
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#e2b921',
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 14,
      height: 14,
      borderRadius: 8,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 34,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : '#ebedf2',
      boxSizing: 'border-box',
    }
  }));

  const CustomFormControlLabel = styled(FormControlLabel)({
    '& .MuiFormControlLabel-label':{
      fontFamily:'QuickSand',
      fontSize:'14px',
      color:'#3b3f5c',
      fontWeight:600,
    }
  });

  const CustomButton = styled(Button)({
    textTransform: 'none',
    backgroundColor:'#e2b921',
    borderColor: '#e2b921',
    fontFamily: 'QuickSand',
    fontSize:14,
    fontWeight:600,
    '&:hover': {
      backgroundColor: '#e2b921',
      borderColor: '#e2b921'
    }
  });

export default function LoginComponent() {
    const classes = useStyles()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [isValidLogin, setisValidLogin] = useState(true)
    const [emailError, setemailError] = useState(false)
    const [emailErrorMsg, setemailErrorMsg] = useState('')
    const [pwdError, setpwdError] = useState(false)
    const [pwdErrorMsg, setpwdErrorMsg] = useState('')
    const [loginError, setloginError] = useState(false)
    const [showPassword, setshowPassword] = useState(false)


    let navigate = useNavigate()

    const userDetails = {email:"vignesh.r@softcrylic.co.in",password:'pass123'}

    const emailValidation = () => {
      if(checkEmailFormat(email)){
        setemailError(false)
        setemailErrorMsg('')
      }
      else{
        setemailError(true)
        setemailErrorMsg('Please enter valid email address')
      }
    }

    const passwordValidation = () => {
      if(checkPassword(password)){
        setpwdError(false)
        setpwdErrorMsg('')
      }
      else{
        setpwdError(true)
        setpwdErrorMsg('Password is empty')
      }
    }
    
    const emailOnChange = (e) => {
      setemail(e.target.value)
      emailValidation()
    }

    const passwordOnChange = (e) => {
      setpassword(e.target.value)
    }

    const handleShowPassword = (e) => {
      setshowPassword(!showPassword)
    }

    const handleLogin = (e) => {
      e.preventDefault()
      if(checkEmailFormat(email) && checkPassword(password) && email == userDetails.email && password == userDetails.password){
        console.log("login Success")
        setisValidLogin(true)
        setloginError(false)
        isValidLogin && navigate("/home")
      }
      else{
        emailValidation()
        passwordValidation()
        if(email != userDetails.email || password != userDetails.password){
          setloginError(true)
          setisValidLogin(false)
        }

      }
    }

    const redirectToSoftcrylic = (e) => {
      e.preventDefault();
      window.open('https://www.softcrylic.com')
    }

  return (
    <div id='LoginComponent' data-testid='LoginComponent' className={classes.LoginPage}>
        <Grid container className={classes.LoginGrid}>
            <Grid item xs={12} md={6} container>
                <Grid item xs={1} md={2}>
                </Grid>
                <Grid item xs={10} md={8}>
                    <div className={classes.FormContainer}>
                        <div>
                            <h1 className={classes.LoginHeader}>Log In to 
                               <a href='#' onChange={(e)=>{e.preventDefault()}}><span className={classes.SoftcrylicYellow} style={{fontWeight: 600}}> AutomateGA</span></a>
                            </h1>
                            <div className={classes.InputContainer}>
                                <div className={classes.InputFieldDiv}>
                                    <CustomTextField data-testid='EmailInput' 
                                        name='EmailIdInput'
                                        fullWidth required
                                        placeholder='Username'
                                        error={emailError} 
                                        helperText={emailErrorMsg}
                                        onChange={emailOnChange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start" sx={{marginBottom:'10px'}}>
                                                    <PersonOutlineIcon style={{fill:'#e2b921',height:'30px',width:'30px'}}/>
                                                </InputAdornment>
                                            ),
                                            classes : {input:classes.InputField}
                                        }}
                                        variant="standard"
                                    />
                                </div>
                                <div className={classes.InputFieldDiv}>
                                    <CustomTextField data-testid='PasswordInput'
                                        fullWidth required
                                        placeholder='Password'
                                        type={showPassword ? "text" : "password"}
                                        error={pwdError} 
                                        helperText={pwdErrorMsg}
                                        onChange={passwordOnChange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start" sx={{marginBottom:'15px'}}>
                                                    <LockOutlinedIcon style={{fill:'#e2b921',height:'30px',width:'30px'}}/>
                                                </InputAdornment>
                                            ),
                                            classes : {input:classes.InputField}
                                        }}
                                        variant="standard"
                                    />
                                </div>
                                <div>  
                                <div style={{marginTop:'4px',marginBottom:'24px'}}>
                                  <Typography style={{fontFamily:'QuickSand',color:'#e7515a', fontSize:'14px', fontWeigth:400}}>{loginError ? 'Invalid credentials, please try again!' : ''}</Typography>
                                </div> 
                                                              
                                <Grid container>
                                  <Grid item xs={4} style={{display:'flex',justifyContent:'flex-start'}}>
                                    <CustomFormControlLabel data-testid='ShowPasswordToggle' onClick={handleShowPassword} label="Show Password" value="Show Password" sx={{marginLeft:'0px',fontFamily:'QuickSand'}} 
                                     control={<CustomSwitch />}  labelPlacement="start"/>
                                  </Grid>
                                  <Grid item xs={4}></Grid>
                                  <Grid item xs={4} style={{display:'flex',justifyContent:'flex-end'}}>
                                    <CustomButton data-testid='LoginButton' onClick={handleLogin} variant="contained">Log In</CustomButton>
                                  </Grid>
                                </Grid>
                                </div>
                                <div className={classes.TermsCondition}>
                                  <p>© 2020 All Rights Reserved. 
                                    <a data-testid='SoftcryilLink' className={classes.SoftcrylicYellow} href="#" onClick={redirectToSoftcrylic}> Softcrylic LLC</a>.
                                  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={1} md={2}>
                </Grid>
                
            </Grid>
            <Grid item xs={12} md={6} container direction='column' className={classes.InfoGrid}>
                <Grid item>
                    <h1 data-testid='InfoHeader' className={classes.InfoHeader}>
                        <span className={classes.SoftcrylicYellow}>We Make </span> 
                         Data Work
                    </h1>
                </Grid>
                <Grid item style={{maxHeight:'150px'}}>
                    <h4 data-testid='InfoSubHeader' className={classes.InfoSubHeader}>We help organizations turn data chaos into business clarity and action.</h4>
                </Grid>
                <Grid item>
                    <p data-testid='InfoDescription' className={classes.InfoDescription}>Our customers work with us to provide strategies, solutions and services through the lifecycle of data. We help capture, measure, activate, predict trends and deliver results to solve the ongoing challenge of running your business in a data-driven manner.</p>
                </Grid>
                <Grid item>
                    <img data-testid='InfoImage' className={classes.InfoImage} src={InfoImage} alt=""/>
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
}
