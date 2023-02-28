import {makeStyles} from '@mui/styles'

export default makeStyles({
    HeaderDiv:{
        height:'70px'
    },
    AutomateGALogo:{
        width:'40px',
        height:'40px',
        borderRadius:'5px',
        verticalAlign:'middle'
    },
    AutomateLogText:{
        fontWeight: 700,
        letterSpacing: '1px',
        color: '#060818',
        fontSize: '20px',
        fontFamily:'QuickSand',
        paddingLeft:'5px'
    },
    UserIcon:{
        color: '#888ea8',
        width: '15px',
        height: '15px',
        verticalAlign: 'center',
        marginLeft: '4px',
        strokeWidth: '1.7px'
    },
    MenuItem:{
        padding:'8px 15px',
        fontSize: '13px',
        fontWeight: 500,
        color: '#3b3f5c',
        fontFamily:'QuickSand',
        '&:hover':{
            color:'#e2b921',
            backgroundColor:'#fcf8e8'
        }
    }

})