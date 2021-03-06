import { makeStyles } from "@material-ui/core/styles";

export const selectInputStyle = makeStyles((theme) => ({
  root: {
    background: "#F1F2F5",
  },
  formControl: {
    width: 260,
    background: "#F1F2F5",
    border: "1px solid #000",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    backgroundColor: "#F1F2F5",
    padding: "8px",
  },
  selectRoot: {
    "&:focus": {
      backgroundColor: "transparent",
    },
  },
}));
