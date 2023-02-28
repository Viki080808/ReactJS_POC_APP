import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import {styled, Box, AppBar, Toolbar, Tabs, Tab, Divider} from '@mui/material';
import PropTypes from 'prop-types';
import useStyles from './NavigationComponent.style'
import HomeComponent from '../home/HomeComponent'
import DataImportComponent from '../dataimport/DataImportComponent'

const CustomTab=styled(Tab)({
  '& .Mui-selected':{
    color:'#e2b921 !important'
  }
})

export default function NavigationComponent() {

  const classes = useStyles()

  const [value, setvalue] = useState(0)


  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newvalue) => {
    setvalue(newvalue)
  }

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <AppBar position='static' className={classes.NavigationBar}>
        <Toolbar style={{minHeight:'51px',height:'51px'}}>
          <Tabs value={value} onChange={handleChange} className={classes.NavTabs}>
            <Tab 
              icon={<HomeOutlinedIcon className={classes.NavIcon}/>} 
              iconPosition="start"
              disableRipple 
              className={classes.NavText} label="Home" {...a11yProps(0)} />
              <Divider orientation="vertical" variant="middle" flexItem style={{background:'#fafafa'}} />
            <Tab 
              icon={<DashboardCustomizeOutlinedIcon className={classes.NavIcon}/>} 
              iconPosition="start"
              disableRipple 
              className={classes.NavText} label="Data Import Dashboard" {...a11yProps(1)} />
              <Divider orientation="vertical" variant="middle" flexItem style={{background:'#fafafa'}} />
            <Tab 
              icon={<BackupTableOutlinedIcon className={classes.NavIcon}/>} 
              iconPosition="start"
              disableRipple 
              className={classes.NavText} label="Property Admin Dashboard" {...a11yProps(2)} />
              <Divider orientation="vertical" variant="middle" flexItem style={{background:'#fafafa'}} />
            <Tab 
              icon={<InsertDriveFileOutlinedIcon className={classes.NavIcon}/>} 
              iconPosition="start"
              disableRipple 
              className={classes.NavText} label="Audit Dashboard" {...a11yProps(3)} />
              <Divider orientation="vertical" variant="middle" flexItem style={{background:'#fafafa'}} />
              <Tab 
                icon={<AccountBoxOutlinedIcon className={classes.NavIcon}/>} 
                iconPosition="start"
                disableRipple 
                className={classes.NavText} label="GA Accounts" {...a11yProps(4)} />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>

  <TabPanel value={value} index={0}>
    <HomeComponent/>
  </TabPanel>
  <TabPanel value={value} index={1}>
    <DataImportComponent/>
  </TabPanel>
</>
  )
}
