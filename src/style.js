import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    Container_bg: {
      backgroundColor: "#103037",
    },
    footerBody:{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        color:'white',
    },
    footerSpan:{
        marginBottom:'5px',
        "& a":{
            color:'white',
            textDecoration:'none'
        }
    },
  });

  export default useStyles;

