import { Button, Menu, MenuItem, styled } from '@mui/material';
import React, { useState, useEffect } from 'react'
import useStyles from './MenuComponent.style'

export default function MenuComponent(props) {

  const classes = useStyles()
  const {id,valuesLists,buttonValue, ...rest} = props

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const buttonText = id==='ClientDropdown' && valuesLists.length >0 ? valuesLists[selectedIndex].clientName : buttonValue
  const buttonColor = id==='ClientDropdown' ? '#888ea8' :'#e2b921'
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event)
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    //setSelectedIndex(selectedIndex == null ? 0 : selectedIndex)
    //console.log('Selected index is '+selectedIndex)
  }, [])
  

  return (
    <>
        <Button className={classes.ClientButton} onClick={handleClick}
              disableRipple
              size="small"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              sx={{textTransform: 'none',disableRipple:true, color: buttonColor,
                '&:hover': {
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
              }}} {...rest}>
              {buttonText}
        </Button>
        <Menu anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                maxWidth:'155px',
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 4px 6px rgba(85,85,85,0.80))',
                  mt: 1.5,
                  width:'135px',
                  borderRadius:'6px',
                  padding:'10px',
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '& .MuiList-root':{
                    pt:0,
                    pb:0
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
            {valuesLists.map((valueList,index) => (<MenuItem sx={{padding:'8px 15px',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#3b3f5c',
                    fontFamily:'QuickSand',
                    '&:hover':{
                        color:'#e2b921',
                        backgroundColor:'#fcf8e8'
                    }}}
            onClick={(event) => handleMenuItemClick(event, index)}>
                {id==='ClientDropdown' ? valueList.clientName : valueList.name}
              </MenuItem>))}
        </Menu>
    </>
  )
}
