import {makeStyles} from '@mui/styles'

export default makeStyles({
    NavigationBar:{
        minWidth:'100%',
        background:'#191E3A !important',
        borderRadius:'8px',
        minHeight:'51px',
        height:'51px',
        color:'#fafafa',
        display:'flex'
    },
    NavText:{
        fontSize: '13px',
        fontWeight: 400,
        color:'#fafafa',
        fontFamily:'QuickSand',
        verticalAlign:'middle', 
        paddingLeft:'10px',
        minHeight:'51px !important',
        height:'51px !important',
    },
    NavIcon:{
        verticalAlign: 'center',
        strokeWidth: '1.7px'
    },
    NavTabs:{
        minHeight:'51px !important',
        height:'51px !important',
        "& .MuiButtonBase-root.MuiTab-root": {
            fontSize: '13px',
            fontWeight: 400,
            color:'#fafafa',
            fontFamily:'QuickSand',
            verticalAlign:'middle', 
            textAlign:'left',
            paddingLeft:'10px',
            maxHeight:'51px !important',
          },        
          "& .Mui-selected": {
            color:'#e2b921 !important'
          },
          "& .MuiTabs-indicator": {
            display: "none"
          }
    }
})