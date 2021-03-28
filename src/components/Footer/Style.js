import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: 150,
    paddingRight: 150,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  titleFooter: {
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: "700",
    color: "#3E2C1F",
    lineHeight: "29px",
  },
  wrapperFooter: {
    paddingTop: 56,
    paddingBottom: 56,
  },
  inputEmail: {
    backgroundColor: "white",
    height: 36,
    minWidth: 280,
    color: "#999999",
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnEmail: {
    height: 36,
    background: "#F19101",
    paddingLeft: 15,
    paddingRight: 15,
  },
  textBtnEmail: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "500",
    color: "#572F12",
    lineHeight: "16px",
  },
}));

export default useStyles;
