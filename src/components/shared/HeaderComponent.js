import React, { useState, useEffect } from 'react'
import {getCurrentUser, getSelectedClient, getClients} from '../../api/api'
import AutomateGALogo from '../../assets/images/AutomateGALogo.jpg'
import {Grid} from '@mui/material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useStyles from './HeaderComponent.style'
import { useNavigate } from 'react-router-dom';
import NavigationComponent from './NavigationComponent';
import {getLocalStorage, updateLocalStorage} from '../utils/LoginPageUtils'
import MenuComponent from './MenuComponent';

export default function HeaderComponent() {

  const classes = useStyles();
  const [userDetail, setuserDetail] = useState({})
  const [clientDetail, setclientDetail] = useState({})
  const [clients, setclients] = useState([])
  const [userDropDown, setuserDropDown] = useState([])

  let currentUser=''
  let currentClient=''

  let navigate = useNavigate()
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    async function fetchCurrentUserData(){
      const apiResponse = await getCurrentUser()
      if(apiResponse){
        setuserDetail(apiResponse)
        localStorage.setItem('CurrentUserInfo',JSON.stringify(apiResponse));
        setuserDropDown(apiResponse.roles[0].id == 3 ? 
          [{id:0,name:'On Board Client'},{id:1,name:'Users'},{id:2,name:'Logout'}] :
          [{id:1,name:'Users'},{id:2,name:'Logout'}])
        console.log(userDropDown)
        currentUser = await getLocalStorage('CurrentUserInfo')
        //console.log(currentUser.firstName)
      }
    }

    async function fetchCurrentClient(clientId){
      const apiResponse = await getSelectedClient(clientId)
      if(apiResponse){
        setclientDetail(apiResponse)
        localStorage.setItem('CurrentClient',JSON.stringify(apiResponse))
      }
    }
    
    async function fetchAllClient(){
      const apiResponse = await getClients()
      if(apiResponse){
        setclients(apiResponse)
        localStorage.setItem('AllClients',JSON.stringify(apiResponse))
      }
    }

    fetchCurrentUserData()
    fetchCurrentClient(userDetail.clientId)
    fetchAllClient()
  }, [])
  

  return (
    <>
      <Grid container className={classes.HeaderDiv}>
        {/* <Grid item xs={1} style={{maxWidth:'2.5%'}}></Grid> */}
        <Grid item xs={12} container style={{minWidth:'95%',maxHeight:'70px', alignItems: 'center'}}>
          <Grid item xs={2}>
              <a href="#">
                <img className={classes.AutomateGALogo} src={AutomateGALogo}/>
                <span className={classes.AutomateLogText}>AutomateGA</span>
              </a>
          </Grid>
          <Grid item xs={7}></Grid>
            <Grid item xs={2} style={{paddingRight:'40px'}}>
              <MenuComponent id='ClientDropdown' valuesLists={clients} buttonValue={clientDetail.clientName}/>
            </Grid>
            <Grid item xs={1} style={{paddingRight:'10px'}}>
              <MenuComponent id='UserDropdown' valuesLists={userDropDown} buttonValue={userDetail.firstName}
              startIcon={<PersonOutlinedIcon className={classes.UserIcon}></PersonOutlinedIcon>}
              endIcon={<KeyboardArrowDownIcon className={classes.UserIcon}></KeyboardArrowDownIcon>}/>
            </Grid>
        </Grid>
        {/* <Grid item xs={1} style={{maxWidth:'2.5%'}}></Grid> */}
      </Grid>
      <NavigationComponent/>
    </>
  )
}
