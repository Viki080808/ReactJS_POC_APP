import React from 'react';
import { styled, TextField } from '@mui/material';

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

export default function CustomTextComponent(props) {
  return (
    <CustomTextField props={props}/>
  )
}
